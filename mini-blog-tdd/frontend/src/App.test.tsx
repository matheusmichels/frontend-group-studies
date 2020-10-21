import React from 'react';
import { findByTestId, queryByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  const { getByText, debug } = render(<App />);

  debug();

  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Home', () => {
  it('should open post form', () => {
    // data-testid="add-post"

    // Arrange
    const { getByTestId, queryByTestId } = render(<App />);
    const addPostButton = queryByTestId('add-post');
    let addPostForm = queryByTestId('add-form');

    expect(addPostForm).not.toBeInTheDocument();

    userEvent.click(addPostButton!);
    addPostForm = getByTestId('add-form');

    expect(addPostForm).toBeInTheDocument();
  });

  it('should edit selected post', () => {});
});
