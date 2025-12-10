import './estilo.css'
import Titulo from '../Titulo';
import SubTitulo from '../SubTitulo';
import Descricao from '../Descricao';

function CardRecomenda({titulo, subtitulo, descricao, img}){
    return(
        <div className='recomendacoes'>
            <div>
                <Titulo>{titulo}</Titulo>
                <SubTitulo>{subtitulo}</SubTitulo>
                <Descricao>{descricao}</Descricao>
                <div>
                    <img src={img}/>
                    <button></button>
                </div>
            </div>

           
        
        </div> 
    );
}
export default CardRecomenda;