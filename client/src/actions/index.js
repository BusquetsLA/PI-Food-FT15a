import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES',
GET_BY_NAME = 'GET_BY_NAME',
GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL',
CLEAR_RECIPE_DETAIL = 'CLEAR_RECIPE_DETAIL',
ORDER_RECIPES = 'ORDER_RECIPES',
GET_DIETS = 'GET_DIETS',
FILTER_DIET = 'FILTER_DIET'/*,
CREATE_RECIPE = 'CREATE_RECIPE'*/;

// http://localhost:3001/recipes
// http://localhost:3001/recipes?name=salmon
// http://localhost:3001/recipes/644387
// http://localhost:3001/recipe
// http://localhost:3001/types

// ------------- //
export const getRecipes = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/recipes`);
            dispatch({ type: GET_RECIPES, payload: res.data });
        } catch (err) {
            console.log(err);
        }
    }
};
export const getRecipeByName = (name) => async (dispatch) => { // buscador --> salmon
    try {
        const res = await axios.get(`http://localhost:3001/recipes?name=${name}`);
        dispatch({ type: GET_BY_NAME, payload: res.data });
    } catch (err) {
        console.log(err)
        return dispatch({type: GET_BY_NAME, payload: []});
    }
};
export const getRecipeDetail = (id) => async (dispatch) => { // click recipe --> id
    try {
        // console.log('esto es id ' + id)
        const res = await axios.get(`http://localhost:3001/recipes/${id}`);
        dispatch({ type: GET_RECIPE_DETAIL, payload: res.data });
    } catch (err) {
        console.log(err)
        dispatch({type: GET_RECIPE_DETAIL, payload: []});
    }
};
export const clearRecipeDetail = () => (dispatch) => {
    dispatch({type:CLEAR_RECIPE_DETAIL, payload:[]}); // retorna el payload vacio
};
// ------------- //
export const orderRecipes = (type) => (dispatch) => {
    dispatch({type:ORDER_RECIPES, payload: type});
};
// ------------- //
export const getDiets = () => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3001/types`);
        dispatch({ type: GET_DIETS, payload: res.data });
    } catch (err) {
        console.log(err);
        dispatch({type: GET_DIETS, payload: []});
    }
};
// ------------- //
export const filterByDiet = (type) => (dispatch) => {
    dispatch({type: FILTER_DIET, payload: type});
};
// ------------- //
/*
export const createRecipe = (recipe) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:3001/recipe', recipe);
        return dispatch({type: CREATE_RECIPE , payload: res.data});
    } catch (err) {
        console.log(err);
    }
};
*/