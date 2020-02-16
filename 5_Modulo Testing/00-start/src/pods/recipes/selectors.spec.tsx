import * as mappers from 'common/mappers';
import * as recipesMappers from './recipes.mappers';
import { State } from "core/store/root-reducer"
import { getRecipesVMSelector } from "./selectors"
import { Recipe } from './recipes.view-model';

describe('selectors specs', () => {

    describe('getRecipesVMSelector', () => {

        it('should return the expected mapped recipes list', () => {
            //Arrange
            const state: State = {
                recipesPod: {
                    recipes: [
                        { id: '1', name: 'Tikka Masala', ingredients: ['chicken', 'garam masala'] },
                    ],
                },
                router: null,
            }

            const recipes: Recipe[] = [
                { id: '1', name: 'Tikka Masala', ingredients: ['chicken', 'garam masala'] },
            ];

            const mapToCollectionStub = jest.spyOn(mappers, 'mapToCollection').mockReturnValue(recipes);
            const mapRecipeFromApiToVmStub = jest.spyOn(recipesMappers, 'mapRecipeFromApiToVm');
            //Act
            const result = getRecipesVMSelector(state);
            //Assert
            expect(mapToCollectionStub).toHaveBeenCalledWith(state.recipesPod.recipes, mapRecipeFromApiToVmStub);
            expect(result).toEqual(recipes);
        })
    })
})