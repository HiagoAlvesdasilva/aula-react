
import './estilo.css';
import Opcao from '../Opcao';
import { Link} from 'react-router-dom';
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS','MINHA ESTANTE'];
function OpcoesHeader(){
    return(
        <ul className='opcao'>
          {textoOpcoes.map ((texto) =>(
	          <Link to= {`/${texto.toLowerCase().replace(" ", "-")}`}
            style={{ textDecoration: "none", color: "inherit" }}>
              <Opcao><p>{texto}</p></Opcao>
            </Link>
          ))}
        </ul>
    )
}

export default OpcoesHeader;