import { Image, User } from '@/model/Image'
import style from './topUserInfo.module.css'

type Props = {
  userInfo: Image
}

export default function TopUserInfo({ userInfo }: Props) {
  return (
    <section className={style.user_info_section}>
      <h2 className="blind">`${userInfo.user.name}프로필 정보`</h2>
      <div className={style.section_inner}>
        <div className={style.img_profile}>
          <img
            src={userInfo.user.profile_image.large}
            alt={`${userInfo.user.name}의 프로필 이미지`}
          />
        </div>
        <div className={style.user_info}>
          <strong>{userInfo.user.name}</strong>
          <p>
            {userInfo.user.bio ? userInfo.user.bio : '작가의 말이 없습니다.'}
          </p>
        </div>
      </div>
    </section>
  )
}
