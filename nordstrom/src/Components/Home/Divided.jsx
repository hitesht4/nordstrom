import React from 'react';
import styles from './Divided.module.css';

const Divided = () => {
  return (
    <div className={`container-fluid ${styles.Divided}`}>
        <div className={styles.Part1}>
        </div>
        <div className={styles.Part2}>
            <div className={styles.part1}></div>
            <div className={styles.part2}>
                <p>Join us as we celebrate, spotlight and give back to the LGBTQIA+ community.</p>
                <div>
                    <p>Learn More</p>
                    <p>Shop Pride</p>
                </div>
            </div>
            <div className={styles.part3}></div>
        </div>
      
        
    </div>
  )
}

export default Divided