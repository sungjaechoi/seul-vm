type Props = {
  params: {
    name: string
    photoId: string
  }
}
export default function page({ params }: Props) {
  params.name
  params.photoId
  console.log('pathName', params.name)
  console.log('photo`Id', params.photoId)

  return <div>포토 상세페이지</div>
}
