// src/components/ItemList.test.js
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import ItemList from './ItemList';

test('renders list of items', () => {
  render(
    <Provider store={store}>
      <ItemList />
    </Provider>
  );
  const listElement = screen.getByRole('list');
  expect(listElement).toBeInTheDocument();
});
