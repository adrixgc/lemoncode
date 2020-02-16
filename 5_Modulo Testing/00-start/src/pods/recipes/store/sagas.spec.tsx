import { watchRecipesPodSagas, getRecipesRequestSaga } from './sagas'
import { actionTypes } from './action-types';
import { BaseAction } from 'common/types';
import { Recipe, getRecipes } from '../api';
import { call, put, takeLatest } from 'redux-saga/effects';

describe('specs sagas', () => {

    describe('watchRecipesPodSagas', () => {
        it('should wait for expected action type and execute the expected worker', () => {
            // Arrange
            const saga = watchRecipesPodSagas();
            // Act
            const result = saga.next();
            // Assert
            expect(result.value).toEqual(takeLatest(actionTypes.GET_RECIPES_REQUEST, getRecipesRequestSaga))
        });
    })

    describe('getRecipesRequestSaga', () => {

        const recipes = [
            { id: '1', name: 'Tikka Masala', ingredients: ['chicken', 'garam masala'] },
            { id: '2', name: 'MAc and Cheese', ingredients: ['pasta', 'cheese'] },
        ];

        it('should put updateRecipes with given recipes when API call is succesful', () => {
            // Arrange
            const updateRecipes: BaseAction = {
                type: actionTypes.UPDATE_RECIPES,
                payload: recipes,
            };
            const saga = getRecipesRequestSaga();
            //Act and Assert
            expect(saga.next().value).toEqual(call(getRecipes));
            expect(saga.next(recipes).value).toEqual(put(updateRecipes));
        });

    });

});