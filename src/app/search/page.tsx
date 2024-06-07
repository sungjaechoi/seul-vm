'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import style from '../_component/imgSection.module.css'
import ImgList from '../_component/ImgList'
import VisualSection from '../_component/VisualSection'
import { Image } from '@/model/Image'
import getSearchResult from '../_lib/getSearchResult'

function SearchPage() {
  const query = useSearchParams()
  const searchKeyoword = query.get('searchKeyword') || ''
  const [searchResult, setSearchResult] = useState<Image[]>([])
  const [visualShow, setVisualShow] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setVisualShow(false)
      const searchResult = (await getSearchResult(searchKeyoword)) as Image[]
      setSearchResult(searchResult)
      setVisualShow(true)
    }
    console.log('fetchData()')
    fetchData()
  }, [searchKeyoword])

  const v = {
    title: searchKeyoword,
    description: `"${searchKeyoword}"의 검색 결과 ${searchResult.length}건`,
  }

  const firstImageSrc = searchResult[0] ? searchResult[0].urls.full : ''

  return (
    <div>
      {visualShow && <VisualSection v={v} src={firstImageSrc} />}
      {searchResult.length === 0 ? null : (
        <section className={style.image_section}>
          <h3 className="blind">이미지 리스트</h3>
          <div className={style.images_section_inner}>
            <ImgList images={searchResult} />
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
