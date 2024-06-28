import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/Storecontext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartitem, food_list ,removefromcart ,getTotalCartAmouont , url}=useContext(StoreContext)

  const navigate=useNavigate();

  return (
    <div className='cart'>
    <div className="cartitem">
      <div className="cart-item-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br/>
      <hr />
        {food_list.map((item,index)=>{
          if(cartitem[item._id]>0)
          {
            return(
             <div  key={item._id}>
             <div className='cart-item-title cart-item-item' >
              <img src={url+'/images/'+item.image} alt=''/>
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartitem[item._id]}</p>
              <p>{item.price*cartitem[item._id]}</p>
              <p  onClick={()=>removefromcart(item._id)} className='cross'>X</p>
              </div>
              <hr />
             </div>
            )
          }
        })}
    </div>
    <div className='cart-bottom'>
      <div className='cart-total'>
      <h2>Cart Totals</h2>
      <div>
        <div className="cart-totals-details">
          <p>Subtotal</p>
          <p>₹{getTotalCartAmouont()}</p>
        </div>
        <hr />
        <div className="cart-totals-details">
          <p>Delivery Fee</p>
          <p>₹{getTotalCartAmouont()===0 ? 0:45}</p>
        </div>
        <hr />
        <div className="cart-totals-details">
          <b>Total</b>
          <b>₹{getTotalCartAmouont()===0 ? 0: getTotalCartAmouont()+45}</b>
        </div>
      
      </div>
      <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>

      </div>
      <div className="cart-promocode">
        <div>
            <p>If you have promo-code ,Enter it here</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='PROMO-CODE'/>
              <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Cart
