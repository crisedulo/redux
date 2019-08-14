import React from 'react';
import './App.css';
import AppNav from "./componets/AppNav"
import Albums from "./containers/Albums"
import Album from "./containers/Album"

function App() {
 
  
  return (
    <div >
        <AppNav/>
        <Album/>
        <Albums/>
    </div>
  );
}

export default App;
