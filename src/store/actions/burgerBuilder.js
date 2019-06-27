import * as actionTypes from "./actions";
import axios from "../../axios-orders";
export const addIngredient = ing => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredient: ing
  };
};

export const removeIngredient = ing => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredient: ing
  };
};

const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
  return dispatch => {
    axios.get("/ingredients.json").then(resp => {
        console.log(resp.data);
      dispatch(setIngredients(resp.data));
    })
    .catch(err => {
        console.log(err);
        dispatch(fetchIngredientsFailed());
    })
  };
};
