import React from 'react';
import styles from './category.module.css';
import Image1 from './assets/Cat1.jpg';
import Image2 from './assets/Cat2.jpg';
import Image3 from './assets/Cat3.jpg';
import Image4 from './assets/Cat4.jpg';
import Image5 from './assets/Cat5.jpg';
import Image6 from './assets/Cat6.jpg';

const Category = () => {
  return (
    <div className={styles.Main}>
    <div className={styles.Head}>
        <h4>Shop By Category</h4>
    </div>
    <div className={styles.Category}>
        <div>
            <div>
                <img src={Image1} alt="" />
            </div>
            <div className={styles.Text}>
                <p>Women</p>
            </div>
        </div>
        <div>
            <div>
                <img src={Image2} alt="" />
            </div>
            <div className={styles.Text}>
                <p>Men</p>
            </div>
        </div>
        <div>
            <div>
                <img src={Image3} alt="" />
            </div>
            <div className={styles.Text}>
                <p>Kids</p>
            </div>
        </div>
        <div>
            <div>
                <img src={Image4} alt="" />
            </div>
            <div className={styles.Text}>
                <p>Home</p>
            </div>
        </div>
        <div>
            <div>
                <img src={Image5} alt="" />
            </div>
            <div className={styles.Text}>
                <p>Beauty & Fragrances</p>
            </div>
        </div>
        <div>
            <div>
                <img src={Image6} alt="" />
            </div>
            <div className={styles.Text}>
                <p>Designer</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Category