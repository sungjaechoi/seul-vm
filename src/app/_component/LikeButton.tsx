'use client'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import style from './likeButton.module.css'
export default function LikeButton() {
  const [isliked, setIsLiked] = useState(false)
  const onLickBtnClick = () => {
    setIsLiked((prevState) => !prevState)
  }
  return (
    <button
      className={style.like_button}
      type="button"
      onClick={onLickBtnClick}
    >
      <span className="blind">좋아요</span>
      {isliked ? <FaHeart className={style.like} /> : <FaHeart />}
    </button>
  )
}
