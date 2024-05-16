import VisualSection from './_component/VisualSection'
import ImgList from './_component/ImgList'
import style from './page.module.css'
import { getImages } from './_lib/getImages'

export default async function page() {
  const v = {
    title: 'Unsplash',
    description:
      '인터넷의 시각 자료 출처입니다. 모든 지역에 있는 크리에이터들의 지원을 받습니다.',
  }
  const images = await getImages('random')
  return (
    <>
      <VisualSection v={v} />
      <section className={style.image_section}>
        <h3 className="blind">이미지 리스트</h3>
        <div className={style.images_section_inner}>
          <ImgList images={images} />
        </div>
      </section>
    </>
  )
}
