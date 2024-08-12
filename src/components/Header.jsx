import { CiSearch } from "react-icons/ci";
import LogoHeader from "../img/logo-header.svg"
import Carrinho from "../img/mini-cart.svg"
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header>

                <div className="container">
                <Link to={"/"}>
                <img src= {LogoHeader} alt="" />
                </Link>
                
                <div className="pesquisar">
                    <input type="text" placeholder="Pesquisar produtos..."/>
                </div>

                <div className="iconePesquisa">
                <CiSearch/>
                </div>
               
                <div>
                    <ul className="cadastro">
                        <li><p><u>Cadastre-se</u></p></li>
                        <li><button>Entrar</button></li>
                    </ul>
                 
                </div>

                <div className="carroTopo">
                    <img src={Carrinho} alt="" /> 
                    <div><p>2</p></div>
                </div>

                </div>

                <nav>
                <ul className="navagacao">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/produtos"}>Produtos</Link></li>
                        <li><Link to={"/categorias"}>Categorias</Link></li>
                        <li><Link to={"/meusProdutos"}>Meus Produtos</Link></li>
                    </ul>
                </nav>

            </header>
        </>
    );
}
 
export default Header;