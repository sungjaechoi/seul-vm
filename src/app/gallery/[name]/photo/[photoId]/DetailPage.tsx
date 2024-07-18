'use client'
import ImageProfile from '@/app/_component/ImageProfile'
import style from './page.module.css'
import LikeButton from '@/app/_component/LikeButton'
import SkeletonImage from '@/app/_component/SkeletonImage'
import { Image } from '@/model/Image'
import { useContext } from 'react'
import { likesContext } from '@/app/_component/LikesProvider'
import { getRandomColor } from '@/app/_lib/getRandomColor'

type Props = {
  image: Image
}

export default function Modal({ image }: Props) {
  const { likes, addLike, removeLike } = useContext(likesContext)
  const isLiked = likes.some((like) => like.img.id === image.id && like.isLikes)
  const onLike = () => addLike(image)
  const offLike = () => removeLike(image)
  const viewsCount = image.views
  const downloadCount = image.downloads
  const withComma = (count: number) => {
    return count ? count.toLocaleString() : '0'
  }
  return (
    <div className={style.img_detail}>
      <div className={style.img_detail_inner}>
        <div className={style.img_detail_contaniner}>
          <div className={style.img_detail_header}>
            <ImageProfile user={image} />
            <LikeButton isLiked={isLiked} onLike={onLike} offLike={offLike} />
          </div>
          <div className={style.img_detail_contents}>
            <SkeletonImage
              src={image.largeImageURL}
              alt=""
              priority={true}
              color={getRandomColor()}
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
