
import style from "./imgList.module.css";
import ImgItem from "./ImgItem";

export default function ImgList() {
  return (
    <ul className={style.img_list}>
      <ImgItem/>
    </ul>
  );
}
