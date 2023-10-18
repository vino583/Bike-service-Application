import Nav from "./Nav";
import { Link, useNavigate } from 'react-router-dom';
import { Component, useState } from "react";
import login from './logo.jpg';
import email from './maill.png';
import passwo from './pass.png';
import "./sign.css";
const Adm =() => {

    const [adm,setadm]=useState('');     //To get the value from input field
    const [pass,setpass]=useState('');
  
    const navigate = useNavigate();      //To Navigate to next page use this function
    function Submit(e) { 
      console.log(adm,pass);
      e.preventDefault();
    //To check the field is empty then return message as  enter fields    
      if (adm.trim() === "" || pass.trim() === "") {   
        alert("Please enter all fields");
        return false;
      }
      //To check the field value is correct then it moves to Admin page    
      else if((adm=="arul@gmail.com" || adm=="7339342561")&& pass=="happy"){ 
        navigate('../Adminpg');
      }
      //To check the field value is not match the correct details then return message as  enter fields
      else{
        alert("Provide Correct Details");
      }
    }
    return(
   <div>
      <Nav/> 
      {/* To design the form for admin login by using image,textboxes and submit button  */}
   
    <div className="ma1"> 
      <div className="ma2">
         <div className="img">
            <img src={login} alt="logimg" className="i1" />   
        </div>
      <div className='box1'>
        <img src={email} alt="email" className="i2"/>
        <h1 className='EM'>Email</h1><br></br>
       </div>
       <div className='box1'> 
        <input apperance="outline" type="text" required="required" className="e1" onChange={(e) => {setadm(e.target.value) }} />
        </div>
        <div className='box1'>
        <img src={passwo} alt="pass" className="i3" />        
        <h1 className='EM'>Password</h1><br></br>
       </div>
       <div className='box1'> 
       <input apperance="outline" type="password"  required="required" className="p1" onChange={(e) => { setpass(e.target.value) }}/>
        </div>
        <button type="submit" className="su" onClick={Submit}>Submit</button>

     
     
      </div>
   </div>
 </div>
    )
}
export default Adm;