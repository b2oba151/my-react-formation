import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'; 
import './App.css';


/* compter_le_nombre_de_fois_où_un_bouton_est_cliqué  *//*
  const [a, b] = useState(0);

deux choses pour useState: 
l'état actuel ( a), 
et la fonction qui permet de le mettre à jour ( b)
useState(0) veut dire que l'etat a ete initialiser par 0
*/

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Cliquer {count} fois
    </button>
  );
}



function App() {
  return (
    <>
    <MyButton/>
    {/* chaque bouton aura son propre etat */}
    <MyButton/>
    </>
  );
}



export default App;
