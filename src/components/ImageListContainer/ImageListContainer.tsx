import { ChangeEvent, useState } from 'react';
import { BreadCrumbs } from '@components/BreadCrumbs';
import { ImageList } from '@components/ImageList/ImageList';
import { ImageListProps } from '@components/ImageList/types';
import { SearchInput } from '@components/SearchInput';
import { purifyText } from '@lib/helpers';

import styles from './ImageListContainer.module.scss';

export const ImageListContainer = ({ topic }: ImageListProps) => {
  const [search, setSearch] = useState('')

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const segments = [
    { label: 'collections', url: '/collections' },
    { label: purifyText(topic) }
  ]

  return (
    <>
      <div className={styles['header-wrapper']}>
        <BreadCrumbs segments={segments} />
        <SearchInput search={search} onSearchChange={onSearchChange} placeholder='Search by image description or user.' />
      </div>
      <ImageList topic={topic} search={search} />
    </>
  )
}