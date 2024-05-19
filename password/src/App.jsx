import React, { useState } from "react";
import "./App.css";
import { LOW, NM, SPE, UP } from "./Data/Passchar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);
  const [passwordlen, setPasswordlen] = useState(10);
  const [fpass, setfinalpass] = useState('')



  let createPassword = () => {
    let charSet=''
    let finalpass=''
    if (uppercase || lowercase || number || special) {
     if(uppercase) charSet+= UP;
     if(lowercase) charSet+= LOW;
     if(special) charSet+= SPE;
     if(number) charSet+= NM
     for(let i=0;i<passwordlen;i++){
      finalpass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
     }
     setfinalpass(finalpass);
    
    
    } else {
      alert("Please select at least one checkbox");
    }
   
  };

let copypass =()=>{
  navigator.clipboard.writeText(fpass)

}

const notify = () => {
  toast(" Copied ..!!! Wow so easy!");
};

const copyAndNotify = () => {
  copypass();
  notify();
};


  return (
    <>
      <div className="passwordbox">
        <h1>Password Generator</h1>
        <div className="passwordboxin">
          <input type="text"  readOnly value={fpass} ></input>
          <button onClick={copyAndNotify}  >Copy</button>
          <ToastContainer />
        </div>
        <div className="passleng">
          <label>Password Length</label>
          <input type="range"  value={passwordlen} max={20} min={10} onChange={(e) =>{setPasswordlen(e.target.value)}}></input>
        </div>
        <div className="passleng">
          <label>Include Uppercase Letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          ></input>
        </div>
        <div className="passleng">
          <label>Include Lowercase Letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          ></input>
        </div>
        <div className="passleng">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          ></input>
        </div>
        <div className="passleng">
          <label>Include Special Characters</label>
          <input
            type="checkbox"
            checked={special}
            onChange={() => setSpecial(!special)}
          ></input>
        </div>
        <button className="btn" onClick={createPassword}>
      
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
