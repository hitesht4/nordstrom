import React from 'react';
import styles from './Table.module.css';
import { Form ,InputGroup} from 'react-bootstrap';
import {nanoid} from 'nanoid';


let dataTable=[
{
    h1:"Standard",
    lable:"No additional import charges at delivery",
    Arr:"11–21 business days",
    cost:"Free",
    ch:"true"
},
{
    h1:"Standard",
    lable:"Import charges collected upon delivery",
    Arr:"11–21 business days",
    cost:"Free"
},
{
    h1:"Express",
    lable:"No additional import charges at delivery",
    Arr:"6–11 business days",
    cost:"Free"
},
{
    h1:"Express",
    lable:"Import charges collected upon delivery",
    Arr:"6–11 business days",
    cost:"Free"
}

];
		
const TableC = () => {
  return (
    <div className={styles.T}>
        <table className={styles.Table}>
            <thead className={styles.Thead}>
                <tr>
                    <td>Delivery Method</td>
                    <td>Estimated Arrival</td>
                    <td>Shipping Cost</td>
                </tr>
            </thead>
            <tbody className={styles.Tbody}>
                {dataTable.map(item=>       
                   <tr key={nanoid()}>
                   	<td>
                    <h6 style={{color:'black'}}>{item.h1}</h6>
                    <Form.Check
                    type="radio" 
                    aria-label="radio 1" 
                    label={`${item.lable}`}
                    defaultChecked={item.ch}/>      
                    </td>
                    <td>
                        {item.Arr}
                    </td>
                    <td>
                        {item.cost}
                    </td>   
                </tr>         
            )}    
            </tbody>
        </table>
    </div>
  )
}

export default TableC