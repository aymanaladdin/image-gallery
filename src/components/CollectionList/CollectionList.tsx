import useSWR from 'swr';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { CollectionItem } from '@components/CollectionItem';
import { topicsURL } from '@lib/constants';
import { getFilledArray, getTopicQueryString, httpClient, swrConfig } from '@lib/helpers';
import { ResponseBody, Topic } from '@lib/types';


import styles from './CollectionList.module.scss';
import { PagePagination } from '@components/PagePagination';

export const CollectionList = () => {
  const [page, setPage] = useState(1)

  const { data, error } = useSWR<ResponseBody<Topic[]>>(`${topicsURL}?${getTopicQueryString(page)}`, httpClient, swrConfig)

  if (error) return <div>{'Failed to load Collections'}</div>
  if (!data) return (
    <div className={styles['collection-list']}>
      {
        getFilledArray(10)
          .map((_, index) => <Skeleton key={index} containerClassName='skeleton-wrapper' height={250} />)
      }
    </div>
  )
  return (
    <>
      <div className={styles['collection-list']}>
        {data?.data?.map((topic, index) => <CollectionItem key={index} collection={topic} />)}
      </div>
      <PagePagination page={data.pagination.page} totalPages={data.pagination.totalPages} setPage={setPage} />
    </>
  )
}