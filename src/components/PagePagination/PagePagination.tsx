import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { PagePaginationProps } from './types'; 

import styles from './PagePagination.module.scss';

export const PagePagination = ({ page, totalPages, setPage }: PagePaginationProps) => {

  const nextPage = () => setPage((prev) => Math.min(prev + 1, totalPages))
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1))

  return (<div className={styles['pagination']}>
    <a className={page === 1 ? `${styles['prev']} ${styles['disabled']}` : styles['prev']} onClick={prevPage}>
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Prev</span>

    </a>
    <div className={styles['info']}>
      {`Page ${page} of ${totalPages}`}
    </div>
    <a className={page === totalPages ? `${styles['next']} ${styles['disabled']}` : styles['next']} onClick={nextPage}>
      <span>Next</span>
      <FontAwesomeIcon icon={faArrowRight} />
    </a>
  </div>)
}