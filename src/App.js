import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home1 from './Home-1';
import Home2 from './Home-2';
import Destination from './Destination';
import Destination2 from './Destination-2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home1 />} />
          <Route path='/home-2' element={<Home2 />} />
          <Route path='/destination' element={<Destination />} />
          {/* on paramétre "id" au chemin de la page destination pour envoyé ce paramètre et afficher la bonne planète  */}
          <Route path='/destination2/:id' element={<Destination2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
