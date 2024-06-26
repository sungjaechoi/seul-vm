'use client'
import ImgList from './ImgList'
import VisualSection from './VisualSection'
import { Image } from '@/model/Image'
import style from '../_component/imgSection.module.css'
import { useState } from 'react'

type Props = {
  v: { title: string; description: string }
  src: string
  images: Image[]
}

export default function MainPage({ v, src, images }: Props) {
  const [imageState, setImageState] = useState(images)
  const addImages = (images: Image[]) => {
    setImageState([...imageState, ...images])
  }
  return (
    <div>
      <VisualSection v={v} src={src} />
      <section className={style.image_section}>
        <h3 className="blind">이미지 리스트</h3>
        <div className={style.images_section_inner}>
          {imageState && (
            <ImgList images={imageState} query="" addFn={addImages} />
          )}
        </div>
      </section>
    </div>
  )
}
