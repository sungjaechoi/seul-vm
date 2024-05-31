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
import { useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

dayjs.locale('ko')
dayjs.extend(relativeTime)

type Props = {
  image: Timage
}

export default function ImgItem({ image }: Props) {
  const pathname = usePathname()
  const divEl = useRef<HTMLDivElement | null>(null)
  const [skeletonState, setSkeletonState] = useState(true)

  return (
    <>
      <li className={style.img_item}>
        <div
          className={clsx(
            style.skeleton,
            skeletonState ? '' : style.isDisabled,
          )}
        ></div>
        <div className={style.img_box} ref={divEl}>
          <Image
            fill
            sizes="100%"
            loading="lazy"
            onLoad={() => {
              setSkeletonState(false)
            }}
            src={image.urls.small}
            alt={image.alternative_slugs.ko}
          />
        </div>
        <Link
          href={
            pathname === '/' || pathname === `/userPage/${image.user.username}`
              ? `/gallery/random/photo/${image.id}`
              : `${pathname}/photo/${image.id}`
          }
          className={style.hover_info_area}
        >
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
