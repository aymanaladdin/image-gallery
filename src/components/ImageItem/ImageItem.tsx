import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { TopicTag } from '@components/TopicTag';
import { ImageItemProps } from './types';

import styles from './ImageItem.module.scss';

export const ImageItem = ({ image }: ImageItemProps) => {
  return (
    <div className={styles['image-item']}>
      <a href={image.link} target='_blank' rel="noreferrer" className={styles['image-wrapper']}>
        <Image src={image.url} alt='image-item' layout='fill' priority objectFit='cover' placeholder='blur' blurDataURL={image.url} />
        <span className={styles['user-overlay']}>
          <FontAwesomeIcon icon={faUserCircle} />
          <span>{image.user}</span>
        </span>
      </a>
      <div className={styles['topics-wrapper']}>
        {image.topics.map((topic, index) => (<TopicTag key={index} topic={topic} />))}
      </div>
    </div>
  )
}