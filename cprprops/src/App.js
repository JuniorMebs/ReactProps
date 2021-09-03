import React from 'react'
import './App.css';
import Profile from './profil/Profile';
import Profil from './profil/Profil.jpeg';

  const App =()=> {
  const alertMyInput = FullName => alert(FullName); 
  return (
    <>
    <nav>
    <Profile  
    FullName="Jean Baptiste Junior MEBIAME"
    bio="Jeune homme, 24ans passionné de programmation"
    Profession="Dveloppeur fullstack"
    />
    <Profile>
      <img src={Profil}></img>
    </Profile>
    </nav>
    </>
  );
}

export default App;
