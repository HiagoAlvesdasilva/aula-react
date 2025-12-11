import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Rotas/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Favoritos from './Rotas/favoritos';
import MinhaEstante from './Rotas/minhaEstante';
import Categorias from './Rotas/categorias';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
        <Route path="/minha-estante" element={<MinhaEstante/>}/>
        <Route path="/categorias" element={<Categorias/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
