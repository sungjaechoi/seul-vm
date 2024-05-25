import MainPage from '@/app/_component/MainPage'
import { getImages } from '@/app/_lib/getImages'
import { getRandomImages } from '@/app/_lib/getRandomImages'
import { Image } from '@/model/Image'
import { sectionInfo, typeSectionInfo } from '@/model/SectionInfo'

type Props = {
  params: {
    name: string
    photoId: string
  }
}
export default async function Page({ params }: Props) {
  const nameV = params.name as keyof typeSectionInfo
  const v = sectionInfo[nameV]
  const images =
    params.name === 'random'
      ? (await getRandomImages()) || []
      : (await getImages(nameV)) || []
  const firsImageSrc = images[0] ? images[0].urls.full : ''

  return <MainPage v={v} src={firsImageSrc} images={images} />
}
