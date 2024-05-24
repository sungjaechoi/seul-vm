import ImageProfile from '@/app/_component/ImageProfile'
import style from './page.module.css'
import LikeButton from '@/app/_component/LikeButton'
import { getImages } from '@/app/_lib/getImages'
import { sectionInfo, typeSectionInfo } from '@/model/SectionInfo'
import CloseButton from '@/app/_component/CloseButton'
type Props = {
  params: {
    name: string
    photoId: string
  }
}
export default async function page({ params }: Props) {
  const nameV = params.name as keyof typeSectionInfo
  console.log('params.name???', params.name)
  const v = sectionInfo[nameV]
  const images = (await getImages(nameV)) || []
  console.log('images????', images)
  return (
    <div className={style.modal}>
      <div className={style.modal_inner}>
        <div className={style.modal_contaniner}>
          <div className={style.modal_header}>
            {/* <ImageProfile user={} /> */}
            <div className={style.use_profile}>
              <img src="/img/seul_logo.png" alt="유저 프로필 이미지" />
              <span>유저 이름</span>
            </div>
            <LikeButton />
          </div>
          <div className={style.modal_contents}>
            <img src="/img/seul_logo.png" alt="" />
          </div>
          <div className={style.modal_footer}>
            <ul>
              <li>
                <span>조회수</span>
                <span>1000</span>
              </li>
              <li>
                <span>다운로드</span>
                <span>1200</span>
              </li>
              <li>
                <span>소개 매체</span>
                <span>보도/편집</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CloseButton />
    </div>
  )
}
