import { getImages } from './_lib/getImages'
import MainPage from './_component/MainPage'

export default async function page() {
  const v = {
    title: 'Unsplash',
    description:
      '인터넷의 시각 자료 출처입니다. 모든 지역에 있는 크리에이터들의 지원을 받습니다.',
  }
  const images = (await getImages('random')) || []
  const firsImageSrc = images[0] ? images[0].urls.full : ''

  return <MainPage v={v} src={firsImageSrc} images={images} />
}
