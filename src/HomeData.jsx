import React from 'react'
import { useNavigate } from 'react-router-dom';


const HomeData = (props) => {
  const navigate = useNavigate();
  const onEditClick=()=>{

   window.localStorage.setItem("email",props.info.email)
    navigate("update")
  }
  return (

    <>
    
<div className="container-fluid text-center ">
 

  <div className="row  mt-3 mb-1">
    <div className="col-lg-1  border  p-1  text-center  rounded"><h5>{props.srNo}</h5></div>
    <div className="col-lg-2  border  p-1 text-center rounded"><h5>{props.info.firstname}</h5></div>
    <div className="col-lg-2  border  p-1 text-center rounded"><h5>{props.info.lastname}</h5></div>
    <div className="col-lg-1  border  p-1 text-center rounded"><h5>{props.info.age}</h5></div>
    <div className="col-lg-3  border   p-1 text-center rounded">{props.info.email}</div>
    <div className="col-lg-1  border   p-1 text-center rounded">{props.info.phoneNumber}</div>
   
      <div onClick={onEditClick}  style={{width:"90px",color: "rgb(255, 136, 0)",cursor:"pointer"}} className="mx-3 ">
      <i className="fa-solid fa-pen-to-square p-1 pt-2"></i>Edit
      </div>


   <div className='p-1'  onClick={()=>{
    props.onDeleteclick(props.info.email)
   } } style={{width:"90px",color: "rgb(255, 136, 0)",cursor:"pointer"}}>
    <i className="fa-solid fa-trash-can p-1 pt-2"></i>Delete
   </div>
  </div>
  </div>

    </>
  )
}

export default HomeData;