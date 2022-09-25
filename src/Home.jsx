import React, { useCallback, useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import HomeData from './HomeData';

const Home = () => {
const [userList,setUserList]=useState([]);
// const [updateFormData,setUpdateFormData]=useState({});
const fechdata=useCallback(()=>{
  var data = '';

var config = {
  method: 'get',
  url: 'http://3.108.81.97:4000/fetchusers',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  if (response.data.success){
    setUserList(response.data.data)
  }else{
    console.log("NO")
  }
})
.catch(function (error) {
  console.log(error);
});

},[]);

useEffect(()=>{
  var isMounted=true;
  if (isMounted){
    fechdata()
  }
},[fechdata])




const onDeleteclick=(email)=>{

  var data = JSON.stringify({
    "email":email
  });
  
  var config = {
    method: 'post',
    url: 'http://3.108.81.97:4000/remove',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    alert(response.data.message)
    fechdata()
  })
  .catch(function (error) {
    alert("something want Wrong")
  });
}

const updateUser=(email,newInfo)=>{
  var data = JSON.stringify({
    "firstname": "hp",
    "lastname": "djdjd",
    "age": 20,
    "email": email,
    "phoneNumber": 1234567890,
    "password": "1234"
  });
  
  var config = {
    method: 'post',
    url: 'http://3.108.81.97:4000/update',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

  
  
}

  return (
    <>
    
    <div className="container-fluid py-4 d-flex justify-content-end">
      <button type="button" className="btn    org px-4 text-white" style={{backgroundColor: "rgb(255, 136, 0)"}}>
      <Link className="nav-link active" aria-current="page" to="add">Add User</Link>
      </button>
    </div>

    <div className="row text-white">
    <div className="col-lg-1  border org p-2 text-center rounded">Sr No</div>
    <div className="col-lg-2  border org p-2 text-center rounded">First Name</div>
    <div className="col-lg-2  border org p-2 text-center rounded">Last Name</div>
    <div className="col-lg-1  border org p-2 text-center rounded">Age</div>
    <div className="col-lg-3  border org  p-2 text-center rounded">Email</div>
    <div className="col-lg-1  border org  p-2 text-center rounded">Contact No</div>
    <div className="col-lg-1  border org p-2 text-center rounded">Update</div>
    <div className="col-lg-1  border org  p-2 text-center rounded">Delete</div>
  </div>

      {
       userList.length>0?<>
       {userList.map((value,index)=>{
        return(
          <HomeData info={value} srNo={index+1} onDeleteclick={onDeleteclick} updateUser={updateUser}/>
        );
       })
       }
       </>:null
      }
    </>
    
  )
}

export default Home;