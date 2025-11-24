import './estilo.css';
import { livros } from './DadosUltimosLancamentos';
import UltimosLancamentosContainer from '../UltimosLancamentosContainer';
import Titulo from '../Titulo';
import NovosLivrosContainer from '../NovosLivrosContainer';
function UltimosLancamentos(){
    return(
        
        <UltimosLancamentosContainer>
            <Titulo>Ultimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                <img src={livro.src} alt='livro'/>
            ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos;
