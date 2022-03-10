import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';

import styles from './ServerError.module.scss';

export const ServerError = () => (
  <div className={styles['error-wrapper']}>
    <FontAwesomeIcon icon={faBomb} size='3x' />
    <span>Oops!! Something went wrong back to <Link href={'/'}><a>Home</a></Link></span>
  </div>
)