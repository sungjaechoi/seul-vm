'use client'
import style from './imgSection.module.css'
import ImgItem from './ImgItem'
import { Image } from '@/model/Image'
import { useEffect, useState, useCallback } from 'react'
import { AutoSizer, Grid } from 'react-virtualized'
import { getImages } from '../_lib/getImages'
import { usePathname } from 'next/navigation'

type Props = {
  images: Image[]
}

export default function ImgList({ images }: Props) {
  const [imageData, setImageData] = useState(images)
  const [isLoading, setIsLoading] = useState(false)
  const [nextPageNum, setNextPageNum] = useState(2)

  const pathName = usePathname().substring(9)
  console.log(pathName)
  console.log('imageData', imageData)

  const fetchMoreImages = useCallback(async () => {
    if (!isLoading) {
      console.log('nextPageNum', nextPageNum)
      setIsLoading(true)
      const nextImage = (await getImages(nextPageNum, pathName)) as Image[]
      console.log('nextImage', nextImage)
      setImageData((prevImageData) => [...prevImageData, ...(nextImage || [])])
      setNextPageNum((prevNum) => ++prevNum)
      setIsLoading(false)
    }
  }, [isLoading, nextPageNum, pathName])

  useEffect(() => {
    const scrollListener = () => {
      const scrollTop = window.scrollY // scrollTop: 현재 스크롤의 위치
      const clientHeight = document.documentElement.clientHeight // clientHeight: 보이는 영역의 높이
      const scrollHeight = document.documentElement.scrollHeight // scrollHeight: 전체 스크롤 높이
      if (scrollTop + clientHeight >= scrollHeight - 300 && !isLoading) {
        console.log('끝에 도달')
        fetchMoreImages()
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [fetchMoreImages, isLoading])

  return (
    <div className={style.img_list}>
      {imageData.length}
      <AutoSizer>
        {({ width, height }) => (
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
            columnWidth={310} // 각 열의 너비를 지정
            rowCount={Math.ceil(imageData.length / 6)} //* 렌더링할 행의 총 개수
            rowHeight={447} // 항목의 높이 = 각 행의 높이
            width={width} // 항목의 너비
            gridGap={20}
            height={height}
            style={{ height: 'auto' }}
          />
        )}
      </AutoSizer>
    </div>
  )
}
