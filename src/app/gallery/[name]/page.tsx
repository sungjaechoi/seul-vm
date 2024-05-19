import ImgList from '@/app/_component/ImgList'
import VisualSection from '@/app/_component/VisualSection'
import React from 'react'
import style from '../../page.module.css'
import { typeSectionInfo, sectionInfo } from '@/model/SectionInfo'
import { getImages } from '@/app/_lib/getImages'

type Props = {
  params: {
    name: string
  }
}

export default async function Page({ params }: Props) {
  //! Notion - "as Key of"정리
  const nameV = params.name as keyof typeSectionInfo
  const v = sectionInfo[nameV]
  const images = (await getImages(nameV)) || []
  const firsImageSrc = images[0] ? images[0].urls.full : ''

  return (
    <div>
      <VisualSection v={v} src={firsImageSrc} />
      <section className={style.image_section}>
        <h3 className="blind">이미지 리스트</h3>
        <div className={style.images_section_inner}>
          <ImgList images={images} />
        </div>
      </section>
    </div>
  )
}
