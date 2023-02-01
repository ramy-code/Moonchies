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
    <div className="detailPage">
      <div className="recipeInfo">
        <img className="recipeImg" src={recipeImage} alt="" />
        <h1 className="recipeTitle" >{recipeName}</h1>
      </div>
      <div className="ingredientBody">
        {recipeData.map((el,index) => (
          <div className="ingredientInfo" key={index}>
              <img className="ingredientImg" src={'https://spoonacular.com/cdn/ingredients_100x100/'+ el.image} alt="" />
              <p className="ingredientTitle" >{`${el.amount.metric.value} ${el.amount.metric.unit}   ${el.name}`}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recipedetail;
