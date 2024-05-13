import Link from 'next/link'
import style from './nav.module.css'

export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul className={style.nav_list}>
        <li className={style.nav_item}>
          <Link className={style.nav_link} href={'/'}>
            HOME
          </Link>
        </li>
        <li className={style.nav_item}>
          <Link className={style.nav_link} href={'/gallery/background'}>
            배경화면
          </Link>
        </li>
        <li className={style.nav_item}>
          <Link className={style.nav_link} href={'/gallery/nature'}>
            자연
          </Link>
        </li>
        <li className={style.nav_item}>
          <Link className={style.nav_link} href={'/gallery/renders3D'}>
            3D 렌더링
          </Link>
        </li>
        <li className={style.nav_item}>
          <Link className={style.nav_link} href={'/gallery/travel'}>
            여행
          </Link>
        </li>
        <li className={style.nav_item}>
          <Link className={style.nav_link} href={'/gallery/streetPhotography'}>
            거리 사진
          </Link>
        </li>
        <li className={style.nav_item}>
          <Link className={style.nav_link} href={'/gallery/film'}>
            필름
          </Link>
        </li>
      </ul>
    </nav>
  )
}
