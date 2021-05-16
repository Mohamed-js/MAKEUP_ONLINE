import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import Product from '../containers/Product';

const mockStore = configureStore([thunk]);
let store;

beforeEach(() => {
  store = mockStore({
    makeup: {
      item: {
        name: 'Eyeliner',
        price: '$12',
        brand: 'nyx',
        description: 'This is a log description.',
        product_type: 'Makeup',
        product_colors: [{ hex_value: '#000' }],
      },
    },
  });
});

const componentWrap = (component) => (
  <Provider store={store}>
    <Router>{component}</Router>
  </Provider>
);

// Test rendering Product components
test('Render product name', () => {
  const { getByText } = render(componentWrap(<Product />));
  const headerText = getByText(/EYELINER/);
  expect(headerText).toBeInTheDocument();
});

test('Render product price', () => {
  const { getByText } = render(componentWrap(<Product />));
  const headerText = getByText(/12/);
  expect(headerText).toBeInTheDocument();
});

test('Render product brand', () => {
  const { getByText } = render(componentWrap(<Product />));
  const headerText = getByText(/NYX/);
  expect(headerText).toBeInTheDocument();
});

test('Render product description', () => {
  const { getByText } = render(componentWrap(<Product />));
  const headerText = getByText(/This is a log description/);
  expect(headerText).toBeInTheDocument();
});

test('Render product type', () => {
  const { getByText } = render(componentWrap(<Product />));
  const headerText = getByText(/Makeup/i);
  expect(headerText).toBeInTheDocument();
});
