import getImage from '@/app/_lib/getImag'
import Modal from './Modal'

type Props = {
  params: {
    photoId: string
  }
}
export default async function page({ params }: Props) {
  const photoId = params.photoId
  const imageArray = (await getImage(photoId)) || []
  const image = imageArray.hits[0]

  return <Modal image={image} />
}
