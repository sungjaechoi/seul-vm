import { Image } from '@/model/Image'
import style from '@/app/_component/ImageProfile.module.css'

type Props = {
  user: Image
}

export default function ImageProfile({ user }: Props) {
  const userImage = user.userImageURL
  return (
    <a href={`/userPage/${user.user}`} className={style.use_profile_btn}>
      {userImage ? (
        <img loading="lazy" src={userImage} alt="유저 프로필 이미지" />
      ) : (
        <img
          src="/img/user.png"
          alt="https://kr.freepik.com/free-vector/user-circles-set_145856967.htm#query=%EC%82%AC%EC%9A%A9%EC%9E%90&position=24&from_view=keyword&track=ais_user&uuid=80c285bc-90d9-474d-b4eb-49c60487d5df,작가 juicy_fish, 출처 Freepik"
        />
      )}

      <span>{user.user}</span>
    </a>
  )
}
