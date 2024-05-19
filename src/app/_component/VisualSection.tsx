import { Image } from '@/model/Image'
import style from './visualSection.module.css'

type Props = {
  v: { title: string; description: string }
  src: string
}

export default function VisualSection({
  v: { title, description },
  src,
}: Props) {
  return (
    <section className={style.visual_section}>
      <div className={style.visual_section_inner}>
        <h2 className={style.section_title}>{title}</h2>
        <span className={style.section_description}>{description}</span>
      </div>
      {src && (
        <div className={style.visual_img_area}>
          <img src={src} alt="" />
        </div>
      )}
    </section>
  )
}
