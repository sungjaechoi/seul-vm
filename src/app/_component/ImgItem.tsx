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

dayjs.locale('ko')
dayjs.extend(relativeTime)

type Props = {
  image: Timage
}

export default function ImgItem({ image }: Props) {
  const pathname = usePathname()
  console.log('itemPath :', pathname)
  const getHref = () => {
    console.log('??')
    const randomCase =
      pathname === '/' ||
      pathname === `/userPage/${image.user.username}` ||
      `/search/photo/${image.user.username}`
    return randomCase
      ? `/gallery/random/photo/${image.id}`
      : `${pathname}/photo/${image.id}`
  }

  return (
    <>
      <li className={style.img_item}>
        <SkeletonImage
          src={image.urls.small}
          alt={image.alternative_slugs.ko}
          priority={false}
          loading={'lazy'}
        />
        <Link href={getHref()} className={style.hover_info_area}>
          <div className={style.etc_box}>
            <span className="blind">이미지 생성 일자</span>
            <span>{dayjs(image.created_at).fromNow(false)}</span>
          </div>
        </Link>
        <LikeButton />
        <ImageProfile user={image.user} />
      </li>
    </>
  )
}
