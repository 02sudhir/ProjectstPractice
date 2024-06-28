import React, { useState, useEffect } from "react";
import "./orders.css";
import axios from "axios";
import { assets } from "../../assets/assets.js";
import { toast } from "react-toastify";

const Orders = ({ url }) => {
  const [orders, setorders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setorders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandller =async(event,orderId) =>{
    const response= await axios.post(url+'/api/order/status',{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }

  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, itemIndex) => {
                  if (itemIndex === order.items.length - 1) {
                    return item.name + " X " + item.qauntity;
                  } else {
                    return item.name + " X " + item.qauntity + ",";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street + ", "}</p>
                <p>{order.address.city+","+order.address.state+","+order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items:{order.items.length}</p>
            <p>₹{order.amount}</p>
            <select onChange={(event)=>statusHandller(event,order._id) } value={order.status}>
              <option value={"Food Processing"}>Food Processing</option>
              <option value={"Out for deleivery"}>Out for deleivery</option>
              <option value={"Delivered"}>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
