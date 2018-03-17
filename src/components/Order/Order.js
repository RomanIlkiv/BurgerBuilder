import React from 'react';
import classes from './Order';

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return <span
      key={ig.name}>
      {ig.name} ({ig.amount})
    <br/></span>
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: <br/>{ingredientOutput}</p>
      <p>Price: <strong>{props.price.toFixed(2)}$</strong></p>
    </div>
  );
};

export default order;