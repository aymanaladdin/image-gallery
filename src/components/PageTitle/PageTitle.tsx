import { PageTitleProps } from './types';

import styles from './PageTitle.module.scss';

export const PageTitle = ({title}: PageTitleProps) => {
  return (<div className={styles['page-title']}>{title}</div>)
}