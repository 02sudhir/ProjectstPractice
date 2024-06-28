import axios from "axios";
import { createContext ,useEffect,useState} from "react";

export const StoreContext = createContext(null)

const StoreContextProvider=(props) =>{
const [cartitem, setcartitem] = useState({})

const url ="https://rasoiride-food-delivery-app.onrender.com";
const [token , settoken] = useState("")
const [food_list, setfood_list] = useState([])
    const addTocart = async(itemId) =>{
        if(!cartitem[itemId]){
            setcartitem((prev)=>({...prev,[itemId]:1}))
        }
        else
        {
            setcartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
                await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const removefromcart = async (itemId)=>{
        setcartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }

    const getTotalCartAmouont = () => {
        let totalAmount = 0;
        for (const item in cartitem) {
            if (cartitem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartitem[item];
                } else {
                    console.warn(`Item with id ${item} not found in food_list`);
                }
            }
        }
        return totalAmount;
    }


        const fetchFoodlist = async () =>{
            const response = await axios.get(url+"/api/food/list");
            setfood_list(response.data.data)
        }

        const loadCartData = async(token)=>{
            const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
            setcartitem(response.data.cartdata)
        }

        useEffect(()=>{
           
            async function loadData(){
                await fetchFoodlist()
                if(localStorage.getItem("token")){
                    settoken(localStorage.getItem("token"));
                    await loadCartData(localStorage.getItem("token"));
                }
            }
            loadData();
        },[])
    

    const  contextValue ={
        food_list,
        cartitem,
        setcartitem,
        addTocart,
        removefromcart,
        getTotalCartAmouont,
        url,
        token,
        settoken
    }
    return(
        <StoreContext.Provider  value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider