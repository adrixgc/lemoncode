import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TextField } from './text-field';

afterEach(cleanup);

describe('text-field specs', () => {
    it('should render text-field with label', () => {

        // Arrange
        const props = {
            name: 'text-field_name',
            label: 'Foo',
            value: 'Bar',
            onChange: jest.fn(),
        };

        // Act
        const { getByText } = render(<TextField {...props} />);
        const labelElement = getByText(props.label);

        // Assert
        expect(labelElement).not.toBeUndefined();
    });

    it('should render text-field using snapshot testing', () => {
        // Arrange
        const props = {
            name: 'text-field_name',
            label: 'Foo',
            value: 'Bar',
            onChange: jest.fn(),
        }

        // Act
        const { asFragment } = render(<TextField {...props} />);
        // Assert
        expect(asFragment()).toMatchSnapshot();
    });
});