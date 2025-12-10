import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Favoritos from './componentes/Rotas/favoritos';
import MinhaEstante from './componentes/Rotas/minhaEstante';
import Categorias from './componentes/Rotas/categorias';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
        <Route path="/minha-estante" element={<MinhaEstante/>}/>
        <Route path="/categorias" element={<Categorias/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
