'use client'
import ImageProfile from '@/app/_component/ImageProfile'
import style from './page.module.css'
import LikeButton from '@/app/_component/LikeButton'
import SkeletonImage from '@/app/_component/SkeletonImage'
import { Image } from '@/model/Image'
import { useContext } from 'react'
import { likesContext } from '@/app/_component/LikesProvider'

type Props = {
  image: Image
}

export default function Modal({ image }: Props) {
  const { likes, addLike, removeLike } = useContext(likesContext)
  const isLiked = likes.some((like) => like.imgId === image.id)
  const onLike = () => addLike(image.id)
  const offLike = () => removeLike(image.id)
  const viewsCount = image.views as number
  const downloadCount = image.downloads as number
  const withComma = (count: number) => {
    return count.toLocaleString()
  }
  return (
    <div className={style.img_detail}>
      <div className={style.img_detail_inner}>
        <div className={style.img_detail_contaniner}>
          <div className={style.img_detail_header}>
            <ImageProfile user={image.user} />
            <LikeButton isLiked={isLiked} onLike={onLike} offLike={offLike} />
          </div>
          <div className={style.img_detail_contents}>
            <SkeletonImage
              src={image.urls.regular}
              alt={image.alternative_slugs.ko}
              priority={true}
              color={image.color}
            />
          </div>
          <div className={style.img_detail_footer}>
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
    </div>
  )
}
