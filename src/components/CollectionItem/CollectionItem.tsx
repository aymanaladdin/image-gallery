import Link from 'next/link';

import { CollectionProps } from './types';
import { ImagesCollage } from '@components/ImagesCollage';
import { purifyText } from '@lib/helpers';

import styles from './CollectionItem.module.scss';

export const CollectionItem = ({ collection }: CollectionProps) => {
  return (
    <Link href={`/collections/${collection.name}`}>
      <a className={styles['collection-item']}>
        <ImagesCollage collages={collection.collages} />
        <div className={styles['overlay-wrapper']}>
          <div className={styles['name-wrapper']}>
            <div className={styles['name']}> {purifyText(collection.name)}</div>
          </div>
        </div>
      </a>
    </Link>
  )
}