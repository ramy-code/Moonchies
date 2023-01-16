import React from 'react';

const Recipecard = ({recipe}) => {
    return (
        <div className="recipeCard">
            <img src={recipe.image} alt="" />
            <p>{recipe.title}</p>
            {recipe.usedIngredientCount && recipe.usedIngredientCount.map((ing) => {
                return <p key={ing.id}>{ing.name} : {ing.amount} {ing.unit} </p>
            })}
            {recipe.missedIngredients && recipe.missedIngredients.map((ing) => {
                return <p key={ing.id}>{ing.name} : {ing.amount} {ing.unit} </p>
            })}
        </div>
    );
}

export default Recipecard;
