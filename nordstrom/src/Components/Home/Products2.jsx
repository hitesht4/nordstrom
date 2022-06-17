import React from 'react';
import SamplePro from './SamplePro';
import styles from './Pro.module.css';

let PArr=[{
      "id":407,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/ed2cc134-d8ee-4c80-a72d-b7de2df565ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      "name": "La Mousse OFF/ON Foaming Face Cleanser",
      "price" : 3128,
      "brand": "Dior",
      "category" : "beauty",
      "color" : 'white'
    },
{
      "id":408,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/be722634-abd4-42eb-8e2a-c87f8de0f173.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      "name": "Pure Radiant Tinted Moisturizer Broad Spectrum SPF 30",
      "price" : 3259,
      "brand": "NARS",
      "category" : "beauty",
      "color" : 'black'
    },
{
      "id":409,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/71df7d72-3f5a-4de7-8060-0d1ebf24a5de.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
      "name": "Jefferson Water Friendly Slip-On Vegan Sneaker",
      "price" : 3000,
      "brand": "NATIVE SHOES",
      "category" : "shoes",
      "color" : 'white'
    },
{
      "id":410,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/fe05cfb2-2d84-4379-ba9a-c0524766c447.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
      "name": "Miles Slip-On Sneaker",
      "price" : 2667,
      "brand": "NATIVE SHOES",
      "category" : "shoes",
      "color" : 'white'
    },
{
      "id":411,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/b6d59fa4-7f70-4baf-9954-a6b841e2c1ef.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
      "name": "Phoenix Slip-On Vegan Sneaker",
      "price" : 2250,
      "brand": "NATIVE SHOES",
      "category" : "shoes",
      "color" : 'blue'
    },
{
      "id":412,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/671e7d51-c2da-42d0-963a-3edbc3f0a5c5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      "name": "Radiant Creamy Concealer",
      "price" : 991,
      "brand": "NARS",
      "category" : "beauty",
      "color" : 'brown'
    },]


const Products2 = ({heading,text}) => {
  return (
    <div>
    <div>
        <h4>{heading}</h4>
        <p>{text}</p>
    </div>
    <div className={styles.Grid} style={{gridTemplateRows:"auto"}}>
        {PArr.map(item=>
            <SamplePro item={item} key={item.id}/>
        )}
    </div>
    </div>
  )
}

export default Products2