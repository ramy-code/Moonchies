import axios from "axios";
import { API_KEY } from "./recipeListSearch.js";
import express from "express";
import bodyParser from "body-parser";

let jsonParser = bodyParser.json();

export const router = express.Router();

router.get("/recipe", jsonParser, async (req, res) => {
  try {
    const recipeId = req.query.id;
    let data = await recipeDetailSearch(recipeId);
    console.log(data.data);
    res.json(data.data);
  } catch (err) {
    console.error(err);
  }
});

const getRequestToApi = async (id) => {
  let url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API_KEY}`;
  console.log(id);
  return await axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("nope");
    });
};

export const recipeDetailSearch = async (id) => {
  try {
    let data = await getRequestToApi(id);
    return data;
  } catch (err) {
    console.error(err);
  }
};
