import {React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Recipedetail = () => {
    
    const params = useParams();
    const [recipeId, setRecipeId] = useState(params.id);
    const [recipeData, setRecipeData] = useState([]);

    const getSingleRecipe = (id) => {
        axios.get("http://localhost:5000/recipe", {params: {id:id}})
            .then((res) => {
            console.log(res);
        })
    }

    useEffect(() => {
        console.log('dz')
        getSingleRecipe(recipeId)
    }, []);
    return (
        <div>
            <p>{recipeId}</p>
        </div>
    );
}

export default Recipedetail;
