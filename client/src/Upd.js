import React, { useEffect, useState } from 'react'
import Nav1 from './Nav1';
import './upd.css';
import Adnav from './Adnav';
const Upd =()=>{
      // To get name,email,phone ,password,and confirm password from input field
    const[get,setget]=useState([]) 
    useEffect(() => {
        fetch("http://localhost:4000/collect1")  //To fetch the data from colllection  collect1
          .then((data) => data.json())
          .then((data) => {
            setget(data);
            console.log(data);
          })
          .catch((error) => {
            console.error("API call failed:", error);
          });
      }, []); 
    const progress= (e) => { 
       console.log(e);
       
       fetch(`http://localhost:4000/update/${e}`) //This line is used to update data by fetching
       .then((res) => res.json())
       .then((date) => console.log(date));
       
    };
    const complete= (e) => { 
        console.log(e);
        
        fetch(`http://localhost:4000/complete/${e}`) //This line is used to fetch data by fetching method
        .then((res) => res.json())
        .then((date) => console.log(date));
        
     };

    return(
        <div>
            <Adnav/>
            <div className='m1'>
            <div>
                <table border="1">
                        <tr>
                            <th>OwnerName</th>
                            <th>PhoneNumber</th>
                            <th>VechicalNumber</th>
                            <th>VechicalModel</th>
                            <th>Booking Date</th>
                            <th>ServiceName</th>  
                            <th>Status</th>
                        </tr> 
                               {/* The map function used to transform and manipulate the elements of an array.  */}
                        {get.map((data)=>{
                               {/* The fetched  data will store in the table */}
                        return(
                            
                        <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.vechical}</td>
                            <td>{data.model}</td>
                            <td>{data.date}</td>
                            <td>{data.service}</td>
                            <td>
                                  {/* The Button is used to update the data while clicking*/}      
                            <button type='Submit' name={data._id} onClick={(e) => progress (e.target.name)} className='on'>On progress</button>
                            <button type='Submit' name={data._id} className='comp' onClick={(e) => complete (e.target.name)}  >Completed</button>
                            </td>     
                            
                        </tr>

                    )
                })
                }

                </table>
            </div>
            </div>
        </div>
    )
}
export default Upd;