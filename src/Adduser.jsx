import React, { useState,useEffect,useCallBack } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Adduser = () => {



  const [F_name,setFName]=useState("");
  const[L_name,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [Contact,setContact]=useState("");
  const [password,setPassword]=useState("");
  const [Age,setAge]=useState("");

 


  const onFormSubmit=()=>{
var data = JSON.stringify({
  "firstname":F_name ,
  "lastname": L_name,
  "age": Age,
  "email": email,
  "phoneNumber":Contact,
  "password": password
});

var config = {
  method: 'post',
  url: 'http://3.108.81.97:4000/adduser',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  alert(response.data.message);
})
.catch(function (error) {
  alert('something went wrong');
});

  }
  



const saveData=()=>{
  let data={F_name,L_name,email,password,Contact,Age}
  console.log(data)
        onFormSubmit()
}



  return (









      <>
       <div className="conatiner-fluid ">
       <button className='btn mt-3 text-white'  style={{backgroundColor: "rgb(255, 136, 0)"}}><Link className="nav-link active" aria-current="page" to="/">Home</Link></button>
     
     
      <div className="row   mt-5" style={{margin:"0 13% 0 13%"}}>
            <div className=" col-md-6 mb-3">
              <label for="cc-F_name" className="form-label ">First Name</label>
              <input  className="form-control h-75  "type="text" name="F_name" value={F_name} placeholder="Fist Name" onChange={(e)=>{setFName(e.target.value)}} required="" autoComplete='off'/>
            
              <div className="invalid-feedback">
                First Name is required
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label for="cc-L_name" className="form-label">Last Name</label>
              <input  className="form-control h-75  " type="text" name='L_name' value={L_name} onChange={(e)=>{setLname(e.target.value)}}  placeholder="Last Name" autoComplete='off' required=""/>
              <div className="invalid-feedback">
                Last Name is required
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label for="cc-expiration" className="form-label">Email</label>
              <input type="Email" className="form-control h-75 "  name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}   placeholder="Email" autoComplete='off' required=""/>
              <div className="invalid-feedback">
                Email is required
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label for="cc-Password" className="form-label">Password</label>
              <input type="password" className="form-control h-75 " name="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" autoComplete='off' required=""/>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="cc-Contact" className="form-label">Contact No</label>
              <input type="text" className="form-control h-75 " name="Contact"  value={Contact} onChange={(e)=>{setContact(e.target.value)}} placeholder="Contact Number" autoComplete='off' required=""/>
              <div className="invalid-feedback">
                Contact Number is required
              </div>
            </div>

            <div className="col-md-2 mb-3">
              <label for="cc-Age" className="form-label">Age</label>
              <input type="text" className="form-control h-75 " name='Age' value={Age} onChange={(e)=>{setAge(e.target.value)}} placeholder="Age" autoComplete='off' required=""/>
              <div className="invalid-feedback">
                Age is required
              </div>
            </div>
            
            <div>
               
            </div>
           <div className='col-md-12 text-center'>
           <button className=" btn  mt-3 text-white"  type="button" onClick={saveData}  style={{backgroundColor: "rgb(255, 136, 0)"}}>Add User</button>
           {/* <button type="button" className="btn org mt-5  text-center text-white" style={{backgroundColor: "rgb(255, 136, 0)"}}>Add User</button> */}
           </div>
          </div>
      </div>



      <div>

      </div>

      
      
      </>
    
  )
  
}

export default Adduser