// src/features/itemsSlice.test.js
import itemsReducer, { setItems, setSearchTerm } from './itemsSlice';

describe('itemsSlice reducer', () => {
  const initialState = {
    items: [],
    searchTerm: '',
  };

  it('should handle setItems', () => {
    const newState = itemsReducer(initialState, setItems([{ id: 1, name: 'Item 1' }]));
    expect(newState.items).toEqual([{ id: 1, name: 'Item 1' }]);
  });

  it('should handle setSearchTerm', () => {
    const newState = itemsReducer(initialState, setSearchTerm('Test'));
    expect(newState.searchTerm).toEqual('Test');
  });
});
