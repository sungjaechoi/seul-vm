'use client'
import ImageProfile from '@/app/_component/ImageProfile'
import style from './page.module.css'
import LikeButton from '@/app/_component/LikeButton'
import SkeletonImage from '@/app/_component/SkeletonImage'
import ScrollEvent from './_event/ScrollEvent'
import CloseButton from '@/app/_component/CloseButton'
import { Image } from '@/model/Image'
import { useContext, useEffect } from 'react'
import { likesContext } from '@/app/_component/LikesProvider'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  image: Image
}

export default function Modal({ image }: Props) {
  const { likes, addLike, removeLike, removeLikeOnly, addLikeOnly } =
    useContext(likesContext)
  useEffect(() => {
    const el = document.querySelector('#modal') as HTMLInputElement
    console.log(el)
    el.focus()
  }, [])
  const pathname = usePathname()
  const myLikesPath = pathname.slice(0, 16)
  const isLiked = likes.some((like) => like.img.id === image.id && like.isLikes)
  const onLike = () =>
    myLikesPath === '/gallery/myLikes' ? addLikeOnly(image) : addLike(image)
  const offLike = () =>
    myLikesPath === '/gallery/myLikes'
      ? removeLikeOnly(image)
      : removeLike(image)
  const router = useRouter()
  const onClick = () => {
    router.back()
  }
  const viewsCount = image.views
  const downloadCount = image.downloads
  const withComma = (count: number) => {
    return count ? count.toLocaleString() : '0'
  }
  return (
    <div className={style.modal} id="modal" tabIndex={0}>
      <ScrollEvent />
      <div className={style.modal_inner}>
        <button
          className={style.dim_close}
          type="button"
          onClick={onClick}
        ></button>
        <div className={style.modal_contaniner}>
          <div className={style.modal_header}>
            <ImageProfile user={image} />
            <LikeButton isLiked={isLiked} onLike={onLike} offLike={offLike} />
          </div>
          <div className={style.modal_contents}>
            <SkeletonImage src={image.largeImageURL} alt="" priority={true} />
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
