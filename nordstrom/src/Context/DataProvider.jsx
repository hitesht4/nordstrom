import React from 'react';
import {createContext ,useState} from 'react';
import data from '../Mens.json';


export const DataContext=createContext();

const DataProvider = ({children}) => {
    const [prod,setProd]=useState(data);
    const [val,setVal]=useState(prod);

    const handleData =(x,y)=>{
    if(y==undefined){
      var d=data.filter(item=>{
         return item.type==x
    })
      setProd([...d]);
      setVal(d)
    }
    else{
      d=data.filter(item=>{
        return item.id==y
      })
      setProd([...d]);
    }

    }
  return (
    <DataContext.Provider value={{prod,setProd,val,handleData}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider;