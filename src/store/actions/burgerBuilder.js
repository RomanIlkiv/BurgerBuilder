import * as actionTypes from './actionsTypes';
import axios from '../../axios-order';

export const addIngredient = (name) => {
  return {
      type: actionTypes.ADD_INGREDIENT,
      ingredientName: name
  }
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
         .then(response => {
            console.log(response);
            dispatch(setIngredients(response.data));
         });
    };
};