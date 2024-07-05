'use client'

import { Image } from '@/model/Image'
import { createContext, ReactNode, useState, useEffect } from 'react'

type Like = {
  img: Image
  isLikes: boolean
}

type ContextInitial = {
  likes: Like[]
  addLike: (img: Image) => void
  removeLike: (img: Image) => void
}

type Props = { children: ReactNode }

export const likesContext = createContext<ContextInitial>({
  likes: [], // 초기값은 빈 배열
  //! 초기값에 빈함수가 사용되는 이유 = 타입선언의 성격이 강함 =>  context의 초기값은 결국 암기의 영역!!
  // Provider로 감싸지지 않은 컴포넌트가 안전한 동작하도록 하기 위함
  //- 초기값을 설정하면 타입의 안정성을 유지 할 수 있으며 Provider로 감싸지지 않은 컴포넌트가 안전한 동작을 보장할수 있다.
  // = 컴파일 단계에서 타입 오류를 방지
  //- Provider가 없을 때 addLike 또는 removeLike를 호출해도 빈 함수이기때문에 아무런 동작도 하지않는다.
  addLike: () => {}, // 초기값 빈 함수
  removeLike: () => {}, // 초기값 빈 함수
})

export default function LikesProvider({ children }: Props) {
  const [likes, setLikes] = useState<Like[]>([])

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 데이터 가져오기
    const storedLikes = localStorage.getItem('likes')
    // 로컬 스토리지에서 'likes'라는 키로 저장된 데이터 가져오기
    if (storedLikes) {
      // storedLikes가 null 또는 undefined 아니라면 데이터 가져오기
      //! 로컬스토리지에 데이터가 있는 경우만 가져온다. = 앱 초기 진입시 데이터 없음
      setLikes(JSON.parse(storedLikes))
    }
  }, [])

  useEffect(() => {
    // likes 상태가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem('likes', JSON.stringify(likes))
  }, [likes])

  const addLike = (img: Image) => {
    setLikes((prevLikes) => [...prevLikes, { img, isLikes: true }])
    // 기존 배열에 { imgId, isLikes: true }를 추가한 새로운 배열을 생성
  }

  const removeLike = (img: Image) => {
    setLikes((prevLikes) => prevLikes.filter((like) => like.img.id !== img.id))
    // 이전 likes의 배열을 순회하면서 imgId와 일치 하지 않은 요소들만 포함한 새로운 배열
  }

  return (
    <likesContext.Provider value={{ likes, addLike, removeLike }}>
      {children}
    </likesContext.Provider>
  )
}
