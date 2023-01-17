import React from 'react';
import Recipecard from './recipeCard';

const Recipelist = ({recipes}) => {
    return (
        <div className="recipeList">
            {recipes ? recipes.map((recipe) => <Recipecard key={recipe.id} recipe={recipe}/>) :  <p>Nothing found 🥺</p>}
        </div>
    );
}

export default Recipelist;
