import PropTypes from 'prop-types';

import { LayoutProps } from './types';

import styles from './Layout.module.scss';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles['side-nav']}></div>
      <main>{children}</main>
    </>
  )
}
