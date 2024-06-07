'use client'
import { useState, ChangeEventHandler, FormEventHandler } from 'react'
import style from './searchFrom.module.css'
import { IoMdSearch } from 'react-icons/io'
import { useRouter } from 'next/navigation'

export default function SearchForm() {
  const [searchKeyword, setSearchKeyword] = useState('')
  const route = useRouter()

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    setSearchKeyword(e.target.value)
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    route.push(`/search?searchKeyword=${searchKeyword}`)
    setSearchKeyword('')
  }

  return (
    <>
      <div className={style.img_search_area}>
        <form onSubmit={onSubmit} className={style.img_search_form}>
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
              value={searchKeyword}
              onChange={onChange}
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
