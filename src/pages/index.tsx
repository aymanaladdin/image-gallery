import Link from 'next/link'
import type { NextPage } from 'next'

import styles from '@styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className='page-wrapper'>
      <div className={styles['home-message']}>
        Simple Image Gallery
      </div>
      <Link href="/collections">
        <a>Collections</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {

  return {
    redirect: {
      destination: "/collections",
    }
  }
}

export default Home
