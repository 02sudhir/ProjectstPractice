import React ,{useContext, useState}from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/Storecontext';

function Navbar({setshowlogin}) {
    const [menu, setmenu] = useState("home");
    

    const {getTotalCartAmouont ,token,settoken}= useContext(StoreContext);

    const navigate=useNavigate();
    const Logout =()=>{
      localStorage.removeItem("token")
      settoken('');
      navigate("/")
    }


  return (
    <div className='navbar'>
   <Link to='/'> <img src={assets.logo2} alt='logo'/></Link>
    <ul className='navbar-menu'>
    <Link to='/' onClick={()=> setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
    <a href='#explore-menu' onClick={()=> setmenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
    <a href='#appdownload' onClick={()=> setmenu("mobile-App")} className={menu==="mobile-App"?"active":""}>Mobile-App</a>
    <a href='#footer' onClick={()=> setmenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>

    </ul>
    <div className='navbar-right'>
    <img  src={assets.search_icon} alt='search icon'/>
    <div className='navbar-search-icon'>
       <Link to='/cart' > <img src={assets.basket_icon} alt='basket'/> </Link>
        <div className={getTotalCartAmouont()===0?"":"dot"}></div>
    </div>
    {!token?<button onClick={()=>setshowlogin(true)}>sign in</button>:<div className='navbar-profile'>
     <img src={assets.profile_icon} alt='' />
     <ul className="nav-profile-dropdown">
      <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt=''/><p>Orders</p></li>
      <hr />
      <li onClick={Logout}><img src={assets.logout_icon} alt=''/><p>Logout</p></li>
     </ul>
    </div>}
    

    </div>
    </div>
  )
}

export default Navbar