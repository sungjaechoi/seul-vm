import getUserImages from '@/app/_lib/getUserImages'
import TopUserInfo from './_component/TopUserInfo'
import style from './page.module.css'
import ImgList from '@/app/_component/ImgList'

type Props = {
  params: {
    userName: string
  }
}

export default async function page({ params }: Props) {
  const userName = params.userName
  const userImages = await getUserImages(userName)
  const userInfo = userImages[0]

  return (
    <>
      <TopUserInfo userInfo={userInfo} />
      <section className={style.image_section}>
        <h3 className="blind">이미지 리스트</h3>
        <div className={style.images_section_inner}>
          <ImgList images={userImages} query="" />
        </div>
      </section>
    </>
  )
}
