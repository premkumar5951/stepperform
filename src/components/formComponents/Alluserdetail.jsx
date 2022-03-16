import React from 'react'
import { useSelector } from 'react-redux'

export default function Alluserdetail({userdetail,setuserdetail,handleInput}) {
  const Alldata=useSelector((state)=>state.userdata)
  const data=Alldata.Data
  return (<>
    
    <div className="personalinfowrapper1">
    <div className="personalhead1">
        <h3>Confirm Details</h3>
    </div>
    <span><strong>First Name</strong>: {userdetail.fname}</span>
    <span><strong>Last Name</strong>: {userdetail.lname}</span>
    <span><strong>Email</strong>: {userdetail.email}</span>
    <span><strong>Gender</strong>: {userdetail.sex}</span>
    <span><strong>Phone</strong>: {userdetail.phone}</span>
    <span><strong>First Book</strong>: {userdetail.fbook}</span>
    {userdetail.sbook?<span><strong>Second Book</strong>: {userdetail.sbook}</span>:null}
    {userdetail.tbook?<span><strong>Third Book</strong>: {userdetail.tbook}</span>:null}
    <span><strong>Author</strong>: {userdetail.author}</span>

    </div></>
  )
}
