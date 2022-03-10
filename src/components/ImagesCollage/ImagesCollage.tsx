import Image from 'next/image';
import styles from './ImagesCollage.module.scss';
import { ImagesCollageProps } from './types';

export const ImagesCollage = ({ collages }: ImagesCollageProps) => {
  return (
    <div className={styles['collage-wrapper']}>
      <div className={collages.length === 1 ? `${styles['main-image']} ${styles['full-height']}` : styles['main-image']}>
        <div className={styles['image-wrapper']}>
          <Image src={collages[0].url} alt='collage-main-img' layout='fill' priority objectFit='cover' sizes='25vw' />
        </div>
      </div>
      {
        collages.length > 1 ?
          <div className={styles['sub-images']}>
            {collages.slice(1).map(({ url }, index) => (
              <div className={styles['image-wrapper']} key={index}>
                <Image src={url} alt='collage-sub-img' layout='fill' priority objectFit='cover' sizes='25vw' />
              </div>
            ))}
          </div> : <></>
      }
    </div>
  )
}