'use client'
import style from './imgSection.module.css'
import ImgItem from './ImgItem'
import { Image } from '@/model/Image'
import { useEffect, useState, useCallback } from 'react'
import { AutoSizer, Grid, ScrollEventData } from 'react-virtualized'
import { getImages } from '../_lib/getImages'
import { usePathname, useSearchParams } from 'next/navigation'
import { getRandomImages } from '../_lib/getRandomImages'
import { typeSectionInfo } from '@/model/SectionInfo'
import getSearchResult from '../_lib/getSearchResult'

type Props = {
  images: Image[]
}

export default function ImgList({ images }: Props) {
  const [imageData, setImageData] = useState(images)
  const [isLoading, setIsLoading] = useState(false)
  const [nextImagePageNum, setNextImagePageNum] = useState(1)
  const [nextSearchPageNum, setNextSearchPageNum] = useState(1)
  const [heightState, setHeightState] = useState(Infinity)

  const query = useSearchParams()
  const searchKeyoword = query.get('searchKeyword') || ''
  const pathname = usePathname()
  const NavPath = pathname.substring(8)
  console.log('pathname', pathname)

  const fetchMoreImages = useCallback(async () => {
    //! nexpagenum도 메모리제이션 되니까 따로 써야 하나?
    if (!isLoading) {
      setIsLoading(true)
      if (pathname === '/') {
        const nextRandomImages = (await getRandomImages()) as Image[]
        setImageData((prevImageData) => [
          ...prevImageData,
          ...(nextRandomImages || []),
        ])
      }
      if (NavPath === (NavPath as keyof typeSectionInfo)) {
        console.log('??')
        const nextImages = (await getImages(
          nextImagePageNum,
          NavPath,
        )) as Image[]
        setImageData((prevImageData) => [
          ...prevImageData,
          ...(nextImages || []),
        ])
        setNextImagePageNum((prevNum) => ++prevNum)
        console.log('nextImagePageNum', nextImagePageNum)
        setImageData((prevImageData) => [
          ...prevImageData,
          ...(nextImages || []),
        ])
      }
      //! 재 검색시 이전 데이터 없어야함 -> 리렌더??
      if (pathname === '/search') {
        const nextSearchResultImages = (await getSearchResult(
          nextSearchPageNum,
          searchKeyoword,
        )) as Image[]
        setNextSearchPageNum((prevNum) => ++prevNum)
        console.log('nextSearchPageNum', nextSearchPageNum)
        setImageData((prevImageData) => [
          ...prevImageData,
          ...(nextSearchResultImages || []),
        ])
      }
      setIsLoading(false)
    }
  }, [isLoading, NavPath, pathname, searchKeyoword])

  const scrollListener = (params: ScrollEventData) => {
    // console.log('scrollTop', params.scrollTop)
    // console.log('clientHeight', params.clientHeight)
    // console.log('scrollHeight', params.scrollHeight)
    const htmlEl = document.querySelector('html') as HTMLElement
    // console.log('params.scrollTop :', params.scrollTop)
    if (params.scrollTop === 0) {
      setHeightState(Infinity)
      htmlEl.style.overflowY = ''
    }
    if (
      params.scrollTop + params.clientHeight >= params.scrollHeight - 300 &&
      !isLoading
    ) {
      fetchMoreImages()
    }
  }

  useEffect(() => {
    const htmlEl = document.querySelector('html') as HTMLElement
    const htmlOverflowEvent = () => {
      const scrollTop = window.scrollY // scrollTop: 현재 스크롤의 위치

      if (scrollTop >= 460) {
        htmlEl.style.overflowY = 'hidden'
        setHeightState(800)
      }
    }
    window.addEventListener('scroll', htmlOverflowEvent)
    return () => {
      window.removeEventListener('scroll', htmlOverflowEvent)
      htmlEl.style.overflowY = ''
    }
  }, [])

  return (
    <div className={style.img_list}>
      {/* {imageData.length} */}
      <AutoSizer>
        {({ width }) => (
          <Grid
            cellRenderer={({ columnIndex, key, rowIndex, style }) => {
              const index = rowIndex * 6 + columnIndex
              return (
                index < imageData.length && (
                  <div key={key} style={style}>
                    <ImgItem
                      key={imageData[index].id}
                      image={imageData[index]}
                    />
                  </div>
                )
              )
            }}
            columnCount={6} // 열의 개수를 지정
            columnWidth={314} // 각 열의 너비를 지정
            rowCount={Math.ceil(imageData.length / 6)} //* 렌더링할 행의 총 개수
            rowHeight={447} // 항목의 높이 = 각 행의 높이
            width={width} // 항목의 너비
            gridGap={20}
            height={heightState}
            onScroll={scrollListener}
            style={{
              padding: '0 10px 10px 10px',
              marginTop: '20px',
            }}
          />
        )}
      </AutoSizer>
    </div>
  )
}
