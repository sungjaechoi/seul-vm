'use client'
import { FaHeart } from 'react-icons/fa'
import style from './likeButton.module.css'

type Props = {
  isLiked: boolean
  onLike: () => void
  offLike: () => void
}

export default function LikeButton({ isLiked, onLike, offLike }: Props) {
  const onLickBtnClick = () => {
    if (isLiked) {
      offLike()
    } else {
      onLike()
    }
  }

  return (
    <button
      tabIndex={0}
      className={style.like_button}
      type="button"
      onClick={onLickBtnClick}
    >
      <span className="blind">좋아요</span>
      {isLiked ? <FaHeart className={style.like} /> : <FaHeart />}
    </button>
  )
}
