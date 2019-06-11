import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

// const ingredients = {type: 'meat', }

const burger = props => {
  let ingredients = Object.keys(props.ings)
    .map(igKey => {
      return [...Array(props.ings[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return [...arr, ...el];
    }, []);

  console.log(ingredients);

  if(ingredients.length === 0) {
      ingredients = <p>Please add some ingredients</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
