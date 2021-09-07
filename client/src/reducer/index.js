import {
  GET_RECIPES,
  GET_BY_NAME,
  GET_RECIPE_DETAIL,
  CLEAR_RECIPE_DETAIL,
  ORDER_RECIPES,
  GET_DIETS,
  FILTER_DIET,
  CREATE_RECIPE,
} from "../actions/index";
import { orderByParam, filterByDiet } from "../controllers/index";

const initialState = {
  recipes: [], // todos los recipes cargados de getRecipes
  diets: [],
  recipeDetails: [],
  filteredRecipes: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    // RECIPES
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        filteredRecipes: action.payload
      };
    case GET_BY_NAME:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetails: action.payload,
      };
    case CLEAR_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetails: action.payload,
      };
    // ORDER
    case ORDER_RECIPES:
      return {
        ...state,
        recipes: orderByParam(action.payload, state.filteredRecipes),
      };
    // DIETS
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case FILTER_DIET:
      return {
        ...state,
        recipes: filterByDiet(action.payload, state.filteredRecipes),
      };
    case CREATE_RECIPE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default rootReducer;
