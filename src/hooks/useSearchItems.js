// src/hooks/useSearchItems.js
import { useSelector } from 'react-redux';

export const useSearchItems = () => {
  const { items, searchTerm } = useSelector((state) => state.items);

  return items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
