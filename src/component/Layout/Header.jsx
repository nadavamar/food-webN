import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";


export default function Header(props) {


  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1 className={classes.smallScreem}>NadavMeals</h1>
       <HeaderCartButton onClick={props.onShowCart}/>
      
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </React.Fragment>
  );
}
