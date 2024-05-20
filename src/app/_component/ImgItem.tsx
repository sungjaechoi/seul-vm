'use client'
import style from './imgList.module.css'
import Link from 'next/link'
import { Image } from '@/model/Image'
import { FaHeart } from 'react-icons/fa'
import { useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import ImageProfile from './ImageProfile'
import { usePathname } from 'next/navigation'

dayjs.locale('ko')
dayjs.extend(relativeTime)

type Props = {
  image: Image
}

export default function ImgItem({ image }: Props) {
  const pathname = usePathname()
  const [isliked, setIsLiked] = useState(false)
  const onLickBtnClick = () => {
    setIsLiked((prevState) => !prevState)
  }

  return (
    <>
      <li className={style.img_item}>
        <div className={style.img_box}>
          <img src={image.urls.small} alt={image.alternative_slugs.ko} />
        </div>
        <Link
          href={`${pathname}/photo/${image.id}`}
          className={style.hover_info_area}
        >
          <div className={style.etc_box}>
            <ImageProfile user={image.user} />
            <span>{dayjs(image.created_at).fromNow(false)}</span>
          </div>
        </Link>
        <button
          className={style.like_button}
          type="button"
          onClick={onLickBtnClick}
        >
          {isliked ? <FaHeart className={style.like} /> : <FaHeart />}
        </button>
      </li>
    </>
  )
}
