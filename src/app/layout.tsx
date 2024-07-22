import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import style from './page.module.css'
import Link from 'next/link'
import SearchForm from './_component/SearchForm'
import Nav from './_component/Nav'
import LikesProvider from './_component/LikesProvider'
import MyLikes from './_component/MyLikes'

export const metadata: Metadata = {
  title: 'seul image gallery',
  description: 'pixabayAPI toy project',
  icons: {
    icon: '/img/seul_logo.png',
  },
}

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <LikesProvider>
          <div className={style.wrap}>
            <header className={style.header}>
              <div className={style.logo_search_group}>
                <h1 className={style.logo}>
                  <Link href={'/'}>
                    <img src="/img/seul_logo.png" alt="seulg VM logo" />
                  </Link>
                </h1>
                <Nav />
                <SearchForm />
                <MyLikes />
              </div>
            </header>
            <main className={style.main}>
              {children}
              {modal}
            </main>
          </div>
        </LikesProvider>
      </body>
    </html>
  )
}
