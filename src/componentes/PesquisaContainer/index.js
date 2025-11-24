
import SubTitulo from '../SubTitulo';
import Titulo from '../Titulo';
import {livros} from './DadosPesquisa';
import './estilo.css';
import Resultado from '../Resultado'

import { useState } from 'react';
function PesquisaContainer() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  return (
    <section className = 'PesquisaContainer'>
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
      <Resultado>
        <p>{livro.nome}</p>
        <img src={livro.src} alt='livro'></img>
      </Resultado>
    ))}
    </section>

  );
}

export default PesquisaContainer;
