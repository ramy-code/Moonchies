import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios"


let jsonParser = bodyParser.json();

const app = express();
const PORT = 5000
const API_KEY = "7df17733ac2349e588977900807b4b77";

const exampleResult = [
    {
        "id":631757,
        "title":"Savory Slow Roasted Tomatoes with Filet of Anchovy",
        "image":"https://spoonacular.com/recipeImages/631757-312x231.jpg",
        "imageType":"jpg",
        "usedIngredientCount":1,
        "missedIngredientCount":2,
        "missedIngredients":[
            {
                "id":1002044,
                "amount":1,
                "unit":"small handful",
                "unitLong":"small handful",
                "unitShort":"small handful",
                "aisle":"Produce;Spices and Seasonings",
                "name":"herbs",
                "original":"small handful of any fresh herbs you like, chopped - we use oregano but you can also use basil, thyme, etc.",
                "originalName":"any fresh herbs you like, chopped - we use oregano but you can also use basil, thyme, etc",
                "meta":[
                    "fresh",
                    "chopped",
                    "canned"
                ],
                "extendedName":"canned fresh herbs",
                "image":"https://spoonacular.com/cdn/ingredients_100x100/mixed-fresh-herbs.jpg"
            },
            {
                "id":15001,
                "amount":8,
                "unit":"",
                "unitLong":"",
                "unitShort":"",
                "aisle":"Seafood",
                "name":"anchovy filets",
                "original":"8 high quality anchovy filets, (we use anchovies from Sardegna packed in salt)",
                "originalName":"high quality anchovy filets, (we use anchovies from Sardegna packed in salt)",
                "meta":[
                    "packed in salt)"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/anchovies.jpg"
            }
        ],
        "usedIngredients":[
            {
                "id":11529,
                "amount":4,
                "unit":"",
                "unitLong":"",
                "unitShort":"",
                "aisle":"Produce",
                "name":"tomatoes",
                "original":"4 round tomatoes (we grow & use grappolo for this dish)",
                "originalName":"round tomatoes (we grow & use grappolo for this dish)",
                "meta":[
                    "for this dish)"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/tomato.png"
            }
        ],
        "unusedIngredients":[
            
        ],
        "likes":10
    },
    {
        "id":638288,
        "title":"Chicken Roll-Ups With Feta Cheese and Arugula",
        "image":"https://spoonacular.com/recipeImages/638288-312x231.jpg",
        "imageType":"jpg",
        "usedIngredientCount":1,
        "missedIngredientCount":2,
        "missedIngredients":[
            {
                "id":5062,
                "amount":1.5,
                "unit":"pounds",
                "unitLong":"pounds",
                "unitShort":"lb",
                "aisle":"Meat",
                "name":"chicken breast cutlets",
                "original":"8 chicken breast cutlets, (about 1 ½ pounds)",
                "originalName":"chicken breast cutlets, (about",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/chicken-breasts.png"
            },
            {
                "id":10011959,
                "amount":1,
                "unit":"bunch",
                "unitLong":"bunch",
                "unitShort":"bunch",
                "aisle":"Produce",
                "name":"baby arugula",
                "original":"1 bunch large baby arugula",
                "originalName":"baby arugula",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/arugula-or-rocket-salad.jpg"
            }
        ],
        "usedIngredients":[
            {
                "id":11955,
                "amount":3,
                "unit":"ounces",
                "unitLong":"ounces",
                "unitShort":"oz",
                "aisle":"Canned and Jarred;Produce",
                "name":"feta cheese",
                "original":"3 ounces soft crumbled feta cheese with basil and sun-dried tomato, broken into small pie",
                "originalName":"soft crumbled feta cheese with basil and sun-dried tomato, broken into small pie",
                "meta":[
                    "with basil and sun-dried tomato, broken into small pie",
                    "crumbled",
                    "soft"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/sundried-tomatoes.jpg"
            }
        ],
        "unusedIngredients":[
            
        ],
        "likes":2
    },
    {
        "id":645555,
        "title":"Green Tomato Salad",
        "image":"https://spoonacular.com/recipeImages/645555-312x231.jpg",
        "imageType":"jpg",
        "usedIngredientCount":1,
        "missedIngredientCount":2,
        "missedIngredients":[
            {
                "id":10211111,
                "amount":1,
                "unit":"teaspoon",
                "unitLong":"teaspoon",
                "unitShort":"tsp",
                "aisle":"Ethnic Foods;Spices and Seasonings",
                "name":"sumac",
                "original":"1 teaspoon of sumac powder",
                "originalName":"sumac powder",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/dried-sumac.jpg"
            },
            {
                "id":2064,
                "amount":1,
                "unit":"handful",
                "unitLong":"handful",
                "unitShort":"handful",
                "aisle":"Produce;Spices and Seasonings",
                "name":"mint leaves",
                "original":"A handful of sage and mint leaves, finely chopped",
                "originalName":"A of sage and mint leaves, finely chopped",
                "meta":[
                    "finely chopped"
                ],
                "extendedName":"fresh mint leaves",
                "image":"https://spoonacular.com/cdn/ingredients_100x100/mint.jpg"
            }
        ],
        "usedIngredients":[
            {
                "id":11527,
                "amount":1,
                "unit":"large",
                "unitLong":"large",
                "unitShort":"large",
                "aisle":"Produce",
                "name":"green tomato",
                "original":"1 large green tomato",
                "originalName":"green tomato",
                "meta":[
                    "green"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/green-tomato.png"
            }
        ],
        "unusedIngredients":[
            
        ],
        "likes":1
    },
    {
        "id":769775,
        "title":"Simple Spinach and Tomato Frittata",
        "image":"https://spoonacular.com/recipeImages/769775-312x231.jpg",
        "imageType":"jpg",
        "usedIngredientCount":1,
        "missedIngredientCount":3,
        "missedIngredients":[
            {
                "id":99037,
                "amount":1,
                "unit":"small",
                "unitLong":"small",
                "unitShort":"small",
                "aisle":"Pasta and Rice",
                "name":"personal skillet",
                "original":"small personal skillet",
                "originalName":"personal skillet",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/no.jpg"
            },
            {
                "id":1123,
                "amount":2,
                "unit":"",
                "unitLong":"",
                "unitShort":"",
                "aisle":"Milk, Eggs, Other Dairy",
                "name":"eggs",
                "original":"2-3 lightly beaten eggs",
                "originalName":"lightly beaten eggs",
                "meta":[
                    "lightly beaten"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            },
            {
                "id":10011457,
                "amount":1,
                "unit":"serving",
                "unitLong":"serving",
                "unitShort":"serving",
                "aisle":"Produce",
                "name":"spinach leaves",
                "original":"spinach leaves",
                "originalName":"spinach leaves",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
            }
        ],
        "usedIngredients":[
            {
                "id":10311529,
                "amount":1,
                "unit":"serving",
                "unitLong":"serving",
                "unitShort":"serving",
                "aisle":"Produce",
                "name":"cherry tomatoes",
                "original":"cherry tomatoes, halved",
                "originalName":"cherry tomatoes, halved",
                "meta":[
                    "halved"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/cherry-tomatoes.png"
            }
        ],
        "unusedIngredients":[
            
        ],
        "likes":7
    },
    {
        "id":642303,
        "title":"Eggplant pizzette",
        "image":"https://spoonacular.com/recipeImages/642303-312x231.jpg",
        "imageType":"jpg",
        "usedIngredientCount":1,
        "missedIngredientCount":3,
        "missedIngredients":[
            {
                "id":11209,
                "amount":1,
                "unit":"large",
                "unitLong":"large",
                "unitShort":"large",
                "aisle":"Produce",
                "name":"round eggplant",
                "original":"1 large round eggplant, washed, sliced into rounds",
                "originalName":"round eggplant, washed, sliced into rounds",
                "meta":[
                    "washed",
                    "sliced into rounds"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/eggplant.png"
            },
            {
                "id":1040,
                "amount":100,
                "unit":"g",
                "unitLong":"grams",
                "unitShort":"g",
                "aisle":"Cheese",
                "name":"swiss cheese",
                "original":"100g Swiss cheese, coarsely grated",
                "originalName":"Swiss cheese, coarsely grated",
                "meta":[
                    "grated"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/Swiss-cheese.jpg"
            },
            {
                "id":2044,
                "amount":3,
                "unit":"servings",
                "unitLong":"servings",
                "unitShort":"servings",
                "aisle":"Produce",
                "name":"basil and oregano leaves",
                "original":"Basil and oregano leaves, fresh or dried",
                "originalName":"Basil and oregano leaves, fresh or dried",
                "meta":[
                    "fresh"
                ],
                "extendedName":"fresh basil and oregano leaves",
                "image":"https://spoonacular.com/cdn/ingredients_100x100/fresh-basil.jpg"
            }
        ],
        "usedIngredients":[
            {
                "id":11529,
                "amount":10,
                "unit":"Tbs",
                "unitLong":"Tbs",
                "unitShort":"Tbs",
                "aisle":"Produce",
                "name":"tomatoes",
                "original":"10 Tbs chopped tomatoes",
                "originalName":"chopped tomatoes",
                "meta":[
                    "chopped"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/tomato.png"
            }
        ],
        "unusedIngredients":[
            
        ],
        "likes":5
    },
    {
        "id":663638,
        "title":"Tomato Stack Salad",
        "image":"https://spoonacular.com/recipeImages/663638-312x231.jpg",
        "imageType":"jpg",
        "usedIngredientCount":1,
        "missedIngredientCount":3,
        "missedIngredients":[
            {
                "id":2069,
                "amount":4,
                "unit":"servings",
                "unitLong":"servings",
                "unitShort":"servings",
                "aisle":"Oil, Vinegar, Salad Dressing",
                "name":"balsamic vinegar",
                "original":"Good balsamic vinegar for drizzling",
                "originalName":"Good balsamic vinegar for drizzling",
                "meta":[
                    "good",
                    "for drizzling"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/balsamic-vinegar.jpg"
            },
            {
                "id":10111297,
                "amount":2,
                "unit":"tablespoons",
                "unitLong":"tablespoons",
                "unitShort":"Tbsp",
                "aisle":"Produce",
                "name":"fresh herbs",
                "original":"2 tablespoons fresh chopped herbs (thyme, chive, rosemary...)",
                "originalName":"fresh chopped herbs (thyme, chive, rosemary...)",
                "meta":[
                    "fresh",
                    "chopped",
                    "(thyme, chive, rosemary...)"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/mixed-fresh-herbs.jpg"
            },
            {
                "id":1159,
                "amount":10,
                "unit":"ounces",
                "unitLong":"ounces",
                "unitShort":"oz",
                "aisle":"Cheese",
                "name":"goat cheese",
                "original":"10 ounces soft goat cheese, room temperature",
                "originalName":"soft goat cheese, room temperature",
                "meta":[
                    "soft",
                    "room temperature"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg"
            }
        ],
        "usedIngredients":[
            {
                "id":11529,
                "amount":4,
                "unit":"medium",
                "unitLong":"mediums",
                "unitShort":"medium",
                "aisle":"Produce",
                "name":"tomatoes",
                "original":"4 ripe medium tomatoes",
                "originalName":"ripe medium tomatoes",
                "meta":[
                    "ripe"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/tomato.png"
            }
        ],
        "unusedIngredients":[
            
        ],
        "likes":2
    },
    {
        "id":715870,
        "title":"Salsa",
        "image":"https://spoonacular.com/recipeImages/715870-312x231.jpg",
        "imageType":"jpg",
        "usedIngredientCount":1,
        "missedIngredientCount":3,
        "missedIngredients":[
            {
                "id":15012,
                "amount":1,
                "unit":"serving",
                "unitLong":"serving",
                "unitShort":"serving",
                "aisle":"Gourmet",
                "name":"texas cowboy caviar",
                "original":"Texas Cowboy Caviar",
                "originalName":"Texas Cowboy Caviar",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/caviar.png"
            },
            {
                "id":6164,
                "amount":1,
                "unit":"serving",
                "unitLong":"serving",
                "unitShort":"serving",
                "aisle":"Pasta and Rice;Ethnic Foods",
                "name":"cranberry avocado salsa",
                "original":"Cranberry Avocado Salsa",
                "originalName":"Cranberry Avocado Salsa",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/salsa.png"
            },
            {
                "id":27028,
                "amount":1,
                "unit":"serving",
                "unitLong":"serving",
                "unitShort":"serving",
                "aisle":"Pasta and Rice;Ethnic Foods",
                "name":"roasted tomatillo salsa",
                "original":"Fresh Roasted Tomatillo Salsa",
                "originalName":"Fresh Roasted Tomatillo Salsa",
                "meta":[
                    "fresh"
                ],
                "extendedName":"fresh roasted tomatillo salsa",
                "image":"https://spoonacular.com/cdn/ingredients_100x100/salsa-verde.png"
            }
        ],
        "usedIngredients":[
            {
                "id":10311529,
                "amount":1,
                "unit":"serving",
                "unitLong":"serving",
                "unitShort":"serving",
                "aisle":"Produce",
                "name":"cherry tomato avocado salsa",
                "original":"Cherry Tomato Avocado Salsa",
                "originalName":"Cherry Tomato Avocado Salsa",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/cherry-tomatoes.png"
            }
        ],
        "unusedIngredients":[
            
        ],
        "likes":1
    },
    {
        "id":648368,
        "title":"Jalapeno Queso With Goat Cheese",
        "image":"https://spoonacular.com/recipeImages/648368-312x231.jpg",
        "imageType":"jpg",
        "usedIngredientCount":1,
        "missedIngredientCount":3,
        "missedIngredients":[
            {
                "id":1159,
                "amount":5.3,
                "unit":"oz",
                "unitLong":"ounces",
                "unitShort":"oz",
                "aisle":"Cheese",
                "name":"goat cheese",
                "original":"1 package (5.3 oz) Fresh Goat Cheese, such as Chavrie",
                "originalName":"package Fresh Goat Cheese, such as Chavrie",
                "meta":[
                    "fresh",
                    " such as chavrie"
                ],
                "extendedName":"fresh goat cheese",
                "image":"https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg"
            },
            {
                "id":11979,
                "amount":1,
                "unit":"",
                "unitLong":"",
                "unitShort":"",
                "aisle":"Canned and Jarred;Produce;Ethnic Foods",
                "name":"ea. jalapeno pepper",
                "original":"1 ea. jalapeno pepper diced",
                "originalName":"ea. jalapeno pepper diced",
                "meta":[
                    "diced"
                ],
                "extendedName":"diced ea. jalapeno pepper",
                "image":"https://spoonacular.com/cdn/ingredients_100x100/jalapeno-pepper.png"
            },
            {
                "id":6168,
                "amount":2,
                "unit":"teaspoons",
                "unitLong":"teaspoons",
                "unitShort":"tsp",
                "aisle":"Condiments",
                "name":"hot sauce",
                "original":"2 teaspoons hot sauce",
                "originalName":"hot sauce",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/hot-sauce-or-tabasco.png"
            }
        ],
        "usedIngredients":[
            {
                "id":10011693,
                "amount":8,
                "unit":"oz",
                "unitLong":"ounces",
                "unitShort":"oz",
                "aisle":"Canned and Jarred",
                "name":"canned tomatoes",
                "original":"8 oz. can diced tomatoes, drained",
                "originalName":"diced tomatoes, drained",
                "meta":[
                    "diced",
                    "drained",
                    "canned"
                ],
                "extendedName":"diced canned tomatoes",
                "image":"https://spoonacular.com/cdn/ingredients_100x100/tomatoes-canned.png"
            }
        ],
        "unusedIngredients":[
            
        ],
        "likes":1
    },
    {
        "id":644953,
        "title":"Goat Cheese Pesto Pizza",
        "image":"https://spoonacular.com/recipeImages/644953-312x231.jpg",
        "imageType":"jpg",
        "usedIngredientCount":1,
        "missedIngredientCount":3,
        "missedIngredients":[
            {
                "id":93770,
                "amount":1,
                "unit":"",
                "unitLong":"",
                "unitShort":"",
                "aisle":"Pasta and Rice;Refrigerated",
                "name":"pizza shell",
                "original":"1 prepared pizza shell, 14 inches",
                "originalName":"prepared pizza shell, 14 inches",
                "meta":[
                    "prepared"
                ],
                "extendedName":"cooked pizza shell",
                "image":"https://spoonacular.com/cdn/ingredients_100x100/pizza-dough.jpg"
            },
            {
                "id":93698,
                "amount":1,
                "unit":"cup",
                "unitLong":"cup",
                "unitShort":"cup",
                "aisle":"Pasta and Rice",
                "name":"pesto",
                "original":"1 cup pesto",
                "originalName":"pesto",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/basil-pesto.png"
            },
            {
                "id":1159,
                "amount":1,
                "unit":"package",
                "unitLong":"package",
                "unitShort":"pkg",
                "aisle":"Cheese",
                "name":"goat cheese",
                "original":"1 package of crumbled goat cheese, Alouette Provencal variety",
                "originalName":"crumbled goat cheese, Alouette Provencal variety",
                "meta":[
                    "crumbled"
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg"
            }
        ],
        "usedIngredients":[
            {
                "id":11529,
                "amount":1,
                "unit":"cup",
                "unitLong":"cup",
                "unitShort":"cup",
                "aisle":"Produce",
                "name":"tomatoes",
                "original":"1 cup diced Tomatoes",
                "originalName":"diced Tomatoes",
                "meta":[
                    "diced"
                ],
                "extendedName":"diced tomatoes",
                "image":"https://spoonacular.com/cdn/ingredients_100x100/tomato.png"
            }
        ],
        "unusedIngredients":[
            
        ],
        "likes":1
    },
    {
        "id":1674265,
        "title":"Easy Tomato Soup",
        "image":"https://spoonacular.com/recipeImages/1674265-312x231.jpg",
        "imageType":"jpg",
        "usedIngredientCount":1,
        "missedIngredientCount":3,
        "missedIngredients":[
            {
                "id":1001,
                "amount":4,
                "unit":"tablespoons",
                "unitLong":"tablespoons",
                "unitShort":"Tbsp",
                "aisle":"Milk, Eggs, Other Dairy",
                "name":"butter",
                "original":"4 tablespoons butter",
                "originalName":"butter",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
            },
            {
                "id":11282,
                "amount":1,
                "unit":"",
                "unitLong":"",
                "unitShort":"",
                "aisle":"Produce",
                "name":"onion",
                "original":"1 onion",
                "originalName":"onion",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
            },
            {
                "id":6615,
                "amount":1.5,
                "unit":"cups",
                "unitLong":"cups",
                "unitShort":"cup",
                "aisle":"Canned and Jarred",
                "name":"vegetable broth",
                "original":"1.5 cups vegetable broth",
                "originalName":"vegetable broth",
                "meta":[
                    
                ],
                "image":"https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png"
            }
        ],
        "usedIngredients":[
            {
                "id":10011531,
                "amount":28,
                "unit":"ounces",
                "unitLong":"ounces",
                "unitShort":"oz",
                "aisle":"Canned and Jarred",
                "name":"tomatoes",
                "original":"28 ounces canned whole tomatoes",
                "originalName":"canned whole tomatoes",
                "meta":[
                    "whole",
                    "canned"
                ],
                "extendedName":"canned whole tomatoes",
                "image":"https://spoonacular.com/cdn/ingredients_100x100/tomatoes-canned.png"
            }
        ],
        "unusedIngredients":[
            
        ],
        "likes":0
    }
]

app.use(cors());





app.post('/api', jsonParser,async (req, res) => {
    if (!req.body) return
    let data = {}
    let searchMethod = req.body.searchType
    const request = parseRequestByType(req.body);
    const url = parseRequestAsUrlForApiCall(request);
    data = await getRequestToApi(url,searchMethod)
    console.log(url);
    res.json(data)
})



const getRequestToApi = (url, searchMethod) => {
    console.log(searchMethod);
    let result;
    const promise = axios(url)
    if (searchMethod == 'ingredients') {
        result = promise.then((res) => res.data)
        .catch((err) => { console.error(err) })
    }
    if (searchMethod == 'recipe') {
        result = promise.then((res) => res.data.results)
        .catch((err) => { console.error(err) })
        
    }
    return result
}


const parseRequestAsUrlForApiCall = (request) => {
    let url = "https://api.spoonacular.com/recipes/"
    let searchMethod = "";
    if (request.searchType == "ingredients")
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
    newReq.searchText = request.searchText.split(',').map((el) => {
       return el.trim().replace(' ','%')
    }
    )
    return newReq;

}



app.listen(PORT,()=>(console.log('Listening on port: ' + PORT))) 