import express from "express";
import cors from "cors";

import { router as listRoute } from "./routes/recipeListSearch.js";
import { router as detailRoute } from "./routes/recipeDetailSearch.js";

const app = express();
const PORT = 5000;

app.use(cors());

app.use(detailRoute);

app.use(listRoute);

app.listen(PORT, () => console.log("Listening on port: " + PORT));
