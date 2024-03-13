import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'; 
import './App.css';

function Greeting() {
  const currentHour = new Date().getHours();
  let greetingMessage;

  if (currentHour >= 6 && currentHour < 12) {
    greetingMessage = 'Bonjour';
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = 'Bonne après-midi';
  } else {
    greetingMessage = 'Bonne soirée';
  }

  return (
    <h2>{greetingMessage}, bienvenue sur notre site !</h2>
  );
}

function MyContent({ user }) { // Utilisation de la destructuration pour extraire user
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`Photo de ${user.name}`} // Utilisation de l'interpolation de chaîne
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}

function MyConditionElementNoOk() {
  return (
    <h3>Condition non vérifiée</h3>
  );
}

function App() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 100,
  };


  return (
    <div>
      <Greeting />
      {user ? <MyContent user={user} /> : <MyConditionElementNoOk />}
    </div>
  );
}















export default App;
