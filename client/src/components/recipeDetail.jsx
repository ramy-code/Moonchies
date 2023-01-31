import { React, useEffect, useState } from "react";
import { useParams , useLocation } from "react-router-dom";

import axios from "axios";

const Recipedetail = () => {
  const location = useLocation();
  const params = useParams();
  const [recipeId, setRecipeId] = useState(params.id);
  const [recipeData, setRecipeData] = useState([]);

  let { recipeImage, recipeName } = location.state

  const getSingleRecipe = async (id) => {
    console.log("axios call front");
    return await axios
      .get("http://localhost:5000/recipe", { params: { id: id } })
      .then((res) => {
        setRecipeData(res.data.ingredients);
        console.log(res);
      });
  };
  useEffect(() => {
    getSingleRecipe(recipeId);
    console.log(recipeData);
  }, []);
  return (
    <div>
      <img src={recipeImage} alt="" />
      <h1>{recipeName}</h1>
      {
        recipeData.map((el,index) => (
          <div key={index}>
            <img src={'https://spoonacular.com/cdn/ingredients_100x100/'+ el.image} alt="" />
            <p>{`${el.amount.metric.value} ${el.amount.metric.unit}   ${el.name}`}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Recipedetail;
