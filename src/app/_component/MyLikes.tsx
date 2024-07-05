'use client'
import { FaHeart } from 'react-icons/fa'
import style from './myLikes.module.css'
import { useContext } from 'react'
import { likesContext } from './LikesProvider'

export default function MyLikes() {
  // const { likes, addLike, removeLike } = useContext(likesContext)

  return (
    <button type="button" className={style.my_like_button}>
      <div className={style.like_box}>
        <FaHeart />
        <span className={style.like_num}>1</span>
      </div>
    </button>
  )
}
