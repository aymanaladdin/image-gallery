import type { NextPage } from 'next'

import { PageTitle } from '@components/PageTitle'
import { CollectionList } from '@components/CollectionList'
import { BreadCrumbs } from '@components/BreadCrumbs'

const Collections: NextPage = () => {
  const segments = [
    { label: 'collections' },
  ]

  return (
    <div className='page-wrapper'>
      <BreadCrumbs segments={segments} />
      <CollectionList />
    </div>
  )
}

export default Collections
