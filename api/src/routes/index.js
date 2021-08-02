const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const types = require('./types');
const recipe = require('./recipe');
const recipes = require('./recipes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/types', types);
router.use('/recipe', recipe);
router.use('/recipes', recipes);

module.exports = router;
