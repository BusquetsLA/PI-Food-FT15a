import React from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import { getRecipeDetail, clearRecipeDetail } from '../../actions/index';

export const Detail = (props) => {

    const {id} = useParams();
    // console.log('esto es params(id) ', params)
    const recipeDetails = useSelector(state => state.recipeDetails);
    const array = recipeDetails.analyzedInstructions;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeDetail(id));
    }, [dispatch, id]);

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
                        {recipeDetails.Diets
                            ? <ul>{recipeDetails.Diets && recipeDetails.Diets.map((el, i) =>(<li key={i} >{el.name}</li>))}</ul>
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
                    {/* {console.log(array)} */}
                    {array && array[0].steps.map((el, i) =>( <li key={i} >{el.step}</li>))} 
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
/*
"analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Heat the olive oil in a large pot over medium heat.",
          "ingredients": [
            {
              "id": 4053,
              "name": "olive oil",
              "localizedName": "olive oil",
              "image": "olive-oil.jpg"
            }
          ],
          "equipment": [
            {
              "id": 404752,
              "name": "pot",
              "localizedName": "pot",
              "image": "stock-pot.jpg"
            }
          ]
        },
        {
          "number": 2,
          "step": "Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.",
          "ingredients": [
            {
              "id": 11233,
              "name": "kale",
              "localizedName": "kale",
              "image": "kale.jpg"
            }
          ],
          "equipment": []
        },
        {
          "number": 3,
          "step": "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.",
          "ingredients": [
            {
              "id": 2053,
              "name": "vinegar",
              "localizedName": "vinegar",
              "image": "vinegar-(white).jpg"
            },
            {
              "id": 11215,
              "name": "garlic",
              "localizedName": "garlic",
              "image": "garlic.png"
            }
          ],
          "equipment": []
        },
        {
          "number": 4,
          "step": "Serve hot.",
          "ingredients": [],
          "equipment": []
        }
      ]
    }
]*/
