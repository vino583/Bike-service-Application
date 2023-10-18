import { Component, useState } from "react";
import {useNavigate} from 'react-router-dom';
import "./reg.css" 
import {FcPhone} from 'react-icons/fc'
import mail from "./maill.png"
import pass from "./pas.png"
import username from "./sign.png"
import Nav from "./Nav";
import emailjs from '@emailjs/browser';
const Reg = () => {
   // To get name,email,phone ,password,and confirm password from input field
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [phone,setnum]=useState('');
  const [password,setpass]=useState('');
  const[confirm,cpass]=useState('');
  const navigate = useNavigate();

//This function will used for register   to the login into that website 
  function Submit(e) { 
    console.log(name, email, phone, password);
    e.preventDefault();
     //This below two line will check Regex for  name and phone number 
    const namepattern=/^[A-Za-z]+$/;
    const numberpattern=/^[0-9]+$/;
  //The below three line will check the field is empty or not by using trim function 
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || password.trim() === "" || confirm.trim() === ""  ) {
      alert("Please enter all fields");
      return false;
    }
    //This below else if fuction will chcet the regex will match with input text
    else if ( !namepattern.test(name) || !numberpattern.test(phone) ) {
      alert("Please enter valid Details");
       return false;
     }
     //It used to check the passsword is matched or not 
    else if(password != confirm){
      alert("Password mismatched");
      return false;
    }

      //This below else function used to login into website
    else{
      fetch("http://localhost:4000/reg", {//To fetch the data from colllection  and store in reg
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": ""
            },
            body: JSON.stringify({ name,email,phone,password }),  //It will convert the json to string 
          })
          .then((res) => res.json())
              .then((data) => {
                  alert("Registered  Successfully");
                       //The below line will used for send the email
                  emailjs.sendForm('service_ne1plid','template_wlvyrfq',e.target,'PTf52PhONQ3CmzkRb');
                       //The below line will used for check if the data is correctly inserted then it moves to Home page
                  navigate('../Home1');
                  console.log(data, "data is inserted in Mongo DB");
              });
         }
  }
  return (
  < div >
  <Nav/>
   {/* To design the form for register to  login by using image,textboxes and submit button  */}
  <div className="m1">
    <div className="m2">
      <div className="spl">
        <h1>Registration</h1>
      </div>
    
      <div className="spl1">
      <form onSubmit={Submit}>
        <div className="nm1">
       
          <div className="bo">
            <img src={username} alt="logimg" className="u1" />
          </div>
          <div className="bo1">
            <input type="text" required="required" placeholder="Username" className="us1" onChange={(e) => { setname(e.target.value) }} />
          </div>
        </div>
        <div className="nm1">
          <div className="bo">
            <img src={mail} style={{height:'25px'}} alt="logimg" className="u2" />
          </div>
          <div className="bo1">
            <input type="email" required="required"  name="to_email" placeholder="Email" className="us1" onChange={(e) => { setemail(e.target.value) } } />
          </div>
        </div>
        <div className="nm1">
          <div className="bo">
            {/* To insert the logo from react icons */}
          <h1 style={{height:'20px'}}><FcPhone/></h1>   
          </div>
            <input type="number" required="required" placeholder="Phone Number" className="numb1" onChange={(e) => { setnum(e.target.value) }} />
        </div>
        <div className="nm1">
          <div className="bo">
            <img src={pass} alt="logimg" className="u1" />
          </div>
          <div className="bo1">
            <input type="password" required="required" placeholder="Password" className="us1" onChange={(e) => { setpass(e.target.value) }} />
          </div>
        </div>
        <div className="nm1">
          <div className="bo">
            <img src={pass} alt="logimg" className="u1" />
          </div>
          <div className="bo1">
            <input type="password" required="required" placeholder="Confirm password" className="us1" onChange={(e) => { cpass(e.target.value) }} />
          </div>
        </div>
       <button type="submit" className="su" >Submit</button>
       </form>
      </div>
      

    </div>
  </div>
      </div >
  )
}
export default Reg;