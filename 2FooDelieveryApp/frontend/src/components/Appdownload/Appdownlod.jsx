import React from 'react'
import './appdwonload.css'
import { assets } from '../../assets/assets'

const Appdownlod = () => {
  return (
    <div className='app-dowonload' id='appdownload'>
    <p>For Better exeprience Download <br /> Tomato App</p>
    <div className="app-download-platform">
        <img src={assets.play_store} alt=""/>
        <img src={assets.app_store} alt=""/>
    </div>
      
    </div>
  )
}

export default Appdownlod
