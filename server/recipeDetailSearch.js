import axios from "axios";
import { API_KEY } from "./recipeListSearch";

const getRequestToApi = async (id) => {
  url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API_KEY}`;
  return axios.get(url).then((res) => {
    return res;
  });
};

const recipeDetailSearch = async (id) => {
  return await getRequestToApi(id);
};

export default recipeDetailSearch;
