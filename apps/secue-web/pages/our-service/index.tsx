import React from 'react';
import styles from './our-service.less';
import NavBar from '../../components/navbar';
import ImageSwitch from '../../components/image-switch';
import Image from 'next/image';
export const Index = () => {
  const ImageSwitchSide = [
    {
      imagePath: '/images/our-service/232016.jpg',
      title: 'Personal Security Service',
      titleColor: '#c51f25',
      detail1:
        'xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxxxxxxx xxxxxx xxxxxxxxxxxxxxxxxxx xxxxxx xxxxxxxxxxxxxx',
      detail2:
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxx xxxxxxx xxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx',
      side: 1,
    },
  ];
  return (
    <>
      <NavBar />
      <div className={styles.MainContainer}>
        <div className={styles.bannerConainer}></div>
        <div className={styles.flexContainer}>
          <div className={styles.titleName}>Our Service</div>
          <ImageSwitch ImageSwitch={ImageSwitchSide[0]} />
          <div className={styles.firstContent}>
            <div className={styles.contentTextMain}>
              1. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
            <div className={styles.contentImageMain}>
              <Image
                alt={'Image1234'}
                src={'/images/our-service/231982.jpg'}
                width={1876}
                height={872}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
