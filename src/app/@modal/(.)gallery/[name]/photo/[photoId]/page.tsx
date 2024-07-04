import getImage from '@/app/_lib/getImag'
import Modal from './Modal'

type Props = {
  params: {
    photoId: string
  }
}
export default async function page({ params }: Props) {
  const photoId = params.photoId
  const image = (await getImage(photoId)) || {}

  return <Modal image={image} />
}
