import Nav from "@/app/_component/Nav";
import style from "../page.module.css";
import Link from "next/link";
import SearchForm from "@/app/_component/SearchForm";
import VisualSection from "@/app/_component/VisualSection";
import ImgList from "@/app/_component/ImgList";

export default function Home() {
  const sectionInfo = {
    home: {
      title: "Unsplash",
      description: "인터넷의 시각 자료 출처입니다. 모든 지역에 있는 크리에이터들의 지원을 받습니다.",
    },
    background: {
      title: "배경화면",
      description: "웅장한 드론 사진부터 자연 속에서의 감동적인 순간까지, 최고의 데스크톱 및 모바일 배경을 제출하세요.",
    },
    nature: {
      title: "자연",
      description: "자연의 경이로움은 사진작가들이 지구를 장식하는 숨막히는 풍경, 다양한 동식물, 매혹적인 자연 현상을 포착하는 이 카테고리의 중심 무대입니다. 웅장한 풍경에서 매크로 샷에 이르기까지, 이 이미지는 시청자를 대자연의 중심으로 안내합니다.",
    },
    renders3D: {
      title: "3D 렌더링",
      description: "기술과 예술성이 결합된 3D 렌더 카테고리는 현실과 상상의 경계를 모호하게 만드는 디지털 렌더링 작품을 선보입니다. 건축 시각화에서 환상적인 세계에 이르기까지 이 카테고리는 디지털 장인 정신의 무한한 가능성을 보여줍니다.",
    },
    travel: {
      title: "여행하다",
      description: "이 카테고리와 함께 전 세계를 여행하는 시각적 여행을 떠나 사진작가들이 탐험과 방랑벽의 본질을 포착하세요. 활기찬 거리 풍경과 몰입감 넘치는 문화 체험을 통해 여행 카테고리는 가까운 곳과 먼 곳의 아름다움과 다양성을 보여줍니다.",
    },
    streetPhotography: {
      title: "거리 사진",
      description: "주변의 거리가 캔버스가 될 때 무엇을 발견 할 수 있습니까? 매력적인 도시의 조용한 통로부터 대도시의 번잡함에 이르기까지 이 카테고리는 모든 형태의 거리 사진을 조사합니다.",
    },
    film: {
      title: "필름",
      description: "아날로그 사진의 향수와 예술성을 포용하는 이 카테고리는 시대를 초월한 영화의 아름다움에 경의를 표합니다. 사진 작가는 풍부한 질감, 독특한 색상 팔레트 및 필름 사진을 소중한 매체로 만드는 고유한 결함으로 순간을 포착합니다. 몽환적인 풍경에서 친밀한 인물 사진에 이르기까지, 이 카테고리는 에멀젼에 빛을 포착하는 지속적인 매력을 기념합니다.",
    },
  };

  return (
    <div className={style.wrap}>
      <header className={style.header}>
        <div className={style.logo_search_group}>
          <h1 className={style.logo}>
            <Link href={"/home"}>
              <img src="/seul_logo.png" alt="seulg VM logo" />
            </Link>
          </h1>
          <Nav />
          <SearchForm />
        </div>
      </header>
      <main className={style.main}>
        <VisualSection sectionInfo={sectionInfo}/>
        <section className={style.image_section}>
          <h3 className="blind">이미지 리스트</h3>
          <div className={style.images_section_inner}>
            <ImgList />
          </div>
        </section>
      </main>
    </div>
  );
}
