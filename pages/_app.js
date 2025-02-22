// import './styles.css'
import 'nextra-theme-docs/style.css'
import Head from 'next/head'

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <>
      <Head>
        <title>{((page) => page.title)}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}