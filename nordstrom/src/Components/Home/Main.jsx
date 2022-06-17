import React from 'react'
import { Carousel } from 'react-bootstrap'
import styles from './main.module.css';

const btnArr=[
{name: "Our Gift Guide"},
{name: "Father's Day Gifts"},
{name: "Pop-In Gifts"},
{name: "Gift Cards"},
{name: "Grooming & Cologne Gifts"},
{name: "Home & Outdoor Gifts"},
{name: "Luxe Gifts"}
]
const Main = () => {
  return (
    <div className={styles.Highlight}>
        <div>
            <img src="https://n.nordstrommedia.com/id/9fab3f7e-d164-435a-a8e1-05a0ab3828be.gif?h=254&w=1608" alt="" />
        </div>
        <div >
            <div className={styles.Btn}>
            <p>Need a perfect gift by Father's Day? You can still get it in time with expedited shipping and store pickup options. See delivery dates at checkout.</p>
            <div>

                {btnArr.map(item=>
                   <button key={item.name} className={styles.button}>{item.name}</button> 
                )}

            </div>
            </div>   
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://n.nordstrommedia.com/id/30f4a509-58fe-483f-b861-2fef342c6441.jpeg?h=622&w=1608"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://n.nordstrommedia.com/id/ae19312f-ca77-4db9-94ee-658516ba458c.jpeg?h=622&w=1608"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://n.nordstrommedia.com/id/5a88520e-8ee7-4cf0-829d-3d833b0a9af2.jpeg?h=622&w=1608"
          alt="Third slide"
        />
      </Carousel.Item>

            <Carousel.Item>
        <img
          className="d-block w-100"
          src=" https://n.nordstrommedia.com/id/d2fb0a28-fce0-4356-a893-885aaff4c62b.jpeg?h=622&w=1608"
          alt="Third slide"
        />
      </Carousel.Item>


     
        </Carousel>
        

        </div>
    </div>
  )
}

export default Main