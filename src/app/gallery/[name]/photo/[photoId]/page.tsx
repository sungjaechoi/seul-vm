import { LayoutRouter } from 'next/dist/server/app-render/entry-base'

type Props = {
  params: {
    name: string
    photoId: string
  }
}
export default function page({ params }: Props) {
  params.name
  params.photoId
  console.log(params.name)
  console.log(params.photoId)
  return <LayoutRouter />
}
