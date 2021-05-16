import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import Category from '../containers/Category';

const mockStore = configureStore([thunk]);
let store;

beforeEach(() => {
  store = mockStore({
    filter: {
      category: 'All',
      brand: 'All',
    },
    makeup: {
      category: [
        {
          id: '1',
          api_featured_image: 'src/url',
          name: 'item name',
          brand: 'nyx',
          category: 'eyelinerscat',
          price: '14',
        },
        {
          id: '2',
          api_featured_image: 'asd/url',
          name: 'itm2 name',
          brand: 'brnd',
          category: 'cats',
          price: '12',
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

test('Render Category items name', () => {
  const { getByText } = render(componentWrap(<Category />));
  const headerText = getByText(/item name/i);
  expect(headerText).toBeInTheDocument();
});

test('Render Category items brand', () => {
  const { getAllByText } = render(componentWrap(<Category />));
  const headerText = getAllByText(/nyx/i);
  expect(headerText[0]).toBeInTheDocument();
});

test('Render Category items category', () => {
  const { getAllByText } = render(componentWrap(<Category />));
  const headerText = getAllByText(/eyelinerscat/i);
  expect(headerText[0]).toBeInTheDocument();
});

test('Render Category items price', () => {
  const { getAllByText } = render(componentWrap(<Category />));
  const headerText = getAllByText(/14/i);
  expect(headerText[0]).toBeInTheDocument();
});

test('Render Category filters', () => {
  const { getAllByText } = render(componentWrap(<Category />));
  const headerText = getAllByText(/All/i);
  expect(headerText[0]).toBeInTheDocument();
});
