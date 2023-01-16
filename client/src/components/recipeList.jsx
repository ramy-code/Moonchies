import React from 'react';
import Recipecard from './recipeCard';

const Recipelist = ({recipes}) => {
    return (
        <div className="recipeList">
            {recipes.map((recipe) => <Recipecard key={recipe.id} recipe={recipe}/>)}
        </div>
    );
}

export default Recipelist;
