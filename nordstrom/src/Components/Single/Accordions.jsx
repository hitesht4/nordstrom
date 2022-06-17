import React from 'react'
import { Accordion } from 'react-bootstrap';
import styles from './SingleItem';

const Accordions = () => {
  return (
    <div>
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>SIZE INFO</Accordion.Header>
    <Accordion.Body>
       <ul>
        <li className={styles.light}>Size To Fit</li>
       </ul>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>DETAILS & CARE</Accordion.Header>
    <Accordion.Body>
      <p className={styles.light}>Made to move, these polished shorts are cut from a lightweight stretch fabric that will keep you feeling unrestricted during your action-packed day.8 1/2" inseam; 20" leg opening; 11 1/2" front rise; 13 1/2" back rise (size 32)
      </p>
      <ul className={styles.light}>
        <li>Zip fly with button closure</li>
        <li>Front slant pockets; back zip-welt pockets</li>
        <li>71% nylon, 29% spandex</li>
        <li>Machine wash, tumble dry</li>
        <li>Imported</li>
        <li>Men's Sportswear</li>
        <li>Item #6120429</li>
      </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
  )
}

export default Accordions