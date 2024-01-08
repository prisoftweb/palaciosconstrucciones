import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import {IBM_Plex_Sans, Skranji, Koulen} from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import Footer from '@/components/Footer'
import styles from '@/app/sass/base/_base.module.scss';
// import base from "@/app/sass/base/base.module.scss";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Palacios construcciones',
  description: 'Servicios de construccion tablaroca, durock, plafones acabados en general y pintura',
}
const ibmSans = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibmsans',
})

const skranji = Skranji({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-skranji',
})

const koulen = Koulen({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-koulen',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={styles.html} lang="en">
      {/* <body className={inter.className}> */}
      {/* <body className={styles.html}> */}
      <body className={`${styles.body} ${koulen.variable} ${ibmSans.variable} ${skranji.variable}` } >
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
      </body>
      <Footer />
    </html>
  )
}
