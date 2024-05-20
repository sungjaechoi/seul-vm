import { User } from '@/model/Image'
import style from '@/app/_component/ImageProfile.module.css'

type Props = {
  user: User
}

export default function ImageProfile({ user }: Props) {
  return (
    <div className={style.use_profile}>
      <img src={user.profile_image.small} alt="유저 프로필 이미지" />
      <span>{user.username}</span>
    </div>
  )
}
