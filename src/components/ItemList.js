// src/components/ItemList.js
import React, { useState, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ItemList = () => {
  const { items, searchTerm } = useSelector((state) => state.items);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = useCallback(() => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, filteredItems.length]);

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  return (
    <div>
      <ul className="item-list">
        {currentItems.map((item) => (
          <li key={item.id} className="item">
            {item.name}
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(filteredItems.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ItemList;
