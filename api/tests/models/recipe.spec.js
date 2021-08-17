const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Creation', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('title', () => {
      it('should throw an error if title is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid title')))
          .catch(() => done());
      });
      it('should work when it is a valid title', () => {
        Recipe.create({
          title: 'Milanesa a la napolitana',
          summary: 'mmmmmm milanga con salsa de tomate y queso',
          spoonacularScore: 100,
          healthScore: 50,
          analyzedInstructions: 'le pones salsa y ARRIBA queso a la milanesa antes de cocinarla',
        });
      });
      it('should receive an object for recipe', () => {
        let recipe = {
          title: 'Milanesa a la napolitana',
          summary: 'mmmmmm milanga con salsa de tomate y queso',
          spoonacularScore: 100,
          healthScore: 90,
          analyzedInstructions: 'le pones salsa y ARRIBA queso a la milanesa antes de cocinarla'
        };
        expect(recipe).to.be.a('object');
      });
      it('should receive a number in both score properties', () => {
        let recipe = {
          title: 'Milanesa a la napolitana',
          summary: 'mmmmmm milanga con salsa de tomate y queso',
          spoonacularScore: 'mmmmm dijo la muda',
          healthScore: 'solo se vive una vez :):)',
          analyzedInstructions: 'le pones salsa y ARRIBA queso a la milanesa antes de cocinarla'
        };
        expect(recipe).to.be.a('object');
        expect(typeof recipe.spoonacularScore === 'number').to.equal(false);
        expect(typeof recipe.healthScore === 'number').to.equal(false);
      });
    });
  });
});
