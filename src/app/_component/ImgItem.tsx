'use client'
import style from './imgSection.module.css'
import Link from 'next/link'
import { Image } from '@/model/Image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import ImageProfile from './ImageProfile'
import { usePathname } from 'next/navigation'
import LikeButton from './LikeButton'

dayjs.locale('ko')
dayjs.extend(relativeTime)

type Props = {
  image: Image
}

export default function ImgItem({ image }: Props) {
  const pathname = usePathname()

  return (
    <>
      <li className={style.img_item}>
        <div className={style.img_box}>
          <img src={image.urls.small} alt={image.alternative_slugs.ko} />
        </div>
        <Link
          href={
            pathname === '/'
              ? `/gallery/random/${pathname}/photo/${image.id}`
              : `${pathname}/photo/${image.id}`
          }
          className={style.hover_info_area}
        >
          <div className={style.etc_box}>
            <ImageProfile user={image.user} />
            <span>
              <span className="blind">이미지 생성 일자</span>
              {dayjs(image.created_at).fromNow(false)}
            </span>
          </div>
        </Link>
        <LikeButton />
      </li>
    </>
  )
}
