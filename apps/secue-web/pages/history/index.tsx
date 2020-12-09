import React from 'react';
import Image from 'next/image';
import styles from './history.less';
import Layout from '../../components/layout';
import NavBar from '../../components/navbar';
// import '../public/styles/global.less';
export const Index = () => {
  const partnerImage = [
    {
      imagePath: '/images/partner/logo001.jpg',
    },
    {
      imagePath: '/images/partner/logo002.jpg',
    },
    {
      imagePath: '/images/partner/logo003.jpg',
    },
    {
      imagePath: '/images/partner/logo004.jpg',
    },
    {
      imagePath: '/images/partner/logo005.jpg',
    },
    {
      imagePath: '/images/partner/logo006.jpg',
    },
    {
      imagePath: '/images/partner/logo007.jpg',
    },
    {
      imagePath: '/images/partner/logo008.jpg',
    },
    {
      imagePath: '/images/partner/logo009.jpg',
    },
    {
      imagePath: '/images/partner/logo010.jpg',
    },
    {
      imagePath: '/images/partner/logo011.jpg',
    },
    {
      imagePath: '/images/partner/logo012.jpg',
    },
    {
      imagePath: '/images/partner/logo013.jpg',
    },
    {
      imagePath: '/images/partner/logo014.jpg',
    },
    {
      imagePath: '/images/partner/logo015.jpg',
    },
    {
      imagePath: '/images/partner/logo016.jpg',
    },
    {
      imagePath: '/images/partner/logo017.jpg',
    },
    {
      imagePath: '/images/partner/logo018.jpg',
    },
    {
      imagePath: '/images/partner/logo019.jpg',
    },
    {
      imagePath: '/images/partner/logo020.jpg',
    },
    {
      imagePath: '/images/partner/logo021.jpg',
    },
    {
      imagePath: '/images/partner/logo022.jpg',
    },
    {
      imagePath: '/images/partner/logo023.jpg',
    },
  ];

  return (
    <>
      <NavBar />
      <div className={styles.MainContainer}>
        <Image
          className={styles.bannerImage}
          src="/images/soldier-army2.jpg"
          alt="secue-logo2"
          width={1920}
          height={1080}
        />
        <div className={styles.historyTextContainer}>
          <div className={styles.titleHistory}>ผลงานของเรา</div>
          <div className={styles.detailHistory}>
            <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
          </div>
        </div>
        <div className={styles.ourPartnerContainer}>
          <div className={styles.titlePartner}>ผลงานของเรา</div>
        </div>
      </div>
    </>
  );
};

export default Index;
