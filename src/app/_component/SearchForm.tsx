import style from "./searchFrom.module.css";


export default function SearchForm() {
  return (
    <>
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
    </>
  );
}
