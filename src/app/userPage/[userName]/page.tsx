import style from './page.module.css'

type Props = {
  params: {
    name: string
  }
}

export default function page({ params }: Props) {
  console.log('params.name', params.name)
  return null
}
