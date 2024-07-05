'use client'

import { useContext } from 'react'
import { likesContext } from '../_component/LikesProvider'
import ImgList from '@/app/_component/ImgList'

export default function MyLikes() {
  const { likes } = useContext(likesContext)
  const images = likes.map((like) => like.img)

  return <ImgList images={images} query="" />
}
