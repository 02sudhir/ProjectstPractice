import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../Backend/api.js';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState('');
  const usenavigate = useNavigate();

  const proceedLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(`http://localhost:8000/users?userName=${userName}&password=${password}`);
        const data = await response.json();
        if (data.length === 0) {
          setLoginError('Invalid credentials');
        } else {
          if (data[0].password === password) {
            setLoginError('');
            usenavigate('/navbar');
          } else {
            setLoginError('Invalid credentials');
          }
        }
      } catch (error) {
        setLoginError('Login failed: ' + error.message);
      }
    }
  };

  const validate = () => {
    let isValid = true;
    if (userName.trim() === '') {
      isValid = false;
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (password.trim() === '') {
      isValid = false;
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    return isValid;
  };

  return (
    <>
    
      <div className='row'>
        <div className='offset-lg-1 col-lg-10'>
          <form onSubmit={proceedLogin} className='container'>
            <div className='card'>
              <div className='card-header'>
                <p className='text-2xl'>Login to get started</p>
              </div>
              <div className='card-body'>
                <div className={`form-group ${usernameError ? 'has-error' : ''}`}>
                  <label>Email <span className='errmsg'>{usernameError && 'Please enter username'}</span></label>
                  <input
                    type='email'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                  />
                </div>
                <div className={`form-group ${passwordError ? 'has-error' : ''}`}>
                  <label>Password <span className='errmsg'>{passwordError && 'Please enter password'}</span></label>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                  />
                </div>
              </div>
              <div className='card-footer'>
                <button type='submit' className='btn btn-primary'>
                  Login
                </button>
              </div>
            </div>
          </form>
          {loginError && <div className="alert alert-danger mt-3">{loginError}</div>}
        </div>
      </div>
    </>
  );
}

export default Login;
