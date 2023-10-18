import './Avai.css';
import Nav1 from "./Nav1"

import React, { useEffect, useState } from 'react'
const Avai =()=>{

    const[get,setget]=useState([])
   useEffect(() => {
    fetch("http://localhost:4000/collect2")
    .then(data => data.json())
    .then(data => setget(data))
   },)
    return(
        <div>
          
            <div className='avail'>
               <div className='cards'>
                     {get.map((data)=>{
                    return(
                        <div className='c1'>
                
                            <p><span>Service Name :</span>{data.sname}</p>  
                            <p><span>Description :</span>{data.desc}</p>  
                            <p><span> Service Cost:</span>{data.money}</p>
                            <p><span>Service Duration:</span>{data.mini}</p>                            
                                                     
                        </div>
                    )
                })
                }
                  
               </div>
            </div>
        </div>
       
    )
}
export default Avai;