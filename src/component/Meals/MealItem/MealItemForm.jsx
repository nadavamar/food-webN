import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";


export default function MealItemForm(props) {
  const [isValid, setIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enterdAmount = amountInputRef.current.value;
    const enterdAmountNumber = +enterdAmount;
    if (
      enterdAmount.trim().length === 0 ||
      enterdAmount < 0 ||
      enterdAmount > 5
    ) {
      setIsValid(false)
      return;
    }
   props.onAddToCart(enterdAmountNumber)
   setIsValid(true)

  };

  return (
    <form action="" className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "numner",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please enterd valid amount (1-5).</p>}
    </form>
  );
}
