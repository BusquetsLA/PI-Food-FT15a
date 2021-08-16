import React from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import { getRecipeDetail, clearRecipeDetail } from '../../actions/index';

export const Detail = () => {

    const {recipeId} = useParams();
    const recipeDetails = useSelector(state => state.recipeDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeDetail(recipeId));
    }, [dispatch, recipeId]);

    useEffect(()=>{
        return dispatch(clearRecipeDetail());
    },[]);

    return (
        <div>
            <h1> YO SOY DETAIL </h1>
            <h2>{recipeDetails.title}</h2>
            <div>
                {recipeDetails.image? <img src={recipeDetails.image} className='image' alt='recipe picture' />: null}
            </div>
            <div>
                <h3> Summary: </h3>
                <p>{recipeDetails.summary}</p>
            </div>
            <div>
                <div>
                    <h4> Diets: </h4>
                        {recipeDetails.diets
                            ? <ul>{recipeDetails.diets && recipeDetails.diets.map((el, i) =>(<li key={i} >{el.name}</li>))}</ul>
                            : null}
                </div>
                {/* <div>
                    <h4>Categoria: </h4>
                    {recipeDetails.dishTypes
                        ? <ul>{recipeDetails.dishTypes && recipeDetails.dishTypes.map((el, i) =>( <li key={i}>{el}</li>))}</ul>
                        : null} 
                </div> */}
                <div>
                    <h4> Health Score: {recipeDetails.healthScore}</h4>
                </div>
                <div>
                    <h4> Spoonacular Score: {recipeDetails.spoonacularScore}</h4>
                </div>
                <div>
                    <h4> Instructions: </h4>
                        {recipeDetails.analyzedInstructions && recipeDetails.analyzedInstructions.map((el, i) =>( <li key={i} >{el.step.steps}</li>))}
                </div>
            </div>
            <div>
                <Link to='/home'>
                    <button>Back</button> 
                </Link>
            </div>
        </div>
    );
};
export default Detail;