import { renderHook, act } from '@testing-library/react-hooks';
import { useRecipes } from './useRecipes';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('useRecipes specs', () => {
    it('should return an array of recipes with initial data', () => {

        //Arrange
        const recipes = [
            { id: '1', name: 'Tikka Masala', ingredients: ['chicken', 'garam masala'] },
            { id: '2', name: 'MAc and Cheese', ingredients: ['pasta', 'cheese'] },
        ];
        //Act
        const { result } = renderHook(() => useRecipes(recipes));

        //Assert
        expect(result.current.filteredRecipes).toEqual(recipes);
        expect(result.current.handleFilter).toEqual(expect.any(Function));
    });

    it('should filter recipes by filter', () => {
        //Arrange
        const recipes = [
            { id: '1', name: 'Tikka Masala', ingredients: ['chicken', 'garam masala'] },
            { id: '2', name: 'MAc and Cheese', ingredients: ['pasta', 'cheese'] },
        ];
        //Act
        const { result } = renderHook(() => useRecipes(recipes));
        act(() => {
            result.current.handleFilter('chicken');
        })

        //Assert
        const expectedRecipes = [
            { id: '1', name: 'Tikka Masala', ingredients: ['chicken', 'garam masala'] }
        ]
        expect(result.current.filteredRecipes).toEqual(expectedRecipes);
    });
})