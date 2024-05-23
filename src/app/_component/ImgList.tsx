import style from './imgSection.module.css'
import ImgItem from './ImgItem'
import { Image } from '@/model/Image'

type Props = {
  images: Image[]
}
export default function ImgList({ images }: Props) {
  return (
    <ul className={style.img_list}>
      {images.map((image) => (
        <ImgItem key={image.id} image={image} />
      ))}
    </ul>
  )
}
