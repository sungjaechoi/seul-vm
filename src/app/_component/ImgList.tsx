'use client'
import style from './imgSection.module.css'
import ImgItem from './ImgItem'
import { Image } from '@/model/Image'
import { useEffect, useState, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { getRandomImages } from '../_lib/getRandomImages'
import { getImages } from '../_lib/getImages'
import { sectionInfo } from '@/model/SectionInfo'
import getSearchResult from '../_lib/getSearchResult'
import { throttle } from 'lodash'

type Props = {
  images: Image[]
  query: string
  addImages?: (images: Image[]) => void
}

export default function ImgListWrapper({ images, query, addImages }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImgList images={images} query={query} addImages={addImages} />
    </Suspense>
  )
}

function ImgList({ images, query, addImages }: Props) {
  const searchKeywordQuery = useSearchParams()
  const searchKeyoword = searchKeywordQuery.get('searchKeyword') || ''
  const [isLoading, setIsLoading] = useState(false)
  const [nextRandomImagePageNum, setNextRandomImagePageNum] = useState(2)
  const [nextImagePageNum, setNextImagePageNum] = useState(2)
  const [nextSearchPageNum, setNextSearchPageNum] = useState(2)
  const pathname = usePathname()
  const navpath = pathname.substring(9)

  useEffect(() => {
    const fetchMoreImages = async () => {
      if (!isLoading) {
        setIsLoading(true)
        if (pathname === '/') {
          const nextRandomImages = (await getRandomImages(
            nextRandomImagePageNum,
          )) as Image[]
          addImages && addImages(nextRandomImages)
          setNextRandomImagePageNum((prevNum) => prevNum + 1)
        }

        const isNavCase = Object.hasOwn(sectionInfo, navpath)
        //! Object.hasOwn() => sectionInfo객체 내부에에서 navpath 값이 있는지를 불리언으로 반환
        //? if문 라벨링은 조건이 명확하게 보이지 않을때 꼭 해주자! => 여러조건으로 복잡해 지는 경우 = 라벨링
        if (isNavCase) {
          const nextImages = (await getImages(
            nextImagePageNum,
            navpath,
          )) as Image[]

          addImages && addImages(nextImages)
          setNextImagePageNum((prevNum) => prevNum + 1)
        }

        if (pathname === '/search') {
          const nextSearchResultImagesObject = await getSearchResult(
            nextSearchPageNum,
            searchKeyoword,
          )
          const nextSearchResultImages = nextSearchResultImagesObject.hits
          addImages && addImages(nextSearchResultImages)
          setNextSearchPageNum((prevNum) => prevNum + 1)
        }
        setIsLoading(false)
      }
    }

    const scrollListener = throttle(() => {
      const scrollTop = window.scrollY // scrollTop: 현재 스크롤의 위치
      const clientHeight = document.documentElement.clientHeight // clientHeight: 보이는 영역의 높이
      const scrollHeight = document.documentElement.scrollHeight // scrollHeight: 전체 스크롤 높이
      if (scrollTop + clientHeight >= scrollHeight - 300 && !isLoading) {
        fetchMoreImages()
      }
    }, 150)

    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [
    isLoading,
    addImages,
    navpath,
    pathname,
    searchKeyoword,
    nextImagePageNum,
    nextSearchPageNum,
  ])

  return (
    <>
      <ul className={style.img_list}>
        {images.map((image) => (
          <ImgItem key={image.id} image={image} query={query} />
        ))}
      </ul>
    </>
  )
}
