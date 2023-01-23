import React from 'react';
import Recipecard from './recipeCard';
import {Link} from 'react-router-dom'

const Recipelist = ({recipes}) => {
    return (
            <article className="recipeList">
                {recipes ? recipes.map((recipe) => <Link className="recipeCardLink" to={'/recipe/'+recipe.id}  key={recipe.id}> <Recipecard recipe={recipe}/> </Link>) :  <p>Nothing found 🥺</p>}
            </article>
    );
}

export default Recipelist;
