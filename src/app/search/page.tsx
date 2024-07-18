'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import style from '../_component/imgSection.module.css'
import ImgList from '../_component/ImgList'
import VisualSection from '../_component/VisualSection'
import { Image } from '@/model/Image'
import getSearchResult from '../_lib/getSearchResult'
import { getRandomColor } from '../_lib/getRandomColor'

function SearchPage() {
  const query = useSearchParams()
  const searchKeyoword = query.get('searchKeyword') || ''
  const [searchResult, setSearchResult] = useState<Image[]>([])
  const [searchTotal, setSearchTotal] = useState(0)
  const [visualShow, setVisualShow] = useState(false)
  const addSearchResult = (images: Image[]) => {
    setSearchResult([...searchResult, ...images])
  }

  useEffect(() => {
    const fetchData = async () => {
      setVisualShow(false)
      const searchResultObject = await getSearchResult(1, searchKeyoword)
      const searchResult = searchResultObject.hits as Image[]
      setSearchResult(searchResult)
      const searchTotal = searchResultObject.total
      setSearchTotal(searchTotal)
      setVisualShow(true)
    }
    fetchData()
  }, [searchKeyoword])

  const formattedNumber = searchTotal.toLocaleString('en-US')

  const v = {
    title: searchKeyoword,
    description: `"${searchKeyoword}"의 검색 결과 ${formattedNumber}건`,
  }

  const firstImageSrc = searchResult[0] ? searchResult[0].largeImageURL : ''

  return (
    <div>
      {visualShow && (
        <VisualSection v={v} src={firstImageSrc} color={getRandomColor()} />
      )}
      {searchResult.length === 0 ? null : (
        <section className={style.image_section}>
          <h3 className="blind">이미지 리스트</h3>
          <div className={style.images_section_inner}>
            <ImgList
              images={searchResult}
              query={searchKeyoword}
              addFn={addSearchResult}
            />
          </div>
        </section>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPage />
    </Suspense>
  )
}
