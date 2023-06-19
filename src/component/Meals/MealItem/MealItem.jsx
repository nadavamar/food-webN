import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import StoreContext from '../../../Store/Cart-context'

export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  const myctx= useContext(StoreContext);
const addToCartHandler=amount=>{
myctx.addItems({
  id:props.id,
  name:props.name,
  price:props.price,
  amount:amount

})
}

  return (
    <li className={classes.meal}>
      <div className="">
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className="">
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
}
