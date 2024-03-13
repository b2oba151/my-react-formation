import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'; 
import './App.css';

function handleClick() {
  alert('Click effectue');
}

function App() {
  return (
    <>
    {/* pas de parenthese apres handleClick  */}
    <button onClick={handleClick}>
      Click me
    </button>
    </>
  );
}






export default App;
