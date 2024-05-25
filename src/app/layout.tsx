import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import style from './page.module.css'
import Link from 'next/link'
import SearchForm from './_component/SearchForm'
import Nav from './_component/Nav'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'seul visual material',
  description: 'unsplash toy project',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
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
            </div>
          </header>
          <main className={style.main}>
            {children}
            {modal}
          </main>
        </div>
      </body>
    </html>
  )
}
