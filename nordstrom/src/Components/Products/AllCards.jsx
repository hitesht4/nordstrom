import React from 'react';
import Product from './Product';
import styles from './Allcards.module.css';

const AllCards = ({data}) => {
  return (
    <div className={styles.Container}>
    {data.map(item=>
      <Product item={item} key={item.id}/>
    )}
    </div>
  )
}

export default AllCards