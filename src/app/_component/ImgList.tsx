import style from './imgSection.module.css'
import ImgItem from './ImgItem'
import { Image } from '@/model/Image'

type Props = {
  images: Image[]
  query: string | undefined
}
export default function ImgList({ images, query }: Props) {
  console.log('images', images)
  return (
    <>
      <ul className={style.img_list}>
        {images.map((image) => (
          <ImgItem key={image.id} image={image} query={query} />
        ))}
      </ul>
    </>
  )
}
