import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title description and form', () => {
  const { getByText, getByTestId } = render(<App />);
  const titletest = getByTestId('Title');
  const intro = getByTestId('intro-message');
  const form = getByTestId('form');
  expect(titletest).toBeInTheDocument();
  expect(intro).toBeInTheDocument();
  expect(titletest).toHaveTextContent('Title');
  expect(intro).toHaveTextContent('Lorem ipsum');
  expect(form).toBeInTheDocument();
});

test('form have a filter', () => {
  const { getByTestId, getByLabelText } = render(<App />);
  const filter = getByTestId('select');
  const team = getByLabelText('escoge tu equipo');
  expect(filter).toBeInTheDocument();
  expect(team).toBeInTheDocument();
})
