import React,{useState} from 'react';
import './dropdown.css';

const Categories=[{name:'dress'},{name:'bottom'},,{name:'top'},{name:'skirt'} ,{name:'Jumpsuit'},{name:'jacket'}];

const Colors=[{name:'white'},{name:'black'},{name:'blue'},{name:'red'},{name:'pink'},
{name:'grey'},{name:'orange'},{name:'maroon'},{name:'gold'},{name:'yellow'},{name:'green'}];

const Brands=[{name:"BP"},{name:"NIKE"},{name:"Dress the Population"},{name:"AGOLDE"},{name:"Bernardo"},{name:"ASTR the Label"},{name:"SKIMS"}];


const Dropdown = ({Sort,filterBtn,filterBrand,filterCat}) => {
    const [open,isOpen]=useState(false);
    const [open1,isOpen1]=useState(false);
    const [open2,isOpen2]=useState(false);
    const [open3,isOpen3]=useState(false);
    const [open4,isOpen4]=useState(false);
    const [open5,isOpen5]=useState(false);
    
    const handleDrop=(value)=>{
      if(value===0){
          isOpen(!open);
      }
      else if(value===1){
        isOpen1(!open1);
      }
      else if(value===2){
        isOpen2(!open2);
      }
      else if(value===3){
        isOpen3(!open3);
      }
      else if(value===4){
        isOpen4(!open4);
      }
      else if(value===5){
        isOpen5(!open5);
      }  
    }

    return (
    <>
    <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(1)}>Category
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {open1 ? <div className="dropdown-content">
            {Categories.map(item=>
                 <div className="dropdown-item" key={item.name}>
                    <input type="checkbox" 
                    onChange={(e)=>{
                      if(e.target.checked===true){
                        filterCat(item.name)}
                      }}
                      />
                     {item.name}
                </div>   
            )}
          </div> :""} 
    </div>

    <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(0)}>Color
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {open ? <div className="dropdown-content">
            {Colors.map(item=>
                <div className="dropdown-item" key={item.name}>
                    <input 
                    type="checkbox" 
                    onChange={(e)=>{
                    if(e.target.checked===true){
                      filterBtn(item.name)
                    }}}
                    />
                    {item.name}
                </div> 
            )} 
          </div> :""} 
    </div>

    <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(4)}>Price
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {open4 ? <div className="dropdown-content">
                <div className="dropdown-item" >
                    <input type="checkbox" onChange={(e)=>{
                      if(e.target.checked===true){
                      Sort("Low","P")
                    }}}
                  />
                    Low To High
                </div> 
                <div className="dropdown-item" >
                    <input type="checkbox" onChange={(e)=>{
                    if(e.target.checked===true){
                      Sort("High","P")
                    }}}
                  />
                    High To Low
                </div>   
          </div> :""} 
    </div>

    <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(5)}>Ratings
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {open5 ? <div className="dropdown-content">
                <div className="dropdown-item" >
                <input type="checkbox" onChange={(e)=>{
                  if(e.target.checked===true){
                    Sort("Low","R")}}}
                  />
                    Low To High
                </div> 
                <div className="dropdown-item">
                <input type="checkbox" onChange={(e)=>{
                  if(e.target.checked===true){
                     Sort("High","R")}}
                  }
                  />
                    High To Low
                </div>   
          </div> :""} 
    </div>

    <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(2)}>Brand
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
        {open2 ? <div className="dropdown-content">
            {Brands.map(item=>
               <div className="dropdown-item" key={item.name}>
                <input type="checkbox" onChange={()=>filterBrand(item.name)} />
                {item.name}
                </div>  
                
            )}  
          </div> :""} 
    </div>

      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(6)}>Price
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>

      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(7)}>Gender
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>


      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(8)}>Size
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>


      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(9)}>Feature
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>


      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(10)}>Fit
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>


      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(11)}>Material
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>


      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(12)}>Neck Style
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>


      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(13)}>Occasion
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>



      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(14)}>Price
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>


      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(15)}>Sale
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>



      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(16)}>Sleeve Length
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>

      <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(17)}>Sports League
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>

    <div className="dropdown">
      <div className="dropdown-btn">Sports Team
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>

    <div className="dropdown">
      <div className="dropdown-btn" onClick={()=>handleDrop(3)}>Style
      <span style={{fontWeight:"bold"}}>+</span>
      </div>
    </div>

    </>
  )
}

export default Dropdown;