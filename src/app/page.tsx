import MainPage from './_component/MainPage'
import { getImages } from './_lib/getImages'

export default async function page() {
  const v = {
    title: 'seul gallery',
    description: 'pixabayAPI를 이용한 이미지 갤러리 입니다.',
  }
  const images = (await getImages(1, 'random')) || []
  const firsImageSrc = images[0] ? images[0].largeImageURL : ''

  return <MainPage v={v} src={firsImageSrc} images={images} />
}
