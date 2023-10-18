import Nav1 from './Nav1';
import { useState } from 'react';
import { useEffect } from 'react';
import './upd.css';
const View =()=>{
      // To get data from input field
    const[get,setget]=useState([])
    useEffect(() => {
     fetch("http://localhost:4000/collect1") //To fetch the data from colllection  collect1
     .then(data => data.json())
     .then(data => setget(data))
    },)
    return(
        <div>
            <Nav1/>
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
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.vechical}</td>
                            <td>{data.model}</td>
                            <td>{data.date}</td>
                            <td>{data.service}</td>
                            <td>{data.status}</td>                 
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
export default View;