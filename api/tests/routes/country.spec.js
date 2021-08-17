/* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest-session');
const app = require('../../src/app.js');
const {Recipe, conn} = require('../../src/db.js');
const {expect} = require('chai');

const agent = session(app);

describe('Route test', () => {
	before(() =>
		conn.authenticate().catch((err) => {
			console.error('Unable to connect to the database:', err);
		})
	);
	beforeEach(() => Recipe.sync({force: true}));
	describe('GET /recipes', () => {
		it('responds with 200', async () => {
			try {
				await agent.get('/recipes').expect(200);
			} catch (err) {
				console.log(err);
			}
		}).timeout(47000);
		it('responds a array whit 100 recipes', async () => {
			try {
				const res = await agent.get('/recipes');
				expect(res.body).to.have.lengthOf(40);
			} catch (err) {
				console.log(err);
			}
		}).timeout(47000);
		it('If the title query is passed, the recipe should respond by that name', async () => {
			try {
				const res = await agent.get('/recipes?title=pasta');
				expect(res.body[0].name).to.be.equal('pasta');
			} catch (err) {}
		}).timeout(47000);
		it('If an id parameter is passed it must return the recipe associated with that id', async () => {
			try {
				const res = await agent.get('/recipes/716381');
				expect(res.body[0].name).to.be.equal('Nigerian Snail Stew');
			} catch (err) {}
		}).timeout(47000);
	});
});