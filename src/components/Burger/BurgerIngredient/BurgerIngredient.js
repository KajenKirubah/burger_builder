import React from "react";
import classes from "./BurgerIngredient.module.css";
import Aux from '../../../hoc/Auxilliary/Auxilliary';

const burgerIngredient = props => {
  
  let ingredient = null;
  
  switch(props.type) {

      case "bread-top":
          ingredient = <div className={classes.BreadTop}></div>;
          break;
      case "bread-bottom":
          ingredient = <div className={classes.BreadBottom}></div>;
          break;
      case "meat":
          ingredient = <div className={classes.Meat}></div>;
          break;
      case "cheese":
          ingredient = <div className={classes.Cheese}></div>;
          break;
      case "salad": 
          ingredient = <div className={classes.Salad}></div>;
          break;
      case "bacon":
          ingredient = <div className={classes.Bacon}></div>;
          break;
      default :
          ingredient = null;
  }

  return ingredient;

//   return (
//     <Aux>
//       <div className={classes.BreadTop}>
//         <div className={classes.Seeds1}></div>
//         <div className={classes.Seeds2}></div>
//       </div>
//       <div className={classes.Salad}></div>
//       <div className={classes.Meat}></div>
//       <div className={classes.Cheese}></div>
//       <div className={classes.BreadBottom}></div>
//     </Aux>
//   );
};

export default burgerIngredient;
