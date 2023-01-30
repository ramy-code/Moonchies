import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
// import { recipeDetailSearch } from "./routes/recipeDetailSearch.js";
// import { recipeListSearch } from "./recipeListSearch.js";
import { listRoute } from "./routes/recipeListSearch.js";
const app = express();
const PORT = 5000;

import { exampleResult } from "./exampleData.js";

let jsonParser = bodyParser.json();

app.use(cors());

app.use(listRoute);

app.listen(PORT, () => console.log("Listening on port: " + PORT));
