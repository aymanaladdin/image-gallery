import type { GetServerSidePropsContext, NextPage } from 'next'

import { httpClient } from '@lib/helpers'
import { imageURL } from '@lib/constants'
import { ImageListContainer } from '@components/ImageListContainer'

const Collection: NextPage<{ collectionName: string }> = ({ collectionName }) => {
  return (
    <div className="page-wrapper">
      <ImageListContainer topic={collectionName} />
    </div>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const response = await httpClient(`${imageURL}?page=1&per_page=5&topic=${query.name}`)

  return response?.data?.length ? { props: { collectionName: query.name } } : { notFound: true }
}

export default Collection
