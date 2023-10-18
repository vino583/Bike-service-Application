import './book.css';
import { Link, useNavigate } from 'react-router-dom';
import { Component, useState } from "react";
import "./sign.css";
import Adnav from "./Adnav";

const Add =() => {
  // To get service name,money ,minimum requied days and description from input field
    const [sname,setser]=useState('');
    const [money,setamt]=useState('');
    const [mini,setmin]=useState('');
    const [desc,setdes]=useState('');

  
    const navigate = useNavigate();
    //This function will to add the service for service 
    function Adds(e) { 
      console.log(sname,money,mini,desc);
      e.preventDefault();
      //This below two line will check Regex for service name and money field.
       const namepattern=/^[A-Za-z]+$/;  
      const numberpattern=/^[0-9]+$/;
     //The below three line will check the field is empty or not by using trim function 
      if (sname.trim() === "" || money.trim() === "" || mini.trim() === "" || desc.trim() === "" ) {
        alert("Please enter all fields");
        return false;
      }
      //This below else if fuction will chcet the regex will match with input text
      else if ( !namepattern.test(sname) || !numberpattern.test(money) || !numberpattern.test(mini) ) {
        alert("Please enter valid Details");
         return false;
       }
       //This below else function used to add the service.
      else{
        fetch("http://localhost:4000/adds", {  //To fetch the data from colllection  and store in adds \ 
              method: "POST",
              crossDomain: true,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": ""
              },
              body: JSON.stringify({ sname,money,mini,desc }),  //It will convert the json to string 
            })
            .then((res) => res.json())
            //The below line will used for check if the data is correctly inserted then it moves to admin page
                .then((data) => {
                    alert("Inerted Successfully");
                    navigate('../Adminpg');
                });
           }
    }
    return(
      //This bellow div code for get the service details by using textbox and button it get the service name ,minimum days and money required and description about service
       //The onclick fuction trigger when the submit button is click
       <div>
            <Adnav/> 
            <div className="mai">
      <div className="ad1">
        <div className="ad2">
          <h1>Add The Service</h1>
            <div>
              <input  type="text" required="required" placeholder="Enter Service name" className="re1"  onChange={(e) => { setser(e.target.value) }} /><br></br>
              <input  type="number" required="required" placeholder="Enter money" className="re1"  onChange={(e) => { setamt(e.target.value) }} /><br></br>
              <input  type="text" required="required" placeholder="Enter Minimum Days for service" className="re1" onChange={(e) => { setmin(e.target.value) }} /><br></br>
              <input type="text"   required="required" placeholder="Enter Description" className="re1"  onChange={(e) => { setdes(e.target.value) }}/> <br></br>
            </div>  
            <button type="submit" className="ads" onClick={Adds} >Add The Service</button>
        </div> 
        
        
        </div>
        
      </div>
        </div>
    )
}
export default Add;