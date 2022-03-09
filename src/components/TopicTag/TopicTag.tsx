import Link from 'next/link';

import { purifyText } from '@lib/helpers';
import { TopicTagProps } from './types';

import styles from './TopicTag.module.scss';

export const TopicTag = ({ topic }: TopicTagProps) => (
  <Link href={`/collections/${topic}`}>
    <a className={styles['topic-tag']}>{purifyText(topic)}</a>
  </Link>
)