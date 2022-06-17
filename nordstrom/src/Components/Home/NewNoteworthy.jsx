import React from 'react';
import styles from './new.module.css';
import Image1 from './assets/Image1.jpg';
import Image2 from './assets/Image2.jpg';
import Image3 from './assets/Image3.jpg';

const NewNoteworthy = () => {
  return (

    <div className={styles.Cont}>
    <div className={styles.Heading}>
       <h4>NEW & NOTEWORTHY</h4> 
    </div>
    <div className={styles.Grid}>

        <div>
            <div className={styles.PICC}><img src={Image1} alt="" /></div>
          <div className={styles.deta}>
            <h4>Pizza Perfection</h4>
            <p>Prep for epic summer cookouts—or surprise Dad for Father's Day—with a gas-powered pizza oven from Ooni.</p>
            <div style={{display:"flex"}}>
                <p>Ooni</p>
                <p>All Home</p>
            </div>
          </div>
          
        </div>

        <div>
          <div className={styles.PICC}><img src={Image2} alt="" /></div>  
            <div className={styles.deta}>
            <h4>It's On Now</h4>
            <p>Save on the best brands and styles.</p>
            <div style={{display:"flex"}}>
                <p>Designer Sale</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.PICC}> <img src={Image3} alt="" /></div>
          
            <div className={styles.deta}>
            <h4>Tailor-Made for Summer</h4>
            <p>Dressing smart for warmer weather has never been easier.</p>
            <div style={{display:"flex"}}>
                <p>Suites,Blazers and Seperates</p>
                <p>All Work</p>
            </div>
          </div>
        </div>
    </div>

    </div>
  )
}

export default NewNoteworthy