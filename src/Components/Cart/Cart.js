import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Model from "../Util/Model";
import CartContext from "./store/Cart-Context";
import CartItem from "./CartItem";
export default function Cart(props) {
  const ctx = useContext(CartContext);
  const TotalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.length > 0;

  const handleAddItem = (item) => {
    ctx.additem({...item,amount:1})
  };

  const handleRemoveItem = (id) => {
    ctx.removeitem(id)
  };
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          amount={item.amount}
          name={item.name}
          onRemove={handleRemoveItem.bind(null, item.id)}
          onAdd={handleAddItem.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Model onclose={props.OnHidden}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span> {TotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.OnHidden}>
          {" "}
          Close
        </button>
        {hasItems && <button className={classes.button}> Order</button>}
      </div>
    </Model>
  );
}
