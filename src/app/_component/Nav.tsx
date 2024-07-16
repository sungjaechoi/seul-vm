'use client'

import Link from 'next/link'
import style from './nav.module.css'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import clsx from 'clsx'
import { FiAlignJustify, FiAlignLeft } from 'react-icons/fi'
import { sectionInfo, typeSectionInfo } from '@/model/SectionInfo'
import { useEffect, useState } from 'react'

export default function Nav() {
  const path = usePathname()
  const userPage = path.split('/')[1]
  const targetUser = 'userPage'

  const segmentArry = useSelectedLayoutSegments()
  const segment = segmentArry[1]
  const pathName = segment as keyof typeSectionInfo

  const [isToggeButton, setIsToggeButton] = useState(false)
  const [pathStatus, setPathStatus] = useState(path)

  const onToggle = () => {
    setIsToggeButton((prevState) => !prevState)
  }

  //! 특정 코드들을 어떤의미가 있는 이름의 함수로 묶기
  //*(코드를 읽을떄 함수명으로 빠른코드 파악가능)
  // useEffect(() => {
  //   if (pathStatus !== path) {
  //     setPathStatus(path)
  //     setIsToggeButton(false)
  //   }
  // }, [path, pathStatus])

  const mobileMenuToggle = (path: string, pathStatus: string) => {
    if (pathStatus !== path) {
      setPathStatus(path)
      setIsToggeButton(false)
    }
  }

  useEffect(() => {
    mobileMenuToggle(path, pathStatus)
  }, [path, pathStatus])

  if (userPage === targetUser) return null

  //? build시 title을 찾을수 없다는 typeError
  //! build는 서버에서 진행
  // * 클라이언트 컴포넌트상에 문제가 없더라도 build는 서버에서 진행하기 때문에 sectionInfo의 pathName에 접근할수 없다.
  // path가 '/'이라면 'home' '/' 아니라면 navName
  // path search 라면 '검색 결과'
  const navName = sectionInfo[pathName]?.title
  function currentPage() {
    switch (path) {
      case '/':
        return 'HOME'
      case '/myLikes':
        return '좋아요'
      case '/search':
        return '검색 결과'
      default:
        return navName
    }
  }

  return (
    <nav className={style.nav}>
      <div className={style.menu_area}>
        <button className={style.menu_button} type="button" onClick={onToggle}>
          {isToggeButton ? <FiAlignLeft /> : <FiAlignJustify />}
          <span>{currentPage()}</span>
        </button>
      </div>
      <ul
        className={clsx(style.nav_list, isToggeButton ? [style.is_active] : '')}
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
          <Link className={style.nav_link} href={'/gallery/wallpapers'}>
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
          <Link className={style.nav_link} href={'/gallery/3d-renders'}>
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
          <Link className={style.nav_link} href={'/gallery/street-photography'}>
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
    </nav>
  )
}
