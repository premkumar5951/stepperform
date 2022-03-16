import React from 'react'

export default function FavouriteBooks({userdetail,setuserdetail,handleInput,error,errormsg}) {
  return (
    <div className="personalinfowrapper">
    <div className="personalhead2">
        <h3>Favourite Books</h3>
    </div>
        <input type="text" name="fbook" placeholder="First Book *" onChange={handleInput} value={userdetail.fbook}/>
        <small>{errormsg.fbook?errormsg.fbook:null}</small>
        <input type="text" name="sbook" placeholder="Second Book" onChange={handleInput} value={userdetail.sbook}/>
        <input type="text" name="tbook" placeholder="Third Book" onChange={handleInput} value={userdetail.tbook}/>
    </div>
  )
}
