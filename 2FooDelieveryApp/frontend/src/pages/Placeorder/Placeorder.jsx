import React, { useContext, useEffect, useState } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../context/Storecontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Placeorder() {
  const { getTotalCartAmouont, token, food_list, cartitem, url } =
    useContext(StoreContext);
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderitems = [];
    food_list.map((item) => {
      if (cartitem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["qauntity"] = cartitem[item._id];
        orderitems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderitems,
      amount: getTotalCartAmouont() + 45,
    };
    let response = await axios.post(url+"/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  const navigate= useNavigate();


  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmouont()===0)
      {
        navigate('/cart')
      }
  },token)
  const onchangeHandller = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((data) => ({ ...data, [name]: value }));
  };

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="placeorder-left">
        <p className="title">Delievery Information</p>
        <div className="mulltifields">
          <input
            required
            name="firstName"
            onChange={onchangeHandller}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            onChange={onchangeHandller}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onchangeHandller}
          value={data.email}
          type="email"
          placeholder="Email Address"
        />
        <input
          required
          name="street"
          onChange={onchangeHandller}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="mulltifields">
          <input
            required
            name="city"
            onChange={onchangeHandller}
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onchangeHandller}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="mulltifields">
          <input
            required
            name="zipcode"
            onChange={onchangeHandller}
            value={data.zipcode}
            type="text"
            placeholder="Zip code"
          />
          <input
            required
            name="country"
            onChange={onchangeHandller}
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onchangeHandller}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="placeorder-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-totals-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmouont()}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmouont() === 0 ? 0 : 45}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmouont() === 0 ? 0 : getTotalCartAmouont() + 45}
              </b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default Placeorder;
