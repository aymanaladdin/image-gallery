import type { GetServerSidePropsContext, NextPage, NextPageContext } from 'next'

import { PageTitle } from '@components/PageTitle'
import { httpClient, purifyText } from '@lib/helpers'
import { imageURL } from '@lib/constants'
import { ImageList } from '@components/ImageList'
import { BreadCrumbs } from '@components/BreadCrumbs'

const Collection: NextPage<{ collectionName: string }> = ({ collectionName }) => {
  const segments = [
    { label: 'collections', url: '/collections' },
    { label: purifyText(collectionName) }
  ]

  return (
    <div className="page-wrapper">
      <BreadCrumbs segments={segments} />
      <ImageList topic={collectionName} />
    </div>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const response = await httpClient(`${imageURL}?page=1&per_page=5&topic=${query.name}`)

  return response?.data?.length ? { props: { collectionName: query.name } } : { notFound: true }
}

export default Collection
