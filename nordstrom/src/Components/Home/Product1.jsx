import React from 'react';
import styles from './Pro.module.css';
import Sample from './Sample';

let PArr=[    {
      "id":401,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/fdd72252-ec23-4cf5-9b4e-82f2c0ee7bfc.jpeg?h=365&w=240&dpr=2",
      "name": "Men's New Era Royal Toronto Blue Jays Team Color 9FIFTY Snapback Hat",
      "price" : 3128,
      "brand": "New Era",
      "category" :"Caps",
      "color" : "blue"
    },
 {
      "id":402,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/08f0b9bb-58ae-4cad-882c-c9645f0b38e3.jpeg?h=365&w=240&dpr=2",
      "name": "Men's New Era Red Washington Nationals Team Color 9FIFTY Snapback Hat",
      "price" : 4128,
      "brand": "New Era",
      "category" :"Caps",
      "color" : "red"
    },
{
      "id":403,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/45d757a2-44ed-49cd-8375-8234a699a4d3.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
      "name": "Men's New Era Navy New York Yankees Game Authentic Collection On-Field 59FIFTY Fitted Hat",
      "price" :3500,
      "brand": "New Era",
      "category" :"Caps",
      "color" : "black"
    },
{
      "id":404,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/9f96dd29-ae49-4da1-810c-755ff1a94b9f.jpeg?h=365&w=240&dpr=2",
      "name": "Women's New Era Royal Los Angeles Dodgers Announce 9TWENTY Adjustable Hat",
      "price" :2100,
      "brand": "New Era",
      "category" :"Caps",
      "color" : "blue"
    },
{
      "id":405,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/53229ea4-6926-46a5-ba7d-ea32e8890e19.jpeg?h=365&w=240&dpr=2",
      "name": "Men's New Era Black MLB Allover Team Logo 59FIFTY Fitted Hat",
      "price" :4166,
      "brand": "New Era",
      "category" :"Caps",
      "color" : "black"
    },
{
      "id":406,
      "image_url" : "https://n.nordstrommedia.com/id/sr3/535796fa-e90e-4a1e-aded-cdd9aff47fa3.jpeg?h=365&w=240&dpr=2",
      "name": "Men's New Era Camo Detroit Tigers 2022 Armed Forces Day 39THIRTY Flex Hat",
      "price" :3166,
      "brand": "New Era",
      "category" :"Caps",
      "color" : "black"
    },]

const Product1 = ({heading,text}) => {
  return (
    <div>
    <div>
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
    <div className={styles.Grid}>
        {PArr.map(item=>
            <Sample item={item} key={item.id}/>
        )}
    </div>
    </div>
  )
}

export default Product1