import ImageProfile from '@/app/_component/ImageProfile'
import style from './page.module.css'
import LikeButton from '@/app/_component/LikeButton'
import CloseButton from '@/app/_component/CloseButton'
import getImage from '@/app/_lib/getImag'
import ScrollEvent from './ScrollEvent'

type Props = {
  params: {
    photoId: string
  }
}
export default async function page({ params }: Props) {
  const photoId = params.photoId
  const image = (await getImage(photoId)) || {}
  const viewsCount = image.views as number
  const downloadCount = image.downloads as number
  const withComma = (count: number) => {
    return count.toLocaleString()
  }

  return (
    <div className={style.modal}>
      <ScrollEvent />
      <div className={style.modal_inner}>
        <div className={style.modal_contaniner}>
          <div className={style.modal_header}>
            <ImageProfile user={image.user} />
            <LikeButton />
          </div>
          <div className={style.modal_contents}>
            <img src={image.urls.regular} alt={image.alternative_slugs.ko} />
          </div>
          <div className={style.modal_footer}>
            <ul>
              <li>
                <span>조회수</span>
                <span>{withComma(viewsCount)}</span>
              </li>
              <li>
                <span>다운로드</span>
                <span>{withComma(downloadCount)}</span>
              </li>
              <li>
                <span>작가의 말</span>
                <span>
                  {image.user.bio ? image.user.bio : '작가의 말이 없습니다.'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CloseButton />
    </div>
  )
}
