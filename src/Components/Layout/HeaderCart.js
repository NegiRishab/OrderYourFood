import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css";
import CartContext from "../Cart/store/Cart-Context";

export default function HeaderCart(props) {
  const [isbtnclass, setisbtnclass] = useState(false);
  
  const cartx = useContext(CartContext);
  const { items } = cartx;

  const numberOfCartItem = items.reduce((currnumber, item) => {
    return currnumber + item.amount;
  }, 0);

  const Buttonclasss = `${classes.button} ${isbtnclass ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setisbtnclass(true);
    const timer=setTimeout(()=>{
setisbtnclass(false)
    },300)
    return ()=>{
      clearTimeout(timer)
    }
  }, [items]);
  return (
    <button className={Buttonclasss} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
}
