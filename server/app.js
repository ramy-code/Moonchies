import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios"


let jsonParser = bodyParser.json();

const app = express();
const PORT = 5000
const API_KEY = "7df17733ac2349e588977900807b4b77";
app.use(cors());




app.post('/api', jsonParser,async (req, res) => {
    if(!req.body) return
    const request = parseRequestByType(req.body);
    const url = parseRequestAsUrlForApiCall(request);
    const data = await getRequestToApi(url)
    console.log(url);
    res.json(data)
})



const getRequestToApi = (url) => {
    const promise = axios(url)
    const result = promise.then( (res) =>res.data)
        .catch((err) => { console.error(err) })
    return result
}


const parseRequestAsUrlForApiCall = (request) => {
    let url = "https://api.spoonacular.com/recipes/"
    let searchMethod = "";
    if (request.searchType == "ingridients")
    {
        searchMethod = "findByIngredients?";
        url += searchMethod +"ingredients=";
        request.searchText.map((el,index) => {
            url += el
            if (index != request.searchText.length - 1) {
                url+=',+'
            }
        })

    } else if (request.searchType == "recipe") {
        searchMethod = "complexSearch?";
        url += searchMethod + '?query='
        url += request.searchText
    }
    url += '&apiKey=' + API_KEY;
    return url;
}


const parseRequestByType = (request) => {
    if (request.searchType === "recipe") return request

    let newReq = {...request}
    newReq.searchText = request.searchText.split(',').map(el=>el.trim())
    return newReq;

}



app.listen(PORT,()=>(console.log('Listening on port: ' + PORT))) 