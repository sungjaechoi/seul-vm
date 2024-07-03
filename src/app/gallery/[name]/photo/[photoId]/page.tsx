import ImageProfile from '@/app/_component/ImageProfile'
import style from './page.module.css'
import LikeButton from '@/app/_component/LikeButton'
import getImage from '@/app/_lib/getImag'
import SkeletonImage from '../../../../_component/SkeletonImage'

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
    <div className={style.img_detail}>
      <div className={style.img_detail_inner}>
        <div className={style.img_detail_contaniner}>
          <div className={style.img_detail_header}>
            <ImageProfile user={image.user} />
            <LikeButton />
          </div>
          <div className={style.img_detail_contents}>
            {/* <img src={image.urls.regular} alt={image.alternative_slugs.ko} /> */}
            <SkeletonImage
              src={image.urls.regular}
              alt={image.alternative_slugs.ko}
              priority={true}
              color={image.color}
            />
          </div>
          <div className={style.img_detail_footer}>
            <ul>
              <li>
                <span>조회수</span>
                <span>{withComma(viewsCount)}</span>
              </li>
              <li>
                <span>다운로드</span>
                <span>{withComma(downloadCount)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
