'use client'
import { useRef, useState } from 'react'
import style from './visualSection.module.css'
import Image from 'next/image'
import clsx from 'clsx'

type Props = {
  v: { title: string; description: string }
  src: string
}

export default function VisualSection({
  v: { title, description },
  src,
}: Props) {
  console.log(src)
  const divEl = useRef<HTMLDivElement | null>(null)
  const [skeletonState, setSkeletonState] = useState(true)
  return (
    <section className={style.visual_section}>
      <div className={style.visual_section_inner}>
        <h2 className={style.section_title}>{title}</h2>
        <span className={style.section_description}>{description}</span>
      </div>
      {src && (
        <>
          <div
            className={clsx(
              style.skeleton,
              skeletonState ? '' : style.isDisabled,
            )}
          ></div>
          <div className={style.visual_img_area} ref={divEl}>
            <Image
              src={src}
              fill
              priority
              sizes="100%"
              onLoad={() => {
                setSkeletonState(false)
              }}
              alt={`${title} 이미지`}
            />
          </div>
        </>
      )}
    </section>
  )
}
