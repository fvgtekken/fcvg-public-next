import Head from 'next/head'
import '../style/globals.scss'
import StyledComponentsRegistry from './lib/registry'


export const metadata = {
  title: 'Fcvg - Web Site',
  description: 'My Profile',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html lang="en">
      <title>Fvg Dev</title>
      <Head>
        <meta http-equiv="Content-Security-Policy" content="script-src 'none'" key='security' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"  key='viewport' />
      </Head>
      <body>
        <StyledComponentsRegistry >{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}