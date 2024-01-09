import '../app/globals.css'
import type { AppProps } from 'next/app'
import type { Metadata } from 'next'
import Layout from "../components/Layout"

export const metadata: Metadata = {
  title: 'Code By ET',
  description: "Etienne's software development portfolio",
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
