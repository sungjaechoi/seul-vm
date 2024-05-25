'use client'
import { User } from '@/model/Image'
import style from '@/app/_component/ImageProfile.module.css'
import { useRouter } from 'next/navigation'

type Props = {
  user: User
}

export default function ImageProfile({ user }: Props) {
  const router = useRouter()

  const pushUserProfile = () => router.push(`/userPage/${user.username}`)
  return (
    <button
      type="button"
      className={style.use_profile_btn}
      onClick={pushUserProfile}
    >
      <img src={user.profile_image.small} alt="유저 프로필 이미지" />
      <span>{user.username}</span>
    </button>
  )
}
