import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

import styles from './EmptyList.module.scss';

export const EmptyList = () => (<div className={styles['empty-list']}>
  <FontAwesomeIcon icon={faGhost} size='3x' />
  <span>No Results Found!</span>
</div>)