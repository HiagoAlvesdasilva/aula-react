import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo(){ 
    return(
    <div className="logo">
      <img src={logo} alt="logo" />
      <p><strong>Hiago Store</strong></p>
    </div>
    )
}

export default Logo;