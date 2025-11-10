import './App.css';
import Logo from './componentes/Logo';
import imgPerfil from './imagens/perfil.svg';
import imgSacola from './imagens/sacola.svg';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const iconesOpcoes = [imgPerfil, imgSacola];
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <Logo></Logo>
        <ul className='opcoes'>
          {textoOpcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ))}  
          {iconesOpcoes.map((icone, index) => (
            <li key={index} className='icone'>
            <img src={icone} alt={`icone-${index}`} />
          </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
