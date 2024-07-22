import React from 'react'
import { typeSectionInfo, sectionInfo } from '@/model/SectionInfo'
import { getImages } from '@/app/_lib/getImages'
import MainPage from '@/app/_component/MainPage'

type Props = {
  params: {
    name: string
  }
}

export default async function Page({ params }: Props) {
  //! Notion - "as Key of"정리
  const nameV = params.name as keyof typeSectionInfo
  const v = sectionInfo[nameV]
  const images = (await getImages(1, nameV)) || []
  const firstImageSrc = images[0] ? images[0].largeImageURL : ''

  return <MainPage v={v} src={firstImageSrc} images={images} />
}
