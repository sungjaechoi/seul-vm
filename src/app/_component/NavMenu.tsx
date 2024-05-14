'use client'

import Link from 'next/link'
import style from './navMenu.module.css'
import { useSelectedLayoutSegments } from 'next/navigation'
import clsx from 'clsx'
import { FiAlignJustify, FiAlignLeft } from 'react-icons/fi'
import { sectionInfo, typeSectionInfo } from '@/model/SectionInfo'
import { useState } from 'react'

export default function Nav() {
  const segmentArry = useSelectedLayoutSegments()
  const segment = segmentArry[1]

  console.log(segment)

  const pathName = segment as keyof typeSectionInfo

  const [isToggeIcon, setIsToggeIcon] = useState(false)

  const onToggle = () => {
    setIsToggeIcon((prevState) => !prevState)
  }

  if (pathName === undefined) {
    return (
      <>
        <div className={style.menu_area}>
          <button className={style.menu_button} type="button">
            <FiAlignJustify />
            <span>HOME</span>
          </button>
        </div>
        <ul className={style.nav_list}>
          <li
            className={clsx(style.nav_item, {
              [style.is_active]: segment === undefined,
            })}
          >
            <Link className={style.nav_link} href={'/'}>
              HOME
            </Link>
          </li>
          <li
            className={clsx(style.nav_item, {
              [style.is_active]: segment === 'background',
            })}
          >
            <Link className={style.nav_link} href={'/gallery/background'}>
              배경화면
            </Link>
          </li>
          <li
            className={clsx(style.nav_item, {
              [style.is_active]: segment === 'nature',
            })}
          >
            <Link className={style.nav_link} href={'/gallery/nature'}>
              자연
            </Link>
          </li>
          <li
            className={clsx(style.nav_item, {
              [style.is_active]: segment === 'renders3D',
            })}
          >
            <Link className={style.nav_link} href={'/gallery/renders3D'}>
              3D 렌더링
            </Link>
          </li>
          <li
            className={clsx(style.nav_item, {
              [style.is_active]: segment === 'travel',
            })}
          >
            <Link className={style.nav_link} href={'/gallery/travel'}>
              여행
            </Link>
          </li>
          <li
            className={clsx(style.nav_item, {
              [style.is_active]: segment === 'streetPhotography',
            })}
          >
            <Link
              className={style.nav_link}
              href={'/gallery/streetPhotography'}
            >
              거리 사진
            </Link>
          </li>
          <li
            className={clsx(style.nav_item, {
              [style.is_active]: segment === 'film',
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

  const navName = sectionInfo[pathName].title

  return (
    <>
      <div className={style.menu_area}>
        <button className={style.menu_button} type="button" onClick={onToggle}>
          {isToggeIcon ? <FiAlignLeft /> : <FiAlignJustify />}
          <span>{navName}</span>
        </button>
      </div>
      <ul
        className={clsx(style.nav_list, isToggeIcon ? [style.is_active] : '')}
      >
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: segment === undefined,
          })}
        >
          <Link className={style.nav_link} href={'/'}>
            HOME
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: segment === 'background',
          })}
        >
          <Link className={style.nav_link} href={'/gallery/background'}>
            배경화면
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: segment === 'nature',
          })}
        >
          <Link className={style.nav_link} href={'/gallery/nature'}>
            자연
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: segment === 'renders3D',
          })}
        >
          <Link className={style.nav_link} href={'/gallery/renders3D'}>
            3D 렌더링
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: segment === 'travel',
          })}
        >
          <Link className={style.nav_link} href={'/gallery/travel'}>
            여행
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: segment === 'streetPhotography',
          })}
        >
          <Link className={style.nav_link} href={'/gallery/streetPhotography'}>
            거리 사진
          </Link>
        </li>
        <li
          className={clsx(style.nav_item, {
            [style.is_active]: segment === 'film',
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
