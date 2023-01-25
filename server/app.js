import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import { recipeDetailSearch } from "./recipeDetailSearch.js";
import { recipeListSearch } from "./recipeListSearch.js";
const app = express();
const PORT = 5000;

import { exampleResult } from "./exampleData.js";

let jsonParser = bodyParser.json();

app.use(cors());

app.post("/api", jsonParser, async (req, res) => {
  try {
    let data = await recipeListSearch(req);
    res.json({
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(`ERROR : ${error}`);
  }
});

app.get("/recipe", jsonParser, async (req, res) => {
  const recipeId = req.query.id;
  let data = await recipeDetailSearch(recipeId);
  await res.json(data);
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
