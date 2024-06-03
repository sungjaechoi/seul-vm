'use client'

import Image from 'next/image'
import { useState } from 'react'
import style from './skeletonImage.module.css'
import clsx from 'clsx'

type Props = {
  src: string
  alt: string
  priority?: boolean
  loading?: 'lazy'
}

export default function SkeletonImage({ src, alt, priority, loading }: Props) {
  const [skeletonState, setSkeletonState] = useState(true)
  return (
    <div className={style.skeleton_img_area}>
      <Image
        fill
        sizes="100%"
        priority={priority}
        loading={priority ? undefined : loading}
        onLoad={() => {
          setSkeletonState(false)
        }}
        src={src}
        alt={alt}
      />
      <div
        className={clsx(style.skeleton, skeletonState ? '' : style.isDisabled)}
      ></div>
    </div>
  )
}
