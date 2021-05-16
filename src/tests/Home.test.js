import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import Home from '../containers/Home';

const mockStore = configureStore([thunk]);
let store;

beforeEach(() => {
  store = mockStore({
    makeup: {
      makeup: [
        {
          id: '1',
          api_featured_image: 'src/url',
          name: 'item name',
          brand: 'nyx',
          category: 'eyeliners',
          price: '14',
        },
      ],
    },
  });
});

const componentWrap = (component) => (
  <Provider store={store}>
    <Router>{component}</Router>
  </Provider>
);

test('Render Home show categories button', () => {
  const { getByText } = render(componentWrap(<Home />));
  const headerText = getByText(/SHOW CATEGORIES/);
  expect(headerText).toBeInTheDocument();
});

test('Render Home cover photos', () => {
  const { getAllByAltText } = render(componentWrap(<Home />));
  const headerText = getAllByAltText(/cover/i);
  expect(headerText[0]).toBeInTheDocument();
});

test('Render Home top products header', () => {
  const { getByText } = render(componentWrap(<Home />));
  const headerText = getByText(/TOP PRODUCTS/);
  expect(headerText).toBeInTheDocument();
});

test('Render Home top products items name', () => {
  const { getByText } = render(componentWrap(<Home />));
  const headerText = getByText(/item name/i);
  expect(headerText).toBeInTheDocument();
});
test('Render Home top products items brand', () => {
  const { getByText } = render(componentWrap(<Home />));
  const headerText = getByText(/nyx/i);
  expect(headerText).toBeInTheDocument();
});
test('Render Home top products items category', () => {
  const { getByText } = render(componentWrap(<Home />));
  const headerText = getByText(/eyeliners/i);
  expect(headerText).toBeInTheDocument();
});
test('Render Home top products items price', () => {
  const { getByText } = render(componentWrap(<Home />));
  const headerText = getByText(/14/);
  expect(headerText).toBeInTheDocument();
});
