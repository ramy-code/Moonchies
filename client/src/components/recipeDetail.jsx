import {React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Recipedetail = () => {
    
    const params = useParams();
    const [recipeId, setRecipeId] = useState(params.id);
    const [recipeData, setRecipeData] = useState([]);

    const getSingleRecipe = async (id) => {
        console.log('axios call front');
        return await axios.get("http://localhost:5000/recipe", {params: {id:id}})
            .then((res) => {
            setRecipeData({...res.data})
        })
    }
    console.log('TNEKT');
    useEffect(() => {
        console.log('useEffect lol');
        console.log(recipeData)
        getSingleRecipe(recipeId)
    }, []);
    return (
        <div>
            <p>{recipeId}</p>
        </div>
    );
}

export default Recipedetail;
 