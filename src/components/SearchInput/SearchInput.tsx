import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { SearchInputProps } from './types';

import styles from './SearchInput.module.scss';

export const SearchInput = ({ search, onSearchChange, placeholder }: SearchInputProps) => (
  <div className={styles['search-wrapper']}>
    <span className={styles['search-icon']}><FontAwesomeIcon icon={faSearch}/></span>
    <input className={styles['search']} type="search" name="search_text" onChange={onSearchChange} value={search} placeholder={placeholder} />
  </div>
)
