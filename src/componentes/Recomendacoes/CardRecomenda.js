import './estilo.css'

function CardRecomenda({titulo, subtitulo, descricao, img}){
    return(
        <div className='recomendacoes'>
        <h3>{titulo}</h3>
        <h4>{subtitulo}</h4>
        <p>{descricao}</p>
        <img src={img}/>
        <button></button>
        </div> 
    );
}
export default CardRecomenda;