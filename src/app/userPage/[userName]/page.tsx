import TopUserInfo from './_component/TopUserInfo'
import style from './page.module.css'
import ImgList from '@/app/_component/ImgList'
import { Image } from '@/model/Image'
import { getRandomImages } from '@/app/_lib/getRandomImages'

type Props = {
  params: {
    userName: string
  }
}

export default async function page({ params }: Props) {
  const userName = params.userName
  const images = (await getRandomImages(1)) as Image[]

  return (
    <>
      <TopUserInfo />
      <section className={style.image_section}>
        <h3 className="blind">이미지 리스트</h3>
        <div className={style.images_section_inner}>
          <ImgList images={images} query="" />
        </div>
      </section>
    </>
  )
}
