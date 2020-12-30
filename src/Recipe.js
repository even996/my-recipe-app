import React from 'react';
import style from './recipe.module.css';

// bare for å få vekk en error med elementene for være unike for å letter fjerne de i react
let i = 0;

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li key = {i = i+1}>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe;

