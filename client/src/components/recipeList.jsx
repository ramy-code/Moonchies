import React, { useEffect } from 'react';
import Recipecard from './recipeCard';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Recipelist = ({ recipes }) => {
    return (
        <>

            <article className="grid grid-cols-5 gap-10 ">
                {recipes ? recipes.map((recipe) =>
                    <Link state={recipe} className="recipeCardLink " to={'/recipe/' + recipe.id} key={recipe.id}>
                        <Recipecard recipe={recipe} />
                    </Link>)
                    : <p>Nothing found 🥺</p>}
            </article>
        </>
    );
}

export default Recipelist;
