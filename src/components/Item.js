// src/components/Item.js
import React from 'react';

const Item = React.memo(({ item }) => {
  return <li>{item.name}</li>;
});

export default Item;
