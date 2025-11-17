
import PesquisaContainer from '../PesquisaContainer';
import SubTitulo from '../SubTitulo';
import Titulo from '../Titulo';
import './estilo.css';

import { useState } from 'react';
function Pesquisa() {
  const [textoDigitado, setTextoDigitado] = useState('');
  return (
    <PesquisaContainer>
        <Titulo>Ja sabe por onde começar?</Titulo>
        <SubTitulo>Encontre seu produto</SubTitulo>
    <input className="input" placeholder="Digite o nome do produto" onBlur={evento => setTextoDigitado(evento.target.value)}/>
    </PesquisaContainer>
    
  );
}

export default Pesquisa;
