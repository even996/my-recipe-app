import React from 'react';
import style from './recipe.module.css';

// bare for å få vekk en error med elementene for være unike for å letter fjerne de i react
let i = 0;

const Recipe = ({ title, calories, image, ingredients }) => {
  const calNum = parseFloat(calories);
  const cal = calNum.toFixed(1);
  const calString = cal.toString();
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={(i = i + 1)}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calString} calories</p>
      <img className={style.image} src={image} alt='' />
    </div>
  );
};

export default Recipe;
