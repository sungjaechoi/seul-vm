'use client'

import Image from 'next/image'
import { useState } from 'react'
import style from './skeletonImage.module.css'
import clsx from 'clsx'
import styled, { css, keyframes } from 'styled-components'

type Props = {
  src: string
  alt: string
  priority?: boolean
  loading?: 'lazy'
  color: string
}

const load = keyframes`
  100% {
    background-position: -100% 0;
  }
`

const SkeletonImageStyled = styled.div<{ color: string }>`
  ${({ color }) => css`
    animation: ${load} 1s infinite;
    background: linear-gradient(
      120deg,
      #e5e5e5 30%,
      ${color} 40%,
      ${color} 48%,
      #e5e5e5 38%
    );
  `}
`

export default function SkeletonImage({
  src,
  alt,
  priority,
  loading,
  color,
}: Props) {
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
      <SkeletonImageStyled
        color={color}
        className={clsx(style.skeleton, skeletonState ? '' : style.isDisabled)}
        style={{
          transition: '3s',
          backgroundSize: '200% 100%',
          backgroundPosition: '100% 0',
          pointerEvents: 'none',
        }}
      ></SkeletonImageStyled>
    </div>
  )
}
