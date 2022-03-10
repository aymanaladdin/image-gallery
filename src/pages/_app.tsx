import type { AppProps } from 'next/app'

import { Layout } from '@components/Layout'

import '../styles/globals.scss'
import 'react-loading-skeleton/dist/skeleton.css'

function GalleryApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default GalleryApp
