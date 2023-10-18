import "./book.css";
import { Component, useState } from "react";
import {useNavigate} from 'react-router-dom';
import serv from "./seee.png";
import Nav1 from "./Nav1";
import { useEffect } from 'react';

const Book =() =>{  
   // To get  name,email ,phone,vechical,model,date and service from input field
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [phone,setnumber]=useState('');
  const [vechical,setvec]=useState('');
  const[model,setmod]=useState('');
  const[date,setdate]=useState('');
  const[service,setser]=useState('');

  const[get,setget]=useState([])
  useEffect(() => {
   fetch("http://localhost:4000/collect2")  //To get the data from collection2 by using fetch function
   .then(data => data.json())
   .then(data => setget(data))
  },)
 
  const navigate = useNavigate();
   //This function will to book  the service  
  function book(e){
    console.log(name, email, phone, vechical,model,date,service);
    e.preventDefault();
     //This below three line will check Regex for  name and phone number and vechical number.
      const namepattern=/^[A-Za-z]+$/;
        const numberpattern=/^[0-9]+$/;
        const vechicalpattern=/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
  //The below three line will check the field is empty or not by using trim function 
    if (name.trim() === "" || email.trim() === "" || phone.trim() === ""  || vechical.trim() === "" || model.trim()==="" || date.trim()==="" || service.trim()==="" ) {
      alert("Please enter all fields");
      return false;
    }
    //This below else if fuction will chcet the regex will match with input text
    else if ( !namepattern.test(name) || !numberpattern.test(phone) || !vechicalpattern.test(vechical)) {
      alert("Please enter valid Details");
       return false;
     } 
         //This below else function used to book the service.
     else{
      fetch("http://localhost:4000/book", { //To fetch the data from colllection  and store in books
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": ""
            },
            body: JSON.stringify({ name, email, phone, vechical,model,date,service}),  //It will convert the json to string 
          })
          .then((res) => res.json())
              .then((data) => {
                 //The below line will used for check if the data is correctly inserted then it moves to Home page
                  alert("Booked Successfully"); 
                  navigate('../Home1');
             
              });
         }
  }
  return(
       //This bellow div code for book  the service details by using textbox and button it get thename, email, phone, vechical,model,date,service about service
       //The onclick fuction trigger when the submit button is click
    <div>
      <Nav1/>
    <div className="m1">
      <div className="m2">
        <div className="s11">
          <h1>Registration For Service</h1>
            <div>
              <input  type="text" required="required" placeholder="Enter OwnerName" className="re1"  onChange={(e) => { setname(e.target.value) }}/>
              <input  type="email" required="required" placeholder="Enter Email" className="re1"  onChange={(e) => { setemail(e.target.value) }}/> 
              <input  type="number" required="required" placeholder="Enter PhoneNumber" className="re1"  onChange={(e) => { setnumber(e.target.value) }}/>
              <input  type="text" required="required" placeholder="Enter Vechical Number" className="re1"  onChange={(e) => { setvec(e.target.value) }}/>
              <input  type="text" required="required" placeholder="Enter Vechical Model" className="re1"  onChange={(e) => { setmod(e.target.value) }}/>
              <input  type="date" required="required" placeholder="Enter Date" className="re1"  onChange={(e) => { setdate(e.target.value) }}/> 
              <select className="re1" onChange={(e) => { setser(e.target.value) }}>
                   {/* The map function used to transform and manipulate the elements of an array.  */}
               {get.map((data) =>{
               {/* The fetched  data will store in the selction tag */}
                return(
                  <option>{data.sname}</option>
                )
               }) }
                
              </select>

            </div>  
            <button type="submit" className="make" onClick={book}>Book The Service</button>
        </div> 
        <div className="s2">
            <img src={serv} alt="logimg" className="see" />   
        </div>     
        
        </div>
        
      </div>
    </div>
    )
}
export default Book;