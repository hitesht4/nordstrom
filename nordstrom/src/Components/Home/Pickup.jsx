import React from 'react';
import styles from './pickup.module.css';

const Pickup = () => {
  return (
    <div>
    <div className="mt-5">
        <div className={styles.bgimage3}>
         
          <p><strong>Pick Up Today</strong></p>
       
          <div>
            <p className="mb-0">In store or curbside.</p>
            <a href="#" className="text-dark">Set Your Store</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pickup