'use client'
import { FaHeart } from 'react-icons/fa'
import style from './myLikes.module.css'
import { useContext } from 'react'
import { likesContext } from './LikesProvider'
import { useRouter } from 'next/navigation'

export default function MyLikes() {
  const { likes } = useContext(likesContext)
  const router = useRouter()
  const onClick = () => {
    router.push('/myLikes')
  }

  return (
    <button type="button" onClick={onClick} className={style.my_like_button}>
      <div className={style.like_box}>
        <FaHeart />
        <span className={style.like_num}>{likes.length}</span>
      </div>
    </button>
  )
}
