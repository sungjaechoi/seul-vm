import style from './visualSection.module.css'

type Props = {
  v: { title: string; description: string }
}

export default function VisualSection({ v: { title, description } }: Props) {
  return (
    <section className={style.visual_section}>
      <div className={style.visual_section_inner}>
        <h2 className={style.section_title}>{title}</h2>
        <span className={style.description}>{description}</span>
      </div>
    </section>
  )
}
