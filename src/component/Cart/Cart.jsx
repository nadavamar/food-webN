import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import storeContext from "../../Store/Cart-context";
import CartItem from "./CartItem";

export default function Cart(props) {
  const myctx = useContext(storeContext);

  const cartItemRemoveHandler = (id) => {
    myctx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    myctx.addItems({...item,amount:1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {myctx.items.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  const totalAmount = `$${myctx.totalAmount.toFixed(2)}`;
  const hasItems = myctx.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
