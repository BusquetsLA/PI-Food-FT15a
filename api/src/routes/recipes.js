const { Router } = require('express');
const axios = require('axios');
const { Recipe, Diet } = require('../db');
const { URL_ALL, URL_BY_ID, URL_INFO } = require('../utils/constants');
const { API_KEY } = process.env;
const router = Router();

// ---------------- //
const getAllApi = async () => {
    let callResponse = await axios.get(`${URL_ALL}?apiKey=${API_KEY}${URL_INFO}&number=100`); // el max de 100 recetas
    let allApiRecipes = callResponse.data.results.map( recipe => {
        let diets = recipe.diets.map((diet) => (diet = {name: diet}));
        return {
            id: recipe.id,
            title: recipe.title,
            spoonacularScore: recipe.spoonacularScore,
            // healthScore: recipe.healthScore,
            // analyzedInstructions: recipe.analyzedInstructions,
            image: recipe.image,
            Diets: diets,
        };
    });
    return allApiRecipes; // anda
};
const getAllDb = async () => {
    let allDbRecipes = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
        },
    });
    return allDbRecipes;
};
const getAllRecipes = async () => {
    let allApiRecipes = await getAllApi();
    let allDbRecipes = await getAllDb();
    let allRecipes = [...allDbRecipes, ...allApiRecipes];
    return allRecipes;
};
const getRecipeById = async (id) => {
    if (id.includes('-')) { // uuidv4
        try {
            const recipeFound = await Recipe.findOne({
                where: {id},
                include: {
                    model: Diet,
                    attributes: ['name'],
                } // buscamos en db
            });
            return recipeFound;
        } catch (error) {
            return error;
        }
    } else {
        try {
            let callResponse = await axios.get(`${URL_BY_ID}${id}/information?apiKey=${API_KEY}`);
            let recipe = callResponse.data;
            let dietTypes = recipe.diets.map((diet) => (diet = {name: diet})); // le carga los tipos de dieta en un array
            let recipeFound = {
                id: recipe.id,
                title: recipe.title,
                summary: recipe.summary,
                spoonacularScore: recipe.spoonacularScore,
                healthScore: recipe.healthScore,
                analyzedInstructions: recipe.analyzedInstructions,
                image: recipe.image,
                Diets: dietTypes,
            };
            return recipeFound;
        } catch (error) {
            return error;
        }
    }
}; // anda
// ---------------- //
// GET /recipes?title="...":
router.get('/', async (req, res) => {
    const {title} = req.query;
    let allRecipes = await getAllRecipes();
    if (title) {
        let recipeFound = allRecipes.filter(e => e.title.toLowerCase().includes(title.toLowerCase()));
        let recipesList = recipeFound.slice(0, 9);
        if (recipesList.length > 0) { // Obtener un listado de las recetas que contengan la palabra ingresada como query parameter SON 9
            return res.status(200).send(recipesList);
        } else { // Si no existe ninguna receta mostrar un mensaje adecuado
            return res.status(400).send(`Recipes containing ${title} not found.`);
        }
    } else {
        if (allRecipes.length > 0) {
            return res.status(200).send(allRecipes);
        } else {
            res.status(400).send(`Recipes not found.`);
        }
    }
}); // anda
// GET /recipes/{idReceta}:
router.get('/:id', async (req, res) => {
    // Obtener el detalle de una receta en particular
    // Debe traer solo los datos pedidos en la ruta de detalle de receta
    // Incluir los tipos de dieta asociados
    const {id} = req.params;
    if (id) {
        let recipeFound = await getRecipeById(id);
        if (recipeFound) return res.status(200).send(recipeFound);
        else return res.status(400).send(`Recipes not found.`);
    }
}); // ya anda

module.exports = router;