import React from 'react';

const Recipecard = ({ recipe }) => {
    return (
        <div className={" recipeCard " + recipe.id}>
            <img className='p-4 ' src={recipe.image} alt="">
            </img>
            <p className="recipe-title">{recipe.title}</p>
            <div className="recipe-details">
                <p className="missing-ingredients">{recipe.missedIngredientCount} ingredients missing</p>
                <p className="recipe-likes">{recipe.likes} 💓</p>
            </div>
        </div>
    );
}

export default Recipecard;
