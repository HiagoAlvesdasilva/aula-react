
import PesquisaContainer from '../PesquisaContainer';
import SubTitulo from '../SubTitulo';
import Titulo from '../Titulo';
import {livros} from './DadosPesquisa/DadosPesquisa';
import './estilo.css';

import { useState } from 'react';
function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  return (
    <PesquisaContainer>
        <Titulo>Ja sabe por onde começar?</Titulo>
        <SubTitulo>Encontre seu produto</SubTitulo>
    <input className="input" placeholder="Digite o nome do produto" 
    onBlur={evento => { 
    const textoDigitado = evento.target.value
    const resultadoPesquisa = livros.filter(
      livro => livro.nome.includes(textoDigitado)
    )
    setLivrosPesquisados(resultadoPesquisa);
    console.log(livrosPesquisados)
    }}
    />
    {livrosPesquisados.map(livro => (
      <div>
        <p>{}livro.nome</p>
        <img src={livro.src} alt='livro'></img>
      </div>
    ))}
    </PesquisaContainer>

  );
}

export default Pesquisa;
