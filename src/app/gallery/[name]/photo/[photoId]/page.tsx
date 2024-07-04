import getImage from '@/app/_lib/getImag'
import DetailPage from './DetailPage'

type Props = {
  params: {
    photoId: string
  }
}
export default async function page({ params }: Props) {
  const photoId = params.photoId
  const image = (await getImage(photoId)) || {}

  return <DetailPage image={image} />
}
