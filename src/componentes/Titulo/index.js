import './estilo.css';

function Titulo({children}){
    return(
        <h2 className='custom-title'>{children}</h2>
    );
}
export default Titulo;