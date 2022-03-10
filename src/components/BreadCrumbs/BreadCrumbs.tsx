import Link from 'next/link';
import styles from './BreadCrumbs.module.scss';
import { BreadCrumbsProps } from './types';

export const BreadCrumbs = ({ segments }: BreadCrumbsProps) => (
  <div className={styles['bread-crumbs-wrapper']}>
    {segments.map((segment, index) => (
      <div key={index} className={styles['segment']}>
        {segment.url ?
          <Link href={segment.url}><a className={styles['link']}>{segment.label}</a></Link> :
          <span className={styles['label']}>{segment.label}</span>}
        {index !== segments.length - 1 ? <span className={styles['separator']}>/</span> : <></>}
      </div>
    ))}
  </div>
)