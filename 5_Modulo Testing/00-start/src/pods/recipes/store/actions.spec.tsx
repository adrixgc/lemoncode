import { getRecipesRequest, updateRecipes } from './actions';
import { actionTypes } from './action-types';

describe('actions specs', () => {

    describe('action getRecipesRequest()', () => {
        it('should return GET_RECIPES_REQUEST', () => {
            //Act
            const result = getRecipesRequest();
            //Assert
            expect(result.type).toBe(actionTypes.GET_RECIPES_REQUEST);
        })
    })

    describe('action updateRecipes()', () => {
        it('should return UPDATE_RECIPES and modified payload', () => {
            //Arrange
            const recipes = [
                { id: '1', name: 'Tikka Masala', ingredients: ['chicken', 'garam masala', 'curry'] }
            ]
            //Act
            const result = updateRecipes(recipes);
            //Assert
            expect(result.type).toBe(actionTypes.UPDATE_RECIPES);
            expect(result.payload).toBe(recipes);
        })
    })
})