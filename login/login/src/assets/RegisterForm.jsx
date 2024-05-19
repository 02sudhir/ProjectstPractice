import React from 'react';
import './Login_form.css';
import { TbUserSquareRounded  } from "react-icons/tb";
import { FaLock } from "react-icons/fa";


const Login_form = () => {
  return (
    <div className='wraper'>
        <form action="">
            <h1>Login</h1>
                <div className="input-box">
                  <input type="text" placeholder='username' required/>
                  <TbUserSquareRounded  className='icon'/>

                </div>
                <div className="input-box">
                  <input type="password" placeholder='password' required/>
                  <FaLock className='icon'/>
                  
                </div>
                <div className="input-box">
                  <input type="password" placeholder='confirm password' required/>
                  <FaLock className='icon'/>
                  
                </div>
                
                <button type='submit'>Login</button>
                <div className='regester-link'></div>
                <p> Dont have an account? <a href='#'>Register </a></p>
        </form>
    </div>
  );
};

export default Login_form
