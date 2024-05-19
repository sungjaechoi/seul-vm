import style from './imgList.module.css'
import Link from 'next/link'
import { Image } from '@/model/Image'

type Props = {
  image: Image
}

export default function ImgItem({ image }: Props) {
  return (
    <>
      <li className={style.img_item}>
        <div className={style.img_box}>
          <Link href={''}>
            <img src={image.urls.small} alt="" />
          </Link>
        </div>
        <div className={style.util_box}>
          <button className={style.like_button} type="button">
            <span>좋아요</span>
          </button>
        </div>
      </li>
    </>
  )
}
