'use client'
import ImageProfile from '@/app/_component/ImageProfile'
import style from './page.module.css'
import LikeButton from '@/app/_component/LikeButton'
import SkeletonImage from '@/app/_component/SkeletonImage'
import ScrollEvent from './_event/ScrollEvent'
import CloseButton from '@/app/_component/CloseButton'
import { Image } from '@/model/Image'
import { useContext } from 'react'
import { likesContext } from '@/app/_component/LikesProvider'
import { useRouter } from 'next/navigation'

type Props = {
  image: Image
}

export default function Modal({ image }: Props) {
  const { likes, addLike, removeLike } = useContext(likesContext)
  const isLiked = likes.some((like) => like.img.id === image.id)
  const onLike = () => addLike(image)
  const offLike = () => removeLike(image)
  const router = useRouter()
  const onClick = () => {
    router.back()
  }
  const viewsCount = image.views as number
  const downloadCount = image.downloads as number
  const withComma = (count: number) => {
    return count.toLocaleString()
  }
  return (
    <div className={style.modal}>
      <ScrollEvent />
      <div className={style.modal_inner}>
        <button
          className={style.dim_close}
          type="button"
          onClick={onClick}
        ></button>
        <div className={style.modal_contaniner}>
          <div className={style.modal_header}>
            <ImageProfile user={image.user} />
            <LikeButton isLiked={isLiked} onLike={onLike} offLike={offLike} />
          </div>
          <div className={style.modal_contents}>
            <SkeletonImage
              src={image.urls.regular}
              alt={image.alternative_slugs.ko}
              priority={true}
              color={image.color}
            />
          </div>
          <div className={style.modal_footer}>
            <ul>
              <li>
                <span>조회수</span>
                <span>{withComma(viewsCount)}</span>
              </li>
              <li>
                <span>다운로드</span>
                <span>{withComma(downloadCount)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CloseButton />
    </div>
  )
}
