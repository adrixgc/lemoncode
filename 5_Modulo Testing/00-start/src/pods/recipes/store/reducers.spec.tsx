import { BaseAction } from "common/types"
import { recipesPodReducer, RecipesPodState } from "./reducers"
import { actionTypes } from './action-types';
import { Recipe } from '../recipes.view-model';

describe('reducers specs', () => {

    it('should return initial state when setting undefined as new state', () => {
        //Arrange
        const action: BaseAction = {
            type: 'undefined',
            payload: undefined,
        }
        //Act
        const result = recipesPodReducer(undefined, action);
        //Assert
        expect(result.recipes).toEqual([]);
    })

    it('should UPDATE_RECIPES', () => {
        //Arrange
        const state: RecipesPodState = {
            recipes: [],
        }
        const recipes: Recipe[] = [{ id: '2', name: 'MAc and Cheese', ingredients: ['pasta', 'cheese'] }]
        const action: BaseAction = {
            type: actionTypes.UPDATE_RECIPES,
            payload: recipes,
        }
        //Act
        const result = recipesPodReducer(state, action);
        //Assert
        expect(result.recipes).toEqual(recipes);
    })

})