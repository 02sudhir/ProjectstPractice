import React, { useContext, useEffect, useState } from "react";
import "./myorders.css";
import { StoreContext } from "../../context/Storecontext";
import axios from "axios";
import { assets } from "../../assets/assets";

const Myorders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setdata] = useState([]);

  const fetchOrder = async () => {
    const response = await axios.post(
      url + "/api/order/usersorder",
      {},
      { headers: { token } }
    );
    setdata(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrder();
    }
  }, [token]);
  return (
    <div className="myorder">
      <h2>My orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="parcel" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length-1) {
                    return item.name + " X " + item.qauntity;
                  } 
                  else{
                    return item.name+" X "+item.qauntity+", "
                  }
                })}
              </p>
              <p>{order.amount}.00</p>
              <p>Items:{order.items.length}.00</p>
              <p><span>&#x25cf;</span><b>{order.status}</b></p>
              <button>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Myorders;
