import style from './topUserInfo.module.css'
import { FaExclamation } from 'react-icons/fa'

export default function TopUserInfo() {
  return (
    <section className={style.user_info_section}>
      <h2 className="blind">`유저 프로필 정보`</h2>
      <div className={style.section_inner}>
        <div className={style.img_profile}>
          <div>
            <div>
              <FaExclamation />
            </div>
          </div>
        </div>
        <div className={style.user_info}>
          <strong>알려드립니다.</strong>
          <p>
            유저 페이지는 최초 Unsplash 무료 API로 작업하였으나 잦은 이미지
            요청에 인한 한도 초과로 인하여 Pixabay API로 변경하였습니다. 하지만
            Pixabay API의 경우 유저 갤러리 기능을 제공하지 않아, 부득이하게 랜덤
            이미지 30장으로 대체하였습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
