'use client'
import { useRouter } from 'next/navigation'
import { IoClose } from 'react-icons/io5'
import style from './closeButton.module.css'

export default function CloseButton() {
  const router = useRouter()
  const onClick = () => {
    router.back()
  }
  return (
    <button className={style.closeButton} onClick={onClick}>
      <IoClose />
    </button>
  )
}
