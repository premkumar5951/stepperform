import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Saved() {
    const Alldata=useSelector((state)=>state.userdata)
  const data=Alldata.Data
  const[display,setdisplay]=useState("none")
  const[btntext,setbtntext]=useState("Show")

  const displayfun=()=>{
      if(display==="none"){
          setdisplay("block")
          setbtntext("Hide")
      }else{
        setdisplay("none")
        setbtntext("Show")
      }
  }
  return (<>
    <div className="personalinfowrapper1">
    <div className="personalhead5">
        <h3 className="h3head">Your detail's have been Successfully Submitted!</h3>
        <button className="btn" onClick={displayfun}>{`${btntext}`} user data</button>
    </div>
    <span style={{display:`${display}`}}><strong>First Name</strong>: {data.fname}</span>
    <span style={{display:`${display}`}}><strong>Last Name</strong>: {data.lname}</span>
    <span style={{display:`${display}`}}><strong>Email</strong>: {data.email}</span>
    <span style={{display:`${display}`}}><strong>Gender</strong>: {data.sex}</span>
    <span style={{display:`${display}`}}><strong>Phone</strong>: {data.phone}</span>
    <span style={{display:`${display}`}}><strong>First Book</strong>: {data.fbook}</span>
    {data.sbook?<span style={{display:`${display}`}}><strong>Second Book</strong>: {data.sbook}</span>:null}
    {data.tbook?<span style={{display:`${display}`}}><strong>Third Book</strong>: {data.sbook}</span>:null}
    <span style={{display:`${display}`}}><strong>Author</strong>: {data.author}</span>
    </div></>
  )
}
