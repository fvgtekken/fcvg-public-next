import { Inter, Syne, Sen } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const titleFont = Syne({
  subsets: ['latin'],
  weight: ['700'],
})

export const siteFont = Sen({
  subsets: ['latin'],
  weight: ['400'],
})

/*export const titleFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['500', '700'],
})*/

/*const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})*/
