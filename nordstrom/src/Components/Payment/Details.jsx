import React from 'react';
import styles from './Payment.module.css';


const Details = () => {
  return (
    <div className={styles.Bag}>
     <div className="Heating">
      <div className="Num">1</div>
      <div><h4>Address</h4></div>
      <div><button className={styles.Change}>(Change)</button></div>
    </div>
    <div className={styles.Detailss}>
    <div>
    <h6>DELIVERY ADDRESS:</h6>
    <p>HITESH TARWANI</p>
    <p>7/2,UJJAIN, MADHYA PRADESH 456001</p>
    <p>INDIA</p>
    </div>
        
    <div>
       <h6>DELIVERY METHOD:</h6>
       <p>STANDARD</p>
       <p>NO ADDITIONAL IMPORT CHARGES AT DELIVERY</p>
       <p>11–21 BUSINESS DAYS</p>
    </div>
    </div>
    </div>
  )
}

export default Details