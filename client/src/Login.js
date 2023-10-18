import Nav from "./Nav";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import login from './logo.jpg';
import mailin from './maill.png';
import pas from './pas.png';
import "./sign.css";
import { useState } from "react";

const Login =() => {
  const [email,setmail]=useState(''); 
  const [pass,setpass]=useState('');
  const navigate = useNavigate();
  function Submit(e) { 
    console.log( email, pass);
    e.preventDefault();
    if (email.trim() === "" || pass.trim() === "") {
      alert("Please enter all fields");
      return false;
    }
    else{
      fetch("http://localhost:4000/log", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": ""
            },
            body: JSON.stringify({ email,pass}),
          })
          .then((res) => res.json())
              .then((data) => {
               if(data.Error){
                  alert("invalid Login")
                  navigate('/Reg');
               }
               else{
                  alert("Loogin Successfully");
                  navigate('/Home1');
                  }
              });
         }
  }
   return (
   <div>
      <Nav/> 
    <div className="ma1"> 
    <Link to="/Adm" className="admin">Admin Login</Link>
      <div className="ma2">
         <div className="img">
            <img src={login} style={{marginLeft:'-30px'}}alt="logimg" className="i1" />
        </div>
      <div className='box1'>
        <img src={mailin} alt="email" className="i2"/>
        <h1 className='EM'>Email</h1><br></br>
       </div>
       <div className='box1'> 
        <input apperance="outline" type="email" required="required" className="e1" onChange={(e) => { setmail(e.target.value) }}  />
        </div>
        <div className='box1'>
        <img src={pas} alt="pass" className="i3" />        
        <h1 className='EM'>Password</h1><br></br>
       </div>
       <div className='box1'> 
       <input apperance="outline" type="password"  required="required" className="p1"  onChange={(e) => { setpass(e.target.value) }}/>
        </div>
        <input type="submit" value="Login" onClick={Submit} className="b1"  />
        <div style={{marginTop:'20px'}}>
        <Link className="sign" to="/Reg">Don't Have Accont?</Link>
        </div>

      </div>
   </div>
 </div>
   )
}
export default Login;