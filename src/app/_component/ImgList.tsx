import style from './imgList.module.css'
import ImgItem from './ImgItem'
import { TImage } from '@/model/Image'

type Props = {
  images: TImage[]
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
