import React, { useContext, useState  } from 'react';
import './Loginpopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios'

const Loginpopup = ({ setshowlogin }) => {
    const {url ,settoken}  = useContext(StoreContext)
    const [currentstate, setcurrentstate] = useState("Sign-up");
    const [data, setdata] = useState({
        name:"",
        email:"",
        password:""

    })

    const onChangeHandler =(event) =>{

        const name = event.target.name;
        const value = event.target.value;
        setdata(data =>({...data,[name]:value}))
    }

    const onLogin = async (event) =>{
        event.preventDefault()
        let newUrl = url;
        if(currentstate==="Login"){
            newUrl += "/api/user/login"
        }
        else{
            newUrl +="/api/user/register"
        }

        const response = await axios.post(newUrl,data);
        if (response.data.success) {
                settoken(response.data.token);
                localStorage.setItem("token",response.data.token);
                setshowlogin(false)
            
        }
        else{
            alert(response.data.message)
        }
    }


    return (
        <div className='login-popup'>
            <form  onSubmit={onLogin} className="login-pop-up-container">
                <div className="login-pop-title">
                   
                    <h2>{currentstate}</h2>
                    <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt='cross icon' />
                </div>
                <div className="login-pop-up-inputs">
                    {currentstate === "Login" ? <></> :<input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Your name' required />}
                    <input  name="email" onChange={onChangeHandler} value={data.email} type='email' placeholder='Your email' required />
                    <input  name="password" onChange={onChangeHandler} value={data.password} type='password' placeholder='Password' autoComplete="current-password" required  />
                </div>
                <div className="login-pop-condition">
                    <input type='checkbox' />
                    <p>By continuing , i agree to the terms of use & privacy policy</p>

                </div>
                <button  type='submit'>{currentstate === "Sign-up" ? "Create account" : "Login"}</button>
                {currentstate==="Login"
                ?
                <p>Create a New Account <span  onClick={()=>setcurrentstate("Sign-up")}> Click Here</span></p>
                :
                <p>Already have an account ? <span  onClick={()=>setcurrentstate("Login")}>Login Here</span></p>
                }
            </form>
        </div>
    );
};

export default Loginpopup;
