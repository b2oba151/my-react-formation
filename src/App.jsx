import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'; 
import './App.css';

const products = [
  { title: 'Choux', id: 1 },
  { title: 'Ail', id: 2 },
  { title: 'Pomme', id: 3 },
  { title: 'Orange', id: 4 },
];


const listItems = products.map(product =>
  //key pour permettre le CRUD facilement apres
  <li key={product.id}> {product.title}</li> 
  );

function App() {
  return (
    <>
    <ul>{listItems}</ul>
    </>
  );
}






export default App;
