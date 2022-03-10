import useSWR from 'swr';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { imageURL } from '@lib/constants';
import { getFilledArray, getImgQueryString, httpClient, swrConfig } from '@lib/helpers';
import { Image, ResponseBody } from '@lib/types';
import { PagePagination } from '@components/PagePagination';
import { ImageItem } from '@components/ImageItem';
import { ImageListProps } from './types';
import { EmptyList } from '@components/EmptyList';

import styles from './ImageList.module.scss';

export const ImageList = ({ topic, search }: ImageListProps) => {
  const [page, setPage] = useState(1)
  const router = useRouter()

  const { data, error } = useSWR<ResponseBody<Image[]>>(`${imageURL}?${getImgQueryString(page, topic, search)}`, httpClient, swrConfig)

  useEffect(() => { setPage(1) }, [search, topic])

  if (error) router.push('/500')

  if (!data) return (
    <div className={styles['image-list']}>
      {
        getFilledArray(15)
          .map((_, index) => <Skeleton key={index} containerClassName='skeleton-wrapper' height={330} />)
      }
    </div>
  )

  return (
    !data.data.length ? (<EmptyList />) :
      (<>
        <div className={styles['image-list']}>
          {data?.data?.map((image, index) => <ImageItem key={index} image={image} />)}
        </div>
        <PagePagination page={data.pagination.page} totalPages={data.pagination.totalPages} setPage={setPage} />
      </>)
  )
}