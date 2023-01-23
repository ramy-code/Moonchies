import axios from "axios";
import { API_KEY } from "./recipeListSearch.js";

const getRequestToApi = async (id) => {
  let url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API_KEY}`;
  console.log(id);
  return axios
    .get(url)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log("nope");
    });
};

export const recipeDetailSearch = async (id) => {
  return await getRequestToApi(id);
};
