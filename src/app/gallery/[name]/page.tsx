'use client'
import React, { useEffect, useState } from 'react'
import { typeSectionInfo, sectionInfo } from '@/model/SectionInfo'
import MainPage from '@/app/_component/MainPage'
import { getImages } from '@/app/_lib/getImages'
import { Image } from '@/model/Image'

type Props = {
  params: {
    name: string
  }
}

export default function Page({ params }: Props) {
  //! Notion - "as Key of"정리
  const [images, setImages] = useState<Image[]>([])
  const nameV = params.name as keyof typeSectionInfo
  const v = sectionInfo[nameV]
  const firstImageSrc = images[0] ? images[0].largeImageURL : ''
  const addImages = (images: Image[]) => {
    setImages((prevImages) => [...prevImages, ...images])
  }

  useEffect(() => {
    const fetchImages = async () => {
      const images = await getImages(1, nameV)
      setImages(images)
    }
    fetchImages()
  }, [nameV])

  return (
    <MainPage v={v} src={firstImageSrc} images={images} addImages={addImages} />
  )
}
