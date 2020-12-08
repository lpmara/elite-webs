import React from 'react';
import Image from 'next/image';
import styles from './index.module.less';
import Layout from '../components/layout';
import NavBar from '../components/navbar';
import AbsoluteImage from '../components/absoluteImage';
import AbsoluteImage2 from '../components/absoluteImage2';
import '../public/styles/global.less';
export const Index = () => {
  return (
    <>
    <NavBar />
    <div className={styles.MainContainer}>
      
      <AbsoluteImage />
      <AbsoluteImage2 />
    </div>
    </>
  );
};

export default Index;