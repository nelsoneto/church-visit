import '@/styles/globals.css'
import { Manrope } from 'next/font/google'
import Head from 'next/head'


const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-mont"
})


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${manrope.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        {/* <NavBar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </main>
    </>
  )
}

