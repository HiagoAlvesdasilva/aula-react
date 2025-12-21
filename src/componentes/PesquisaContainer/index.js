import './estilo.css';
import SubTitulo from '../SubTitulo';
import Titulo from '../Titulo';
import Resultado from '../Resultado';
import { useEffect, useState } from 'react';
import { getLivros } from '../../servicos/livros';
import { postFavoritos } from '../../servicos/favoritos';
import livroImg from "../../imagens/livro2.jpeg";


function PesquisaContainer() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
  }

  async function insertFavorito(id) {
    await postFavoritos(id);
    alert(`Livro de id:${id} inserido!`);
  }

  return (
    <>
      <section className="PesquisaContainer">
        <Titulo>Já sabe por onde começar?</Titulo>
        <SubTitulo>Encontre seu produto</SubTitulo>
        <input
          className="input"
          placeholder="Digite o nome do produto"
          onBlur={evento => {
            const textoDigitado = evento.target.value;
            const resultadoPesquisa = Array.isArray(livros)
              ? livros.filter(livro => livro.nome.includes(textoDigitado))
              : [];
            setLivrosPesquisados(resultadoPesquisa);
          }}
        />
      </section>

      {livrosPesquisados.length > 0 && (
        <div className="ResultadosContainer">
          {livrosPesquisados.map(livro => (
            <Resultado key={livro.id} onClick={() => insertFavorito(livro.id)}>
              <p>{livro.nome}</p>
              <img src={livroImg} alt="livro" />
            </Resultado>
          ))}
        </div>
      )}

    </>
  );
}

export default PesquisaContainer;
