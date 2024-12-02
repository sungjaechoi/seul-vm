'use client'
import { useEffect, useState } from 'react'
import MainPage from './_component/MainPage'
import { Image } from '@/model/Image'
import { getImages } from './_lib/getImages'

export default function Page() {
  const [images, setImages] = useState<Image[]>([])
  const v = {
    title: 'seul gallery',
    description: 'pixabayAPI를 이용한 이미지 갤러리 입니다.',
  }
  const firstImageSrc = images[0] ? images[0].largeImageURL : ''
  const addImages = (images: Image[]) => {
    setImages((prevImages) => [...prevImages, ...images])
  }

  useEffect(() => {
    const fetchImages = async () => {
      const images = await getImages(1)
      setImages(images)
    }
    fetchImages()
  }, [])

  return (
    <MainPage v={v} src={firstImageSrc} images={images} addImages={addImages} />
  )
}
