import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import { recipeListSearch } from "./recipeListSearch.js";
import { recipeDetailSearch } from "./recipeDetailSearch.js";
const app = express();
const PORT = 5000;

import { exampleResult } from "./exampleData.js";

let jsonParser = bodyParser.json();

app.use(cors());

app.post("/api", jsonParser, async (req, res) => {
  let data = await recipeDetailSearch(req);
  await res.json(data);
});

app.get("/recipe", jsonParser, async (req, res) => {
  const recipeId = req.query.id;
  console.log(recipeId);
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
