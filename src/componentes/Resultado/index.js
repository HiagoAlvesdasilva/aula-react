import './estilo.css'

function Resultado({children, onClick}){
    return(
        <div className='Resultado' onClick={onClick}>
        {children}
      </div>
    );
}
export default Resultado;