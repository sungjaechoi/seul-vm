import style from './searchFrom.module.css'
import { IoMdSearch } from 'react-icons/io'

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
            <button type="submit">
              <span className="blind">검색</span>
              <IoMdSearch />
            </button>
          </fieldset>
        </form>
      </div>
    </>
  )
}
