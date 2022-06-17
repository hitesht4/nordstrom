import React from 'react';
import styles from './footer.module.css';
import {SiFacebook,SiPinterest} from 'react-icons/si';
import {AiFillTwitterCircle,AiFillInstagram} from 'react-icons/ai';
import {ImInstagram} from 'react-icons/im';

const Footer = () => {
  return (
    <div className={styles.Container}>
    <footer className={styles.Footer}>
        <div>
          <ul>
            <li className={styles.Bold}>Customer Services</li>
            <li>Contact Us</li>
            <li>Order Status</li>
            <li>Shipping</li>
            <li>Return policy & Exchanges</li>
            <li>Price Adjustments</li>
            <li>Gift cards</li>
            <li>FAQ</li>
            <li>Product Recalls</li>
            <li>India</li>
          </ul>
        </div>

        <div>
          <ul>
            <li  className={styles.Bold}>About Us</li>
            <li>Careers</li>
            <li>Corporate Social Responsibility</li>
            <li>Diversity, inclusion & Belongings</li>
            <li>Investor Relationss</li>
            <li>Press Releases</li>
            <li>Get Email Updates</li>
            <li>Nordstrom Blogs</li>
          </ul>
        </div>

        <div>
          <ul>
            <li  className={styles.Bold}>Find A Store</li>
            <li>Find a Store</li>
            <li>Free style Help</li>
            <li>Alterations & Tailerings</li>
            <li>Trunk Club</li>
            <li>Pop -In- Shop</li>
            <li>Virtual Events</li>
            <li>Spa Nordstrom</li>
            <li>Nordstrom Restaurants</li>
            <li>Nordstrom Local</li>
          </ul>
        </div>

        <div>
          <ul>
            <li  className={styles.Bold}>Nordstrom Cards & Services</li>
            <li>The Nordy Club Rewards</li>
            <li>Apply For A Nordstrom Card</li>
            <li>Pay My Bill</li>
            <li>Manage My Nordstrom Card</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className={styles.Bold}>Nordstrom,Inc.</li>
            <li>Nordstrom Rack</li>
            <li>Nordstrom Canada</li>
            <li>Trunk Club</li>
          </ul>
        </div>

        <div >
          <div className="ps-5">
            <li className={styles.Bold}>Get our Apps</li>
            <div className={styles.Icons}>
              <ImInstagram/>
              <AiFillTwitterCircle/>
              <SiFacebook/>
              <SiPinterest/>
            </div>
          </div>
        </div>
    </footer>
    <div className={styles.Part2}>
        <div className={styles.Part2}>
        <div>Your Privacy Rights</div>
        <div>Do Not Sell My Info</div>
        <div>Terms & Conditions</div>
        <div>Interest-Based Ads</div>
        <div>©2022 Nordstrom, Inc.</div>
      </div>
      <div></div>
    </div>
    </div>
  )
}

export default Footer;