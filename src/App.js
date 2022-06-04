import React, { useState } from "react";

import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Cart/store/CartProvider";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {

 const [cartItem,setCartItem]= useState(false);

 const ShowCartItem=()=>{
   setCartItem(true)
 }
 const HiddenCartItem=()=>{
   setCartItem(false)
 }
  
  return (
    <CartProvider className="App">
     { cartItem && <Cart OnHidden={HiddenCartItem}/>}
      <Header OnShowcart={ShowCartItem}  />
      <main>

      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
