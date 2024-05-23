import { ReactNode } from 'react'

type Props = { children: ReactNode; modal: ReactNode }
export default function Layout({ children, modal }: Props) {
  // console.log('모달', modal)
  // console.log('페이지', children)

  return (
    <>
      {children}
      {modal}
    </>
  )
}
