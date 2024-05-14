'use client'

import Link from 'next/link'
import style from './navMenu.module.css'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import clsx from 'clsx'
import { FiAlignJustify, FiAlignLeft } from 'react-icons/fi'
import { sectionInfo, typeSectionInfo } from '@/model/SectionInfo'
import { useState } from 'react'

export default function Nav() {
  const path = usePathname()
  console.log(path)

  const segmentArry = useSelectedLayoutSegments()
  const segment = segmentArry[1]

  const pathName = segment as keyof typeSectionInfo
  const navName = sectionInfo[pathName].title

  const [isToggeIcon, setIsToggeIcon] = useState(false)

  const onToggle = () => {
    setIsToggeIcon((prevState) => !prevState)
  }

  return (
    <>
      <div className={style.menu_area}>
        <button className={style.menu_button} type="button" onClick={onToggle}>
          {isToggeIcon ? <FiAlignLeft /> : <FiAlignJustify />}
          <span>{navName === '' ? 'HOME' : navName}</span>
        </button>
      </div>
      <ul
        className={clsx(style.nav_list, isToggeIcon ? [style.is_active] : 'a')}
      >
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: path === '/',
          })}
        >
          <Link className={style.nav_link} href={'/'}>
            HOME
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: navName === '배경화면',
          })}
        >
          <Link className={style.nav_link} href={'/gallery/background'}>
            배경화면
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: navName === '자연',
          })}
        >
          <Link className={style.nav_link} href={'/gallery/nature'}>
            자연
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: navName === '3D 렌더링',
          })}
        >
          <Link className={style.nav_link} href={'/gallery/renders3D'}>
            3D 렌더링
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: navName === '여행',
          })}
        >
          <Link className={style.nav_link} href={'/gallery/travel'}>
            여행
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: navName === '거리 사진',
          })}
        >
          <Link className={style.nav_link} href={'/gallery/streetPhotography'}>
            거리 사진
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: navName === '필름',
          })}
        >
          <Link className={style.nav_link} href={'/gallery/film'}>
            필름
          </Link>
        </li>
      </ul>
    </>
  )
}
