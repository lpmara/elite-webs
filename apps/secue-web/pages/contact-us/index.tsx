import React from 'react';
import styles from './contact-us.less';
import NavBar from '../../components/navbar';
import Image from 'next/image';
export const Index = () => {
  return (
    <>
      <NavBar />
      <div className={styles.MainContainer}>
        <div className={styles.topImage}>
          <div className={styles.headerBannerContactUs}>
            <div className={styles.contactUsTitle}>Contact</div>
            <div className={styles.subTitle}>
              ต้องการข้อมูลเพิ่มเติมเกี่ยวกับการให้บริการ
              สามารถติดต่อข้อมูลตามแบบฟอร์มด้านล่าง
            </div>
            <div className={styles.subTitle}>
              บริษัทฯ จะติดต่อกลับโดยเร็วที่สุด หรือโทรสอบถาม{' '}
              <span className={styles.callCenter}>
                Call center 02-00xx00000
              </span>
            </div>
          </div>
        </div>
        <div className={styles.positionContactForm}>
          <div className={styles.formContactUsContainer}>
            <div className={styles.groupform}>
              <div className={styles.leftForm}>
                <div className={styles.formLeftcontainer}>
                  <a href="tel:02-029-1200" className={styles.gruopListContact}>
                    {/* <div><img src={phoneImage} alt="tel" /></div> */}
                    <div className={styles.contactText}>02 029 1200</div>
                  </a>
                  <div className={styles.gruopListContact}>
                    {/* <div><img src={lineImage} alt="line" /></div> */}
                    <div className={styles.contactText}>
                      <a
                        href={'https://line.me/ti/p/@itopplus'}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        @itopplus
                      </a>
                    </div>
                  </div>
                  <div className={styles.gruopListContact}>
                    {/* <div><img src={mailImage} alt="mail" /></div> */}
                    <div className={styles.contactText}>
                      <a
                        href={
                          'mailto:contact@itopplus.com?subject=Please type your topic...'
                        }
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Contact@itopplus.com
                      </a>
                    </div>
                  </div>
                  <div className={styles.gruopListContact}>
                    {/* <div><img src={placeImage} alt="place" /></div> */}
                    <div className={styles.contactText}>
                      บริษัท ไอท้อปพลัส จำกัด{' '}
                      <span className={styles.contactTextSub}>
                        <br />
                        89 อาคารเอไอเอ แคปปิตอล เซ็นเตอร์ ชั้น 32 ห้อง 3204-3207
                        ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพฯ 10400
                      </span>
                    </div>
                  </div>
                  <div className={styles.taxID}>
                    เลขที่ประจำตัวผู้เสียภาษี&ensp;0105550122773
                  </div>
                </div>
              </div>
              <div className={styles.rightForm}>{/* <FormRight /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
