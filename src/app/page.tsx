import Link from "next/link";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.wrap}>
      <header className={style.header}>
        <div className={style.logo_search_group}>
          <h1 className={style.logo}>
            <Link href={""}>
              <img src="/seul_logo.png" alt="seulg VM logo" />
            </Link>
          </h1>
          <nav className={style.nav}>
            <ul className={style.nav_list}>
              <li className={style.nav_item}>
                <Link className={style.nav_link} href={"/home"}>
                  HOME
                </Link>
              </li>
              <li className={style.nav_item}>
                <Link className={style.nav_link} href={"/nav/background"}>
                  배경화면
                </Link>
              </li>
              <li className={style.nav_item}>
                <Link className={style.nav_link} href={"/nav/nature"}>
                  자연
                </Link>
              </li>
              <li className={style.nav_item}>
                <Link className={style.nav_link} href={"/nav/3d-renders"}>
                  3D 렌더링
                </Link>
              </li>
              <li className={style.nav_item}>
                <Link className={style.nav_link} href={"/nav/travel"}>
                  여행
                </Link>
              </li>
              <li className={style.nav_item}>
                <Link
                  className={style.nav_link}
                  href={"/nav/street-photography"}
                >
                  거리 사진
                </Link>
              </li>
              <li className={style.nav_item}>
                <Link className={style.nav_link} href={"/nav/film"}>
                  필름
                </Link>
              </li>
            </ul>
          </nav>
          <div className={style.img_search_area}>
            <form className={style.img_search_form}>
              <fieldset className={style.img_search_fieldset}>
                <legend className="blind">이미지 검색</legend>
                <label htmlFor="search-field" className="blind">
                  검색어 입력
                </label>
                <input
                  type="search"
                  id="search-field"
                  required
                  placeholder="고해상도 이미지 검색"
                  name="searchKeyword"
                />
                <button type="submit">검색</button>
              </fieldset>
            </form>
          </div>
        </div>
      </header>
      <main className={style.main}>
        <section className={style.visual_section}>
          <div className={style.visual_section_inner}>
            <h2 className={style.section_title}>제목</h2>
            <span className={style.description}>설명하는 글</span>
          </div>
        </section>
        <section className={style.image_section}>
          <h3 className="blind">이미지 리스트</h3>
          <div className={style.images_section_inner}>
            <ul className={style.img_list}>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
            </ul>
            <ul className={style.img_list}>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
            </ul>
            <ul className={style.img_list}>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
              <li className={style.img_item}>
                <div className={style.img_box}>
                  <Link href={""}>
                    <img src="/seul_logo.png" alt="" />
                  </Link>
                </div>
                <div className={style.util_box}>
                  <button className={style.like_button} type="button">
                    <span className="blind">좋아요</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
