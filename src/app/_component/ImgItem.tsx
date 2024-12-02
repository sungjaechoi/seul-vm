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
import { useContext, useEffect, useState } from 'react'
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
      case `/userPage/${image.user_id}`:
        return `/gallery/random/photo/${image.id}`
      case '/search':
        return `/gallery/random/photo/${image.id}?searchKeyword=${query}`
      case '/myLikes':
        return `/gallery/myLikes/photo/${image.id}`
      default:
        return `${pathname}/photo/${image.id}`
    }
  }
  const dataUrlPath = image.previewURL.slice()
  const remainingPath = dataUrlPath.split('https://cdn.pixabay.com/photo/')[1]
  const datePath = remainingPath.split('/').slice(0, 3).join('/')
  const createdAt = datePath.replace(/\//g, '-')
  const isLikeOnly = pathname === '/myLikes' ? true : false
  const { likes, addLike, removeLike, removeLikeOnly, addLikeOnly } =
    useContext(likesContext)
  const isLiked = likes.some((like) => like.img.id === image.id && like.isLikes)
  const onLike = () => (isLikeOnly ? addLikeOnly(image) : addLike(image))
  const offLike = () => (isLikeOnly ? removeLikeOnly(image) : removeLike(image))

  const [focusElement, setFocusElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const isModalOpen = pathname.includes('/photo/')

    // 모달이 열릴 때, 포커스를 저장
    if (isModalOpen && !focusElement) {
      // document.activeElement : 현재 포커스를 받고 있는 DOM요소
      setFocusElement(document.activeElement as HTMLElement)
    }

    // 모달이 닫힐 때, 저장된 포커스로 복원하고 focusElement 초기화
    if (!isModalOpen && focusElement) {
      focusElement?.focus()
      setFocusElement(null)
    }
  }, [pathname, focusElement])

  return (
    <>
      <li className={style.img_item}>
        <SkeletonImage
          src={image.largeImageURL}
          alt=""
          priority={false}
          loading={'lazy'}
        />
        <Link href={getHref()} className={style.hover_info_area}>
          <div className={style.etc_box}>
            <span className="blind">이미지 생성 일자</span>
            <span>{dayjs(createdAt).fromNow(false)}</span>
          </div>
        </Link>
        <LikeButton isLiked={isLiked} onLike={onLike} offLike={offLike} />
        <ImageProfile user={image} />
      </li>
    </>
  )
}
