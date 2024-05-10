import Nav from "@/app/_component/Nav";
import style from "../page.module.css"
import Link from "next/link";
import SearchForm from "@/app/_component/SearchForm";
import VisualSection from "@/app/_component/VisualSection";
import ImgList from "@/app/_component/ImgList";

export default function Home() {
  return (
    <div className={style.wrap}>
      <header className={style.header}>
        <div className={style.logo_search_group}>
          <h1 className={style.logo}>
            <Link href={"/home"}>
              <img src="/seul_logo.png" alt="seulg VM logo" />
            </Link>
          </h1>
          <Nav/>
          <SearchForm/>
        </div>
      </header>
      <main className={style.main}>
        <VisualSection/>
        <section className={style.image_section}>
          <h3 className="blind">이미지 리스트</h3>
          <div className={style.images_section_inner}>
            <ImgList/>
          </div>
        </section>
      </main>
    </div>
  );
}