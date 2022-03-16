import React from 'react'
import "./personal.css"
export default function PersonalInfo({userdetail,setuserdetail,handleInput,error,errormsg}) {
  return (
    <div className="personalinfowrapper">
    <div className="personalhead">
        <h3>Personal Info</h3>
    </div>
        <input type="text" className="" name="fname" onChange={handleInput} value={userdetail.fname} placeholder="First name"/>
        <small>{errormsg.fname?errormsg.fname:null}</small>
        <input type="text" className="" name="lname" placeholder="Last Name" onChange={handleInput} value={userdetail.lname}/>
        <small>{errormsg.lname?errormsg.lname:null}</small>
        <input type="email" className="" name="email" placeholder="email" onChange={handleInput} value={userdetail.email}/>
        <small>{errormsg.email?errormsg.email:null}</small>

        <div className="singlerow">
        <select name="sex" className="selectitem" defaultValue={userdetail.sex} onChange={handleInput}  id="sex">
        <option value="Select Gender" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
            <option value="Don't say">Don't say</option>
        </select>
        <input type="phone" className="" name="phone" placeholder="phone" onChange={handleInput} value={userdetail.phone}/>
        </div><small>{errormsg.sex?errormsg.sex:null}</small>
        <small>{errormsg.phone?errormsg.phone:null}</small>
        

    </div>
  )
}
