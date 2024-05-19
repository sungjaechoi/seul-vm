import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import style from './page.module.css'
import Link from 'next/link'
import SearchForm from './_component/SearchForm'
import NavMenu from './_component/NavMenu'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'seul visual material',
  description: 'unsplash toy project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
              <nav className={style.nav}>
                <NavMenu />
              </nav>
              <SearchForm />
            </div>
          </header>
          <main className={style.main}>{children}</main>
        </div>
      </body>
    </html>
  )
}
