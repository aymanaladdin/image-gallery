import useSWR from 'swr';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { imageURL } from '@lib/constants';
import { httpClient } from '@lib/helpers';
import { Image, ResponseBody } from '@lib/types';
import { ImageListProps } from './types';
import { PagePagination } from '@components/PagePagination';
import { ImageItem } from '@components/ImageItem';

import styles from './ImageList.module.scss';

export const ImageList = ({ topic }: ImageListProps) => {
  const [page, setPage] = useState(1)

  const { data, error } = useSWR<ResponseBody<Image[]>>(`${imageURL}?page=${page}&per_page=10&topic=${topic}`, httpClient, { shouldRetryOnError: false })

  if (error) return <div>{'Failed to load Collections'}</div>

  if (!data) return (
    <div className={styles['image-list']}>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => <Skeleton key={index} containerClassName='skeleton-wrapper' height={330} />)}
    </div>
  )

  return (
    <>
      <div className={styles['image-list']}>
        {data?.data?.map((image, index) => <ImageItem key={index} image={image} />)}
      </div>
      <PagePagination page={data.pagination.page} totalPages={data.pagination.totalPages} setPage={setPage} />
    </>
  )
}