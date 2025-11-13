import './App.css';
import Logo from './componentes/Logo';
import imgPerfil from './imagens/perfil.svg';
import imgSacola from './imagens/sacola.svg';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const imgOpcoes = [imgPerfil, imgSacola];
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <Logo></Logo>
        <ul className='opcoes'>
          {textoOpcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ))}  
          {imgOpcoes.map((imagem) => (
            <li className='opcao-img'><img src={imagem}></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
