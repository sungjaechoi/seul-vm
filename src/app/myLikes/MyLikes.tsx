'use client'
import { useContext, useState } from 'react'
import { likesContext } from '../_component/LikesProvider'
import ImgList from '@/app/_component/ImgList'
import style from './myLikes.module.css'

export default function MyLikes() {
  const { likes } = useContext(likesContext)
  const images = likes.map((like) => like.img)

  return images.length === 0 ? (
    <div className={style.not_mylikes_area}>
      <h2 className="blind">좋아요를 표시한 이미지 항목</h2>
      <div className={style.img_box}></div>
      <span>좋아요를 표시한 사진이 없습니다.</span>
    </div>
  ) : (
    <>
      <h2 className="blind">좋아요를 표시한 이미지 항목</h2>
      <ImgList images={images} query="" />
    </>
  )
}
