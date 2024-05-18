import { React, useEffect, useState } from "react";
import { useParams , useLocation } from "react-router-dom";

import axios from "axios";

const Recipedetail = () => {
  const location = useLocation();
  const params = useParams();
  const [recipeId, setRecipeId] = useState(params.id);
  const [recipeData, setRecipeData] = useState([]);
  console.log(location.state);
  let recipeInfo = location.state
  const getSingleRecipe = async (id) => {
    return await axios
      .get("http://localhost:5000/recipe", { params: { id: id } })
      .then((res) => {
        setRecipeData(res.data.ingredients);
      });
  };
  useEffect(() => {
    getSingleRecipe(recipeId);
  }, []);
  return (
    <div className="detailPage">
      <div className="recipeInfo">
        <img className="recipeImg" src={recipeInfo.image} alt="" />
        <h1 className="recipeTitle" >{recipeInfo.title}</h1>
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
