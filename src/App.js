// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import { setItems } from './features/itemsSlice';

const App = () => {
  const dispatch = useDispatch();

  // Mock data: Replace this with a real API call if needed
  const itemsData = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
    { id: 6, name: 'Honeydew' },
    { id: 7, name: 'Mango' },
    { id: 8, name: 'Papaya' },
    { id: 9, name: 'Watermelon' },
    { id: 10, name: 'Blackberry' },
  ];

  // Simulate fetching items on component mount
  useEffect(() => {
    dispatch(setItems(itemsData));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Item Search App</h1>
      {/* SearchBar for filtering items */}
      <SearchBar />

      {/* ItemList that displays the filtered list of items */}
      <ItemList />
    </div>
  );
};

export default App;
