import React from 'react';
import styles from './single.module.css';

const Colors = () => {
  return (
    <>
    <div className={styles.colors}>
        <div className={styles.color_c}>
            <div className={styles.o}></div>
        </div>
        <div className={styles.color_c}>
            <div className={styles.t}></div>
        </div>
        <div className={styles.color_c}>
            <div className={styles.th}></div>
        </div>
        <div className={styles.color_c}>
            <div className={styles.f}></div>
        </div>
        <div className={styles.color_c}>
            <div className={styles.fi}></div>
        </div>
        <div className={styles.color_c}>
            <div className={styles.si}></div>
        </div>
    </div>
    </>
  )
}

export default Colors;