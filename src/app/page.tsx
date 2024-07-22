import MainPage from './_component/MainPage'
import { getRandomImages } from './_lib/getRandomImages'

export default async function page() {
  const v = {
    title: 'seul gallery',
    description: 'pixabayAPI를 이용한 이미지 갤러리 입니다.',
  }
  const images = (await getRandomImages()) || []
  const firsImageSrc = images[0] ? images[0].largeImageURL : ''

  return <MainPage v={v} src={firsImageSrc} images={images} />
}
