import { useState } from 'react'
import './App.css'
import Login_form from './assets/Login_form'
import RegisterForm from './assets/RegisterForm'
import { useFormik } from 'formik'

const initialValue ={
  username: "",
  password:""
}

const Registration = () =>{
  useFormik({
    initialValue:initialValue,
    onSubmit: (values) =>{
      console.log(values);
    },
  });
}

function  App(){

  
  
 {
  const [count, setCount] = useState(0)
  


  return (
    <>
     <Login_form />
     
    </>
  )
}}

export default App
