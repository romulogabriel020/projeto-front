import Logofooter from "../../img/logo-footer.svg"
import facebook from "../../img/facebook.svg"
import instagram from "../../img/instagram.svg"
import twitter from "../../img/twitter.svg"
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-footer">
                    <img className="Logo" width={253} src= {Logofooter} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Ea quibusdam voluptatem doloribus, perspiciatis laudantium <br />
                        praesentium tempore beatae facere deserunt sequi dicta soluta. <br />
                    </p>
                    <div className="footer-icons">
                        <img src= {facebook} />
                        <img src= {instagram} />
                        <img src= {twitter} />
                    </div>

                    <section className="ajustar-informacoes">
                    <div className="information">
                        <div><h2>Informação</h2></div>
                        <ul className="descricao">
                            <li>Sobre Drip Store</li>
                            <li>Segurança</li>
                            <li>Wishlist</li>
                            <li>Blog</li>
                            <li>Trabalhe conosco</li>
                            <li>Meus pedidos</li>
                        </ul>
                    </div>

                    <div style={{position: 'relative', bottom: '177px'}} className="information">
                        <div><h2>Categoria</h2></div>
                        <ul className="descricao">
                            <li>Camisetas</li>
                            <li>Calças</li>
                            <li>Bonés</li>
                            <li>Headphones</li>
                            <li>Tênis</li>
                        </ul>
                    </div>

                    <div  style={{position: 'relative', bottom: '213px'}} className="information">
                        <div><h2>Contato</h2></div>
                        <ul className="descricao">
                            <li>
                                Av. Santos Dumont, 1510 - 1 <br />
                                andar - Aldeota, Fortaleza - <br />
                                CE, 60150-161
                            </li>
                            <li>(85) 3051-3411</li>
                        </ul>
                    </div>
                    </section>

                    <div className="linha"></div>
                    <p className="Digital">@ 2022 Digital College</p>
                </div>

            </footer>
        </>
    );
}
 
export default Footer;