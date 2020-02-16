import { Recipe } from './api/recipes.api-model';
import * as viewModel from './recipes.view-model';
import { mapRecipeFromApiToVm } from './recipes.mappers';

describe('mapper specs', () => {

    it('should return empty recipe for undefined input', () => {

        // Arrange
        const recipe: Recipe = undefined;
        const emptyRecipe = {
            id: '',
            name: '',
            ingredients: [],
        }

        // Act
        const result: viewModel.Recipe = mapRecipeFromApiToVm(recipe);

        // Assert
        expect(result).not.toBeNull();
        expect(result).toEqual(emptyRecipe);
    });

    it('should return same recipe', () => {

        // Arrange
        const mock = {
            id: '1',
            name: 'Chicken Tikka Masala',
            ingredients: ['chicken', 'onion', 'rice', 'masala sauce'],
        }
        const recipe: Recipe = mock;

        // Act
        const result: viewModel.Recipe = mapRecipeFromApiToVm(recipe);

        // Assert
        expect(result).not.toBeNull();
        expect(result).toEqual(mock);
    });
});