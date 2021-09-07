import axios from "axios";

export const GET_RECIPES = "GET_RECIPES",
  GET_BY_NAME = "GET_BY_NAME",
  GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL",
  CLEAR_RECIPE_DETAIL = "CLEAR_RECIPE_DETAIL",
  ORDER_RECIPES = "ORDER_RECIPES",
  GET_DIETS = "GET_DIETS",
  FILTER_DIET = "FILTER_DIET",
  CREATE_RECIPE = "CREATE_RECIPE";

// http://localhost:3001/recipes
// http://localhost:3001/recipes?name=salmon
// http://localhost:3001/recipes/644387
// http://localhost:3001/recipe
// http://localhost:3001/types

// ------------- //
export const getRecipes = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/recipes`);
      return dispatch({ type: GET_RECIPES, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
export const getRecipeByName = (name) => {
  return async (dispatch) => {
    // buscador --> salmon
    try {
      const { data } = await axios.get(`http://localhost:3001/recipes?name=${name}`);
      return dispatch({ type: GET_BY_NAME, payload: data });
    } catch (err) {
      console.log(err);
      // return dispatch({ type: GET_BY_NAME, payload: [] });
    }
  };
};
export const getRecipeDetail = (id) => {
  return async (dispatch) => {// click recipe --> id
    try {
      // console.log('esto es id ' + id)
      const { data } = await axios.get(`http://localhost:3001/recipes/${id}`);
      return dispatch({ type: GET_RECIPE_DETAIL, payload: data });
    } catch (err) {
      console.log(err);
      // return dispatch({ type: GET_RECIPE_DETAIL, payload: [] });
    }
  };
};
/*export const clearRecipeDetail = () => (dispatch) => {
  return dispatch({ type: CLEAR_RECIPE_DETAIL, payload: [] }); // retorna el payload vacio
};*/
export const createRecipe = (recipe) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3001/recipe", recipe);
      return dispatch({ type: CREATE_RECIPE });
    } catch (err) {
      console.log(err);
    }
  }
};
// ------------- //
export const orderRecipes = (type) => (dispatch) => {
  return dispatch({ type: ORDER_RECIPES, payload: type }); // type es el tipo de orden jeje
};
// ------------- //
export const getDiets = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/types`);
      return dispatch({ type: GET_DIETS, payload: data });
    } catch (err) {
      console.log(err);
      // return dispatch({ type: GET_DIETS, payload: [] });
    }
  };
};
// ------------- //
export const filterByDiet = (type) => (dispatch) => {
  dispatch({ type: FILTER_DIET, payload: type });
};
// ------------- //
