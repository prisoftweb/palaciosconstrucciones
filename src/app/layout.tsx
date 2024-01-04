import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import Footer from '@/components/Footer'
import styles from '@/app/sass/base/_base.module.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      {/* <body className={styles.html}> */}
      <body className={styles.body}>  
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
      </body>
      <Footer />
    </html>
  )
}