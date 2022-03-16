import React from 'react'

export default function Author({userdetail,setuserdetail,handleInput,error,errormsg}) {
  return (
    <div className="personalinfowrapper">
    <div className="personalhead3">
        <h3>Author</h3>
    </div>
        <select className="selectitem" name="author" defaultValue={userdetail.author} onChange={handleInput} id="sex">
        <option value="Select Author" disabled>Select Author</option>
            <option value="Rabindranath Tagore">Rabindranath Tagore</option>
            <option value="R. K. Narayan">R. K. Narayan</option>
            <option value="Ruskin Bond ">Ruskin Bond </option>
            <option value="William Shakespeare">William Shakespeare</option>
            <option value="Stephen King">Stephen King </option>
        </select>
        <small>{errormsg.author?errormsg.author:null}</small>

        </div>
  )
}
