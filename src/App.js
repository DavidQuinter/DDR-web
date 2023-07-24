import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import NavBar from './layout/NavBar';
import Home from './views/home';
import Climas from './views/climas';
import Security from './views/security';
import Development from './views/developmen';
import Default from './views/Default';
import Form from './layout/Form';
import Robotica from './views/Robotica';

const App = () =>{
  return (
    <div className="App">
    <NavBar /> {/* Mueve el componente NavBar fuera de las rutas para evitar que las rutas se generen dentro del componente nav*/}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/seguridad' element={<Security />} />
      <Route path='/climas' element={<Climas />} />
      <Route path='/mantenimiento' element={<Development />} />
      <Route path='/robotica' element={<Robotica />} />
      <Route path='*' element={<Default />} />
    </Routes>
    <Form></Form>
  </div>
  );
}

export default App;
