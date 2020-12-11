import React from 'react';
import Image from 'next/image';
import styles from './navbar.less';
export const Index = () => {
  return (
    <div className={styles.centerContainer}>
      <div className={styles.MainContainer}>
        <div className={styles.flexContainer}>
          <Image
            className={styles.leftLogo}
            src="/images/logo001-removebg-preview.png"
            alt="secue-logo2"
            width={68}
            height={68}
          />
          <div className={styles.TitleHome}>Home</div>
          <div className={styles.TitleWork}>Our Partner</div>
          <div className={styles.TitleWork}>Our Works</div>
          <div className={styles.TitleContact}>Contact Us</div>
          <div className={styles.TitleAbout}>About Us</div>
          <Image
            className={styles.rightLogo}
            src="/images/logo2.png"
            alt="secue-logo2"
            width={68}
            height={68}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
