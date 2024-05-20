import { useEffect, useState } from "react";
import "./App.css";
import Category from "./Category";
import axios from "axios";

function App() {
  const [finalcategory, setfinalcategory] = useState([]);
  const [finalprod, setfinalprod] = useState([]);
  const [catname, setcatname] = useState('');

  const getcategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalres) => {
        setfinalcategory(finalres);
      });
  };

  const getproducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((prodres) => prodres.data)
      .then((finalres) => {
        setfinalprod(finalres.products);
      });
  };

  useEffect(() => {
    getcategory();
    getproducts();
  }, []);

  useEffect(() => {
    if (catname !== '') {
      axios
        .get(`https://dummyjson.com/products/category/${catname}`)
        .then((prodres) => prodres.data)
        .then((finalres) => {
          setfinalprod(finalres.products);
        });
    }
  }, [catname]);

  const Pitems = finalprod.map((products, index) => {
    return <ProductItem key={index} pdata={products} />;
  });

  return (
    <>
<h1 className="text-5xl text-center font-bold text-yellow-400 transition-transform duration-300 transform-gpu hover:scale-105 shadow-lg py-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-80 shadow-opacity-50 rounded-full">Bazaaar-Se</h1>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[30px] font-bold">Our Product</h1>
          <div className="grid grid-cols-1 md:grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category 
                finalcategory={finalcategory} 
                setcatname={setcatname} 
                catname={catname}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {finalprod.length >= 1 ? Pitems : "No Product found"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItem({ pdata }) {
  const { thumbnail, title, price, discountPercentage } = pdata;

  return (
    <div className="bg-cyan-700 shadow-lg shadow-amber-100/50 text-center pb-4 w-full h-full">
      <img src={thumbnail} className="w-full h-[220px]" alt={title} />
      <h4 className="text-white">{title}</h4>
      <b className="text-white">Rs {price}</b>
      <br />
      <b className="text-white">Discount :{discountPercentage}%</b>
    </div>
  );
}
