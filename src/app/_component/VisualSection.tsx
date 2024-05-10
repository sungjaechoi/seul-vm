"use client"

import { usePathname } from "next/navigation";
import style from "./visualSection.module.css";

export default function VisualSection() {
  const pathName = usePathname()

  // if(pathName === "/background" || "/nature" || "/3D_renders" || "/travel" || "/street-photography" ||"/film"){
  //   title = sectionInfo[path].title
  //   desc = sectionInfo.background.description
  // }

  return (
    <section className={style.visual_section}>
      <div className={style.visual_section_inner}>
        <h2 className={style.section_title}>{title}</h2>
        <span className={style.description}>{desc}</span>
      </div>
    </section>
  );
}
