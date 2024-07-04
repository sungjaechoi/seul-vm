'use client'
import style from './imgSection.module.css'
import Link from 'next/link'
import { Image as Timage } from '@/model/Image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import ImageProfile from './ImageProfile'
import { usePathname } from 'next/navigation'
import LikeButton from './LikeButton'
import SkeletonImage from '../_component/SkeletonImage'
import { useContext } from 'react'
import { likesContext } from './LikesProvider'

dayjs.locale('ko')
dayjs.extend(relativeTime)

type Props = {
  image: Timage
  query: string
}

export default function ImgItem({ image, query }: Props) {
  const pathname = usePathname()
  function getHref() {
    switch (pathname) {
      case '/':
        return `/gallery/random/photo/${image.id}`
      case `/userPage/${image.user.username}`:
        return `/gallery/random/photo/${image.id}`
      case '/search':
        return `/gallery/random/photo/${image.id}?searchKeyword=${query}`
      default:
        return `${pathname}/photo/${image.id}`
    }
  }

  const { likes, addLike, removeLike } = useContext(likesContext)
  // useContext hook을 사용하여 likesContext에서 제공하는 값을 가져옴
  const isLiked = likes.some((like) => like.imgId === image.id)

  const onLike = () => addLike(image.id)
  const offLike = () => removeLike(image.id)

  return (
    <>
      <li className={style.img_item}>
        <SkeletonImage
          src={image.urls.small}
          alt={image.alternative_slugs.ko}
          priority={false}
          loading={'lazy'}
          color={image.color}
        />
        <Link href={getHref()} className={style.hover_info_area}>
          <div className={style.etc_box}>
            <span className="blind">이미지 생성 일자</span>
            <span>{dayjs(image.created_at).fromNow(false)}</span>
          </div>
        </Link>
        <LikeButton isLiked={isLiked} onLike={onLike} offLike={offLike} />
        <ImageProfile user={image.user} />
      </li>
    </>
  )
}
