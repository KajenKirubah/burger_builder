import * as actionTypes from './actions';

export const addIngredient = (ing) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredient: ing
    }
}

export const removeIngredient = (ing) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredient: ing
    }
}