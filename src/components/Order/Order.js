import React from "react";
import classes from "./Order.module.css";

const order = props => {
  const ingredients = [];
  for (let ing in props.ingredients) {
    ingredients.push({ name: ing, amount: props.ingredients[ing] });
  }

  const ingredientOutput = ingredients.map(ing => {
    return (
      <span key={ing.name}
        style={{
          border: "1px solid #ccc",
          display: 'inline-block',
          textTransform: "capitalize",
          padding: "5px",
          margin: "0 8px",
        }}
      >
        {ing.name}: {ing.amount}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>ingredients: {ingredientOutput} </p>
      <p>Price: ${props.price.toFixed(2)}</p>
    </div>
  );
};

export default order;
