import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/NavBar";
import "./mainpage.css";
import PersonalInfo from "../components/formComponents/PersonalInfo";
import FavouriteBooks from "../components/formComponents/FavouriteBooks";
import Author from "../components/formComponents/Author";
import Alluserdetail from "../components/formComponents/Alluserdetail";
import { userDataAction } from "../redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Saved from "../components/formComponents/saved";

const validfname = new RegExp("^[A-Za-z]{3,15}$");
const validfbook = new RegExp("^[A-Z0-9a-z]{3,15}$");
const validemail = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
const validphone = new RegExp(
  `^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`
);

export default function Mainpage() {
  const [emptyerror, setemptyerror] = useState("");
  const Alldata = useSelector((state) => state.userdata);
  const [error, seterror] = useState(false);
  const [errormsg, seterrormsg] = useState({
    fname: "",
    lname: "",
    email: "",
    sex: "",
    phone: "",
    fbook: "",
    sbook: "",
    tbook: "",
    author: "",
  });

  const dispatch = useDispatch();

  const [step, setstep] = useState(1);
  const [userdetail, setuserdetail] = useState({
    fname: "",
    lname: "",
    email: "",
    sex: "Select Gender",
    phone: "",
    fbook: "",
    sbook: "",
    tbook: "",
    author: "Select Author",
  });
  const Nextfun = () => {
    if (emptyerror) {
      setemptyerror("");
    }
    if (step === 1) {
      if (
        !userdetail.fname ||
        !userdetail.lname ||
        !userdetail.email ||
        !userdetail.phone
      ) {
        setemptyerror("Fields cannot be empty");
      } else if (userdetail.sex === "Select Gender") {
        seterror(true);
        seterrormsg({ ...errormsg, sex: "Select gender" });
      } else {
        if (!error) {
          if (step < 5) {
            setstep(step + 1);
          }
        }
      }
    } else if (step === 2) {
      if (!userdetail.fbook) {
        setemptyerror("Fields cannot be empty");
      } else {
        if (!error) {
          if (step < 5) {
            setstep(step + 1);
          }
        }
      }
    }else if (step === 3) {
        if (userdetail.author === "Select Author") {
        seterror(true);
        seterrormsg({ ...errormsg, author: "Select Author" });
      } else {
        if (!error) {
          if (step < 5) {
            setstep(step + 1);
          }
        }
      }
    }
     else {
      if (!error) {
        if (step < 5) {
          setstep(step + 1);
        }
      }
    }
  };
  const Prevfun = () => {
    if (error) {
      seterror(false);
    }
    if (step > 1) {
      setstep(step - 1);
    }
  };
  const savefun = () => {
    dispatch(userDataAction(userdetail));
    setstep(5);
    setuserdetail({
      fname: "",
      lname: "",
      email: "",
      sex: "Select Gender",
      phone: "",
      fbook: "",
      sbook: "",
      tbook: "",
      author: "Select Author",
    });
  };
  const handleInput = (e) => {
    const name = e.target.name;
    if (emptyerror) {
      setemptyerror("");
    }
    if (name === "fbook" || name === "tbook" || name === "tbook") {
      const value = e.target.value;
      setuserdetail({ ...userdetail, [name]: value });
    } else {
      const value = e.target.value.trim();
      setuserdetail({ ...userdetail, [name]: value });
    }

    if (step === 1) {
      if (name === "fname") {
        if (!validfname.test(e.target.value.trim())) {
          seterror(true);
          seterrormsg({
            ...errormsg,
            fname:
              "Must be at least 3 character long and contain only characters",
          });
        } else {
          seterror(false);
          seterrormsg({ ...errormsg, fname: "" });
        }
      } else if (name === "lname") {
        if (!validfname.test(e.target.value.trim())) {
          seterror(true);
          seterrormsg({
            ...errormsg,
            lname:
              "Must be at least 3 character long and contain only characters",
          });
        } else {
          seterror(false);
          seterrormsg({ ...errormsg, lname: "" });
        }
      } else if (name === "email") {
        if (!validemail.test(e.target.value.trim())) {
          seterror(true);
          seterrormsg({ ...errormsg, email: "enter a valid email" });
        } else {
          seterror(false);
          seterrormsg({ ...errormsg, email: "" });
        }
      } else if (name === "phone") {
        if (!validphone.test(e.target.value.trim())) {
          seterror(true);
          seterrormsg({ ...errormsg, phone: "enter a valid phone" });
        } else {
          seterror(false);
          seterrormsg({ ...errormsg, phone: "" });
        }
      } else if (name === "sex") {
        if (e.target.value === "Select Gender") {
          seterror(true);
          seterrormsg({ ...errormsg, sex: "select gender" });
        } else {
          seterror(false);
          seterrormsg({ ...errormsg, sex: "" });
        }
      }
    } else if (step === 2) {
      if (name === "fbook") {
        if (!validfbook.test(e.target.value)) {
          seterror(true);
          seterrormsg({ ...errormsg, fbook: "enter valid book name" });
        } else {
          seterror(false);
          seterrormsg({ ...errormsg, fbook: "" });
        }
      }
    } else if (step === 3) {
      if (name === "author") {
        if (e.target.value === "Select Author") {
          seterror(true);
          seterrormsg({ ...errormsg, author: "Select Author" });
        } else {
          seterror(false);
          seterrormsg({ ...errormsg, author: "" });
        }
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className='MainpageWrapper'>
        <div className='innerwrapper'>
          <div className='formwrapper'>
            <div className='upperform'>
              {step === 1 ? (
                <PersonalInfo
                  userdetail={userdetail}
                  setuserdetail={setuserdetail}
                  handleInput={handleInput}
                  error={error}
                  errormsg={errormsg}
                />
              ) : step === 2 ? (
                <FavouriteBooks
                  userdetail={userdetail}
                  setuserdetail={setuserdetail}
                  handleInput={handleInput}
                  error={error}
                  errormsg={errormsg}
                />
              ) : step === 3 ? (
                <Author
                  userdetail={userdetail}
                  setuserdetail={setuserdetail}
                  handleInput={handleInput}
                  error={error}
                  errormsg={errormsg}
                />
              ) : step === 4 ? (
                <Alluserdetail
                  userdetail={userdetail}
                  setuserdetail={setuserdetail}
                  handleInput={handleInput}
                />
              ) : (
                <Saved />
              )}
            </div>
            <div className='bottomform'>
            {emptyerror?<div className="errorbox">   
      <span className="emptyerror">{emptyerror ? emptyerror : null}</span>
              </div>:null}
              <div className='pagecount'>
                {step !== 5 ? (
                  <ul className='countlist'>
                    <li className={step === 1 ? "active" : null}>1</li>
                    <li className={step === 2 ? "active" : null}>2</li>
                    <li className={step === 3 ? "active" : null}>3</li>
                    <li className={step === 4 ? "active" : null}>4</li>
                  </ul>
                ) : null}
              </div>
              
              <div className='bottombutton'>
                {step === 5 ? (
                  <button
                    className='prev btn'
                    disabled={step === 1 ? "disabled" : null}
                    onClick={() => {
                      setstep(1);
                    }}>
                    Home
                  </button>
                ) : (
                  <>
                    <button
                      className='prev btn'
                      disabled={step === 1 ? "disabled" : null}
                      onClick={Prevfun}>
                      Previous
                    </button>
                    <button
                      className='next btn'
                      onClick={step === 4 ? savefun : Nextfun}>
                      {step === 4 ? "Confirm & Save" : "Next"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
