import './estilo.css'
import Titulo from '../Titulo';
import SubTitulo from '../SubTitulo';
import Descricao from '../Descricao';

function CardRecomenda({titulo, subtitulo, descricao, img}){
    return(
        <div className='card'>
            <div>
                <Titulo>{titulo}</Titulo>
                <SubTitulo>{subtitulo}</SubTitulo>
                <Descricao>{descricao}</Descricao>
            </div>

            <div>
                <img src={img}/>
                <button></button>
            </div>
        
        </div> 
    );
}
export default CardRecomenda;