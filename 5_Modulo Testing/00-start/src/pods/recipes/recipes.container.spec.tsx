import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { RecipesPodState, recipesPodReducer } from 'pods/recipes';
import { RecipesComponent } from './recipes.component';

const recipes = [
    { id: 'recipe 1', name: 'recipe Tikka Masala', ingredients: ['chicken', 'garam masala'] },
    { id: '2', name: 'MAc and Cheese', ingredients: ['pasta', 'cheese'] },
];

const renderWithRedux = (
    component,
    { initialState = {recipes}, reducer, store = createStore(reducer, initialState) }
) => ({
    ...render(<Provider store={store}>{component}</Provider>),
    store,
});

describe('recipe.container specs', () => {

    const handleOnSearch = (value) => value;

    it('should render empty table when feeded initial state', () => {
        // Arrange
        const initialState: RecipesPodState = {
            recipes: [],
        };

        // Act
        const { queryAllByTestId } = renderWithRedux(<RecipesComponent recipes={[]} onSearch={handleOnSearch} />, {
            initialState,
            reducer: recipesPodReducer,
        });

        const recipesElements = queryAllByTestId('recipe');

        // Assert
        expect(recipesElements).toHaveLength(0);
    })

    it('should render two items when feeded initial state with two item', () => {
        // Arrange
        const initialState: RecipesPodState = {
            recipes,
        };

        // Act
        const { queryAllByTestId } = renderWithRedux(<RecipesComponent recipes={recipes} onSearch={handleOnSearch} />, {
            initialState,
            reducer: recipesPodReducer,
        });

        const memberElements = queryAllByTestId('recipe 1');

        // Assert
        expect(memberElements).toHaveLength(2);
    });

});