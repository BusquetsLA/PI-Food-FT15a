const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const router = Router();
// GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá: https://spoonacular.com/food-api/docs#Diets

const dietTypes = [
    "gluten free",
    "ketogenic",
    "vegetarian",
    "lacto ovo vegetarian", // asi te llega de la api
    "vegan",
    "pescatarian",
    "paleolithic",
    "primal",
    "whole 30",
    "fodmap friendly", // esta tmb
]; // hardcodeo mal pero bueno, la otra forma es hacer 998 ciclos for y un flat para meter todos los diet types en un arreglo
const setDiet = async () => {
    let filteredDiets = dietTypes.map(diet => diet = {name: diet});
    let diets = await Diet.bulkCreate(filteredDiets);
    return diets;
};
router.get('/', async (req, res) => { // la forma de hacerlo: trayendo todas las cochinas recetas y sacando el diets[] hasta que se consigan las 9 recetas disp, y despues se chanta arriba vegetarian xq no aparece
    let allDiets = await Diet.findAll();
    if (allDiets.length > 0) {
        return res.status(200).send(allDiets);
    } let diets = await setDiet();
    return res.status(200).send(diets);
});

module.exports = router; // anda