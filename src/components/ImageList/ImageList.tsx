import useSWR from 'swr';
import { useState } from 'react';

import { imageURL } from '@lib/constants';
import { httpClient } from '@lib/helpers';
import { Image, ResponseBody } from '@lib/types';

import styles from './ImageList.module.scss';
import { ImageListProps } from './types';
import { PagePagination } from '@components/PagePagination';
import { ImageItem } from '@components/ImageItem';

export const ImageList = ({ topic }: ImageListProps) => {
  const [page, setPage] = useState(1)

  const { data, error } = useSWR<ResponseBody<Image[]>>(`${imageURL}?page=${page}&per_page=10&topic=${topic}`, httpClient, { shouldRetryOnError: false })

  if (error) return <div>{'Failed to load Collections'}</div>
  if (!data) return <div>{'Loading collections'}</div>

  return (
    <>
      <div className={styles['image-list']}>
        {data?.data?.map((image, index) => <ImageItem key={index} image={image} />)}
      </div>
      <PagePagination page={data.pagination.page} totalPages={data.pagination.totalPages} setPage={setPage} />
    </>
  )
}