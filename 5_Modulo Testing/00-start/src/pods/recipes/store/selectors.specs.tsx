import { State } from "core/store/root-reducer"
import { getRecipesPodState } from "./selectors"

describe('selectors specs', () => {

    describe('getRecicipesPodState', () => {
        it('should return the expected pod', () => {
            //Arrange
            const state: State = {
                recipesPod: { recipes: [] },
                router: null,
            }
            //Act
            const result = getRecipesPodState(state);
            //Assert
            expect(result).toEqual(state.recipesPod);
        })
    })
})