'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import style from '../_component/imgSection.module.css'
import ImgList from '../_component/ImgList'
import VisualSection from '../_component/VisualSection'
import { Image } from '@/model/Image'
import getSearchResult from '../_lib/getSearchResult'

//todo 문제확인
// 검색 후 아이템 클릭시 상세페지로 라우팅되고 모달이 떠야함
// 라우팅이 되면서 query값을 읽어올수 없게되고 데이터 요청 불가 -> 오류

//=> 라우트 추가

export default function Page() {
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
    fetchData()
  }, [searchKeyoword])

  if (searchKeyoword === '') {
    const v = {
      title: '',
      description: '',
    }
    const src = ''

    return (
      searchResult && (
        <div>
          <VisualSection v={v} src={src} />
          <section className={style.image_section}>
            <h3 className="blind">이미지 리스트</h3>
            <div className={style.images_section_inner}></div>
          </section>
        </div>
      )
    )
  }

  const v = {
    title: searchKeyoword,
    description: `"${searchKeyoword}"의 검색 결과 ${
      searchResult && searchResult.length
    }건`,
  }

  const firstImageSrc =
    searchResult && searchResult[0] ? searchResult[0].urls.full : ''
  if (searchResult) {
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
}
