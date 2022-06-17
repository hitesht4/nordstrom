import React from 'react';
import SamplePro from './SamplePro';
import styles from './Pro.module.css';

const PArr=[{
      "id":413,
      "image_url" :"https://n.nordstrommedia.com/id/sr3/89516acb-71e6-48f2-97fb-e8bf2d9840c8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      "name": "Capture Totale Intensive Restorative Night Crème for Face & Neck",
      "price" : 12399,
      "brand": "Dior",
      "category" : "beauty",
      "color" : 'blue'
    },
    {
      "id":414,
      "image_url" :"https://n.nordstrommedia.com/id/sr3/fcb99d6d-d04a-4000-bf50-3f84a56038f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      "name": "One Essential Eye Serum",
      "price" : 5101,
      "brand": "Dior",
      "category" : "beauty",
      "color" : 'red'
    },
        {
      "id":415,
      "image_url" :"https://n.nordstrommedia.com/id/sr3/17bcb15e-6468-4d88-9f0e-325f5bca2838.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      "name": "Hydra Life Deep Hydration Sorbet Water Essence",
      "price" : 5172,
      "brand": "Dior",
      "category" : "beauty",
      "color" : 'blue'
    },
     {
      "id":416,
      "image_url" :"https://n.nordstrommedia.com/id/sr3/448cb9fa-875d-445f-a608-f771fe413263.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      "name": "One Essential Skin Boosting Super Serum",
      "price" : 7085,
      "brand": "Dior",
      "category" : "beauty",
      "color" : 'red'
    },
       {
      "id":417,
      "image_url" :"https://n.nordstrommedia.com/id/sr3/27cb8906-b3e3-4329-9a4f-baa8aa97ad71.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      "name": "J'adore Beautifying Body Crème",
      "price" : 7085,
      "brand": "Dior",
      "category" : "beauty",
      "color" : 'white'
    },
    {
      "id":418,
      "image_url" :"https://n.nordstrommedia.com/id/sr3/e56bbbbf-02e1-491c-aab5-abef770cf423.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      "name": "Capture Youth Lift Sculptor Age-Delay Lifting Serum",
      "price" :6731,
      "brand": "Dior",
      "category" : "beauty",
      "color" : 'white'
    },

]
const Products3 = ({heading}) => {
  return (
    <div>
    <div>
        <h4>{heading}</h4>
    </div>
    
    <div className={styles.Grid} style={{gridTemplateRows:"auto"}}>
        {PArr.map(item=>
            <SamplePro item={item} key={item.id}/>
        )}
    </div>
    </div>
  )
}

export default Products3;