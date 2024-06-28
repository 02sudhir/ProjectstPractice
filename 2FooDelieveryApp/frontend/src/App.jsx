import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/Placeorder/Placeorder";
import Footer from "./components/Footer/Footer";
import Loginpopup from "./components/LoginPopup/Loginpopup";
import Verify from "./pages/verify/Verify";
import Myorders from "./pages/myorders/Myorders";


function App() {
  const [showlogin, setshowlogin] = useState(0);

  return (
    <>

    {showlogin?<Loginpopup  setshowlogin={setshowlogin} /> :<></>}
      <div className="app">
        <Navbar  setshowlogin={setshowlogin}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<Placeorder />}></Route>
          <Route path="/verify" element={<Verify />}></Route>
          <Route path="/myorders" element={<Myorders />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
