'use client'

import { useEffect, useState } from 'react'
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
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    setIsMount(true)
  }, [])

  return (
    isMount && (
      <div className={style.skeleton_img_area}>
        <img
          className={style.image}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : loading}
          onLoad={() => {
            setSkeletonState(false)
          }}
        />
        <div
          className={clsx(
            style.skeleton,
            skeletonState ? '' : style.isDisabled,
          )}
        ></div>
      </div>
    )
  )
}
