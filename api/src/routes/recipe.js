const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const route = Router();
// POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos
route.post('/', async (req, res) => {
    const { title, summary, spoonacularScore, healthScore, annalyzedInstructions, image, diets } = req.body; // form data or super long JSON data
    if(!title || !summary) return res.status(400).send('notNull Violation: Necessary parameters are required.');
    const createdRecipe = await Recipe.create({
        title: title,
        summary: summary,
        spoonacularScore: spoonacularScore,
        healthScore: healthScore,
        annalyzedInstructions: annalyzedInstructions,
        image: image,
    });
    await createdRecipe.setDiets(diets);
    return res.status(200).send(createdRecipe);
});

module.exports = router; // deberia estar terminado