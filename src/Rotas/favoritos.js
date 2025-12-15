import './App.css';
import AppContainer from "../componentes/AppContainer";
import Titulo from "../componentes/Titulo";
import ResultadoContainer from '../componentes/ResultadoContainer';
import Resultado from "../componentes/Resultado";
import {getFavoritos, deleteFavorito} from '../servicos/favoritos';
import { useEffect, useState } from 'react';
import livroImg from "../imagens/livro4.png";


function Favoritos() {
  
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetchFavoritos()
  },[])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  async function deletarFavorito(id){
    await deleteFavorito(id)
    fetchFavoritos()
    alert(`Livro de id:${id} apagado!`)
  }
  return (

    <AppContainer>
      <div>
      <Titulo>Aqui está seus livros favoritos</Titulo>
      <ResultadoContainer>
        {
          favoritos.length !==0 ? favoritos.map(favorito =>(
            <Resultado onClick = {() => deletarFavorito(favorito.id)}>
              <p>{favorito.nome}</p>
              <img src={livroImg} alt='imagem do livro'/>
            </Resultado>
          )) : null
        }
      </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
