import Adnav from './Adnav';
import './Avai.css';
import Nav from "./Nav"

import React, { useEffect, useState } from 'react'
const Avaiadd =()=>{

    const[get,setget]=useState([]) //The use state  is used to set the value on in to another variable
   useEffect(() => {
    fetch("http://localhost:4000/collect2") //To fetch the data from colllection  collect2 
    .then(data => data.json())
    .then(data => setget(data))
   },) 
    //This below delete function is used to delete the data from database by clicking the button
    function dele(e) {
      console.log(e);
      fetch(`http://localhost:4000/dele/${e}`, {    //This line is used to delete data by fetching
        method: "DELETE"
      })
        .then(response => {
           //This if statement is used  to check deletion is performed successfully and return response messge 
          if (response.ok) {
            console.log("Service deleted successfully");
          }
           //This else statement is used  to check deletion is Not performed and return response messge 
           else {
            console.log("Error deleting service");
          }
        })
        .catch(error => {
          console.error("Fetch error:", error);
        });
    }
    return(
        <div>
            <Adnav />
            <div className='avail'>
               <div className='cards'>
                   {/* The map function used to transform and manipulate the elements of an array.  */}
                     {get.map((data)=>{
                    return(
                        <div className='c1'>
                   {/* The fetched  data will store in the paragaraph tag */}
                            <p><span>Service Name :</span>{data.sname}</p>  
                            <p><span>Description :</span>{data.desc}</p>  
                            <p><span> Service Cost:</span>{data.money}</p>
                            <p><span>Service Duration:</span>{data.mini}</p>   
                               {/* The Button is used to delete the data while clicking*/}                         
                            <button type='Submit' name={data._id} className='comple' onClick={(e) => dele (e.target.name)}  >delete</button>
                            
                        </div>
                    )
                })
                }
                  
               </div>
            </div>
        </div>
       
    )
}
export default Avaiadd;