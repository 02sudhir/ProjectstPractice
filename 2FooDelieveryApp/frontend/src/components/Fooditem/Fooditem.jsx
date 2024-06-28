import React ,{useContext}from "react";
import "./fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/Storecontext";

const Fooditem = ({ id, name, price, description, image }) => {


  const{cartitem,addTocart,removefromcart ,url }=useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={url+"/images/"+image} alt="" />
        {!cartitem[id]
        ?<img className="add" onClick={()=>addTocart(id)} src={assets.add_icon_white} alt="" />
          :<div className="food-item-counter"> 
          <img  onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="remove icon"/>
          <p>{cartitem[id]}</p>
          <img  onClick={()=>addTocart(id)}src={assets.add_icon_green} />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-iitem-price">₹{price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
