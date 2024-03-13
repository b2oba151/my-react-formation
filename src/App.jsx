import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'; 
import './App.css';

const products = [
  { title: 'Choux', isFruit: false, id: 1 },
  { title: 'Ail', isFruit: false, id: 2 },
  { title: 'Pomme', isFruit: true, id: 3 },
  { title: 'Orange', isFruit: true, id: 4 },
];


  function ShoppingList() {
    //key pour permettre le CRUD facilement apres
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }

function App() {
  return (
    <>
    {ShoppingList()}
    </>
  );
}






export default App;
