import React from 'react';
import Image from 'next/image';
import styles from './index.module.less';
// import Layout from '../components/layout';
import Navbar from '../components/navbar';

export const Index = () => {
  return (
    <>
      {/* <Layout /> */}
      <Navbar />
      <div className={styles.MainContainer}>
          <div className={styles.centerContainer}>
              <div className={styles.vidContainer}>
                <Image
                    alt={'Video Image'}
                    src={'/images/secue-vid.png'}
                    width={1100}
                    height={600}
                />
                <Image
                    className={styles.absoluteImage}
                    alt={'Video Image'}
                    src={'/images/play.png'}
                    width={55}
                    height={35}
                />
              <div className={styles.intoWebsite}>
                  Enter website | เข้าสู่เว็บไซต์
              </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Index;