import Hero from './Hero'
import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [value, setValue] = useState("");
    const navigateTo = useNavigate();
    const handleJoinmeeting = () =>{
        navigateTo(`/room/${value}`)
    }
    return (
        <div className='main'>
         <h1 className='head'>Connect with Your loved one Via We-duo</h1>
            <Hero />
            <div className='home'>
                <h1 className='container'>Join meeting</h1>
                <input 
                    type='text' 
                    placeholder='Generate meeting ID' 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                /><br />
                <button className='jbtn' disabled={!value} onClick={handleJoinmeeting}>Join meeting</button>
            </div>
        </div>
    );
}

export default Home;
