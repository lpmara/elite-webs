import React from 'react';
import styles from './our-service.less';
import NavBar from '../../components/navbar';

export const Index = () => {
  return (
    <>
      <NavBar />
      <div className={styles.MainContainer}>
        <div className={styles.flexContainer}></div>
      </div>
    </>
  );
};

export default Index;
