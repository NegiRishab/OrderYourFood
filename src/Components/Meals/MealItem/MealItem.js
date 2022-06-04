import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../Cart/store/Cart-Context";
export default function MealItem(props) {

   const ctx= useContext( CartContext)
  const { name, description, price,id } = props.meal;
  const Price = `$${price.toFixed(2)}`;

  const addtoCart=(amount)=>{
   ctx.additem({
     amount:amount,
     price:price,
     name:name,
     id:id
   })
  }
  return (
    <li className={classes.meal}>
      <div >
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{Price}</div>
      </div>
      <div><MealItemForm id={id} onAddCartHandler={addtoCart}/></div>
    </li>
  );
}
