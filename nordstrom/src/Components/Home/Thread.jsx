import React from 'react';
import styles from './new.module.css';
import Image1 from './assets/Thread1.jpg';
import Image2 from './assets/Thread2.jpg';
import Image3 from './assets/Thread3.jpg';

const Thread = () => {
  return (
    <div className={styles.Cont}>
    <div className={styles.Heading2}>
       <h4>THE THREAD</h4> 
       <p>Introducing your new go-to destination for all things fashion, beauty and lifestyle at Nordstrom, from how-tos and style inspiration to exclusive interviews and more.</p>
       <p>Get Inspired</p>
    </div>
    <div className={styles.Grid}>

        <div>
            <div className={styles.PICC}><img src={Image1} alt="" /></div>
          <div className={styles.deta}>
            <h5>Golf Dress Code: What Is Proper Golf Attire?</h5>
            <div style={{display:"flex"}}>
                <p>Read More</p>
            </div>
          </div>
          
        </div>

        <div>
          <div className={styles.PICC}><img src={Image2} alt="" /></div>
           
            <div className={styles.deta}>
            <h5>9 Types of Sandals You Need This Summer</h5>
            <div style={{display:"flex"}}>
                <p>Read More</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.PICC}> <img src={Image3} alt="" /></div>
           
            <div className={styles.deta}>
            <h5>The Ultimate Makeup Brush Guide</h5>
            <div style={{display:"flex"}}>
                <p>Read More</p>
            </div>
          </div>
        </div>
    </div>

    </div>
  )
}

export default Thread