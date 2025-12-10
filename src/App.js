import './App.css';
import PesquisaContainer from './componentes/PesquisaContainer';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import CardRecomenda from './componentes/CardRecomenda';

function App() {
  return (
    <div className="App">
      <PesquisaContainer/>
      <UltimosLancamentos/>
      <CardRecomenda 
        titulo="Recomendação do Dia"
        subtitulo="Um ótimo livro para você"
        descricao="Este é um livro muito bom e recomendado para iniciantes."
        img="https://picsum.photos/200/300"
      />
    </div>
  );
}

export default App;
