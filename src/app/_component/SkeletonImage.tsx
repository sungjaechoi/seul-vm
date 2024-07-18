'use client'

import { useEffect, useState } from 'react'
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

const loadAnimation = keyframes`
  100% {
    background-position: -100% 0;
  }
`

const SkeletonImageStyled = styled.div<{ color: string }>`
  ${({ color }) => css`
    animation: ${loadAnimation} 1s infinite;
    background: linear-gradient(
      120deg,
      #e5e5e5 30%,
      ${color} 40%,
      ${color} 48%,
      #e5e5e5 38%
    );
    transition: 3s;
    background-size: 200% 100%;
    background-position: 100% 0;
    pointer-events: none;
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
        <SkeletonImageStyled
          color={color}
          className={clsx(
            style.skeleton,
            skeletonState ? '' : style.isDisabled,
          )}
        ></SkeletonImageStyled>
      </div>
    )
  )
}
