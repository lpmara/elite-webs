import React from 'react';
import Image from 'next/image';
import styles from './navbar.less';

export const Index = () => {
    return (
        <div className={styles.MainContainer}>
            <div className={styles.UpperMenu}>
                <div>
                    <Image
                        className={styles.leftLogo}
                        src="/images/logo1.png"
                        alt="secue-logo2"
                        width={80}
                        height={80}
                    />
            </div>
                <div className={styles.textMenu}>Home</div>
                <div className={styles.textMenu}>Our Work</div>
                <div className={styles.textMenu}>Contact Us</div>
                <div className={styles.textMenu}>About Us</div>
                <div>
                <Image
                    className={styles.rightLogo}
                    src="/images/logo2.png"
                    alt="secue-logo2"
                    width={80}
                    height={80}
        />
                </div>
            </div>
        </div>
    );
};
export default Index;