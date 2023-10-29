import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
import { exampleResult } from "../exampleData.js";

let jsonParser = bodyParser.json();

export const API_KEY = "7df17733ac2349e588977900807b4b77";

export const router = express.Router();
const getRequestToApi = (url, searchMethod) => {
	let result;
	const promise = axios(url);
	if (searchMethod == "ingredients") {
		result = promise
			.then((res) => res.data)
			.catch((err) => {
				console.error(err);
			});
	}
	if (searchMethod == "recipe") {
		result = promise
			.then((res) => res.data.results)
			.catch((err) => {
				console.error(err);
			});
	}
	return result;
};

const parseRequestAsUrlForApiCall = (request) => {
	let url = "https://api.spoonacular.com/recipes/";
	let searchMethod = "";
	if (request.searchType == "ingredients") {
		searchMethod = "findByIngredients?";
		url += searchMethod + "ingredients=";
		request.searchText.map((el, index) => {
			url += el;
			if (index != request.searchText.length - 1) {
				url += ",+";
			}
		});
	} else if (request.searchType == "recipe") {
		searchMethod = "complexSearch?";
		url += searchMethod + "?query=";
		url += request.searchText;
	}
	url += "&apiKey=" + API_KEY;
	console.log(url);
	return url;
};

const parseRequestByType = (request) => {
	if (request.searchType === "recipe") return request;

	let newReq = { ...request };
	newReq.searchText = request.searchText.split(",").map((el) => {
		return el.trim().replace(" ", "%");
	});
	return newReq;
};

const recipeListSearch = async (req) => {
	if (!req.body) return;
	let searchMethod = req.body.searchType;
	const request = parseRequestByType(req.body);
	const url = parseRequestAsUrlForApiCall(request);
	return await getRequestToApi(url, searchMethod);
};

router.post("/api", jsonParser, async (req, res) => {
	try {
		let data = await recipeListSearch(req);
		res.json({ data });
	} catch (error) {
		console.log(`ERROR : ${error}`);
	}
});
