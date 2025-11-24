import './estilo.css';
function NovosLivrosContainer({children}){
    return(
        <div className='novosLivros'>
            {children}
        </div>
    )
}
export default NovosLivrosContainer;