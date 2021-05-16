import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Categories from '../containers/Categories';

const componentWrap = (component) => <Router>{component}</Router>;

test('Renders category name', () => {
  const { getByText } = render(componentWrap(<Categories />));
  const headerText = getByText(/Foundation/i);
  expect(headerText).toBeInTheDocument();
});

test('Renders category image', () => {
  const { getAllByAltText } = render(componentWrap(<Categories />));
  const headerText = getAllByAltText(/Mascara/i);
  expect(headerText[0]).toBeInTheDocument();
});
