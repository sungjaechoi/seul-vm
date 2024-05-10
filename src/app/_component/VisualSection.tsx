"use client"

import { usePathname } from "next/navigation";
import style from "./visualSection.module.css";
import { SectionInfo } from "@/model/SectionInfo";

type Props = {
  sectionInfo: SectionInfo
};

export default function VisualSection({sectionInfo}:Props) {
  const pathName = usePathname()

  let title = ''
  let description = ''

  if(pathName === "/home"){
    title = sectionInfo.home.title
    description = sectionInfo.home.description
  }
  if(pathName === "/background"){
    title = sectionInfo.background.title
    description = sectionInfo.background.description
  }
  if(pathName === "/nature"){
    title = sectionInfo.nature.title
    description = sectionInfo.nature.description
  }
  if(pathName === "/3D_renders"){
    title = sectionInfo.renders3D.title
    description = sectionInfo.renders3D.description
  }
  if(pathName === "/travel"){
    title = sectionInfo.travel.title
    description = sectionInfo.travel.description
  }
  if(pathName === "/street-photography"){
    title = sectionInfo.streetPhotography.title
    description = sectionInfo.streetPhotography.description
  }
  if(pathName === "/film"){
    title = sectionInfo.film.title
    description = sectionInfo.film.description
  }

  return (
    <section className={style.visual_section}>
      <div className={style.visual_section_inner}>
        <h2 className={style.section_title}>{title}</h2>
        <span className={style.description}>{description}</span>
      </div>
    </section>
  );
}
