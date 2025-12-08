import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './componentes/Header';
import Favoritos from './componentes/Rotas/favoritos';
import MinhaEstante from './componentes/Rotas/minhaEstante';
import Categorias from './componentes/Rotas/categorias';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/logo" element={<App/>}/>
        <Route path=' '/>
        <Route path="/favoritos" element={<Favoritos></Favoritos>}/>
        <Route path="/minha-estante" element= {<MinhaEstante></MinhaEstante>}/>
        <Route path="/categorias" element={<Categorias></Categorias>}/>
      </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
