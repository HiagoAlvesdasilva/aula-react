import './App.css';
import Header from './componentes/Header';
import PesquisaContainer from './componentes/PesquisaContainer'
import UltimosLancamentos  from './componentes/UltimosLancamentos';
import CardRecomenda from './componentes/Recomendacoes/CardRecomenda';


function App() {
  return (
    <div className='App'>
      <Header></Header>
      <PesquisaContainer></PesquisaContainer>
      <UltimosLancamentos></UltimosLancamentos>
      <CardRecomenda></CardRecomenda>
    </div>
  );
}

export default App;
