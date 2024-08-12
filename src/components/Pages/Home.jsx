import Sapato from "../../img/sapato.png"
import img1 from "../../img/collection-1.png"
import img2 from "../../img/collection-2.png"
import img3 from "../../img/collection-3.png"
import Camiseta from "../../img/camisa-polo.png"
import calca from "../../img/calca.png"
import bone from "../../img/bone.png"
import headphones from "../../img/headphones.png"
import tenis from "../../img/tenis.png"
import tenisColecao from "../../img/pngwing.com.png"
import tenisJordan from "../../img/jordan_figma.png"
import seta from "../../img/seta-direita.png"

import "./Home.css";
const Home = () => {

    return (
        <>
            <main>

                {/* Primeira parte */}
                <div className="fundo">
                    <div className="ofertas">
                        <h6>Melhores ofertas personalizadas</h6>
                        <h1>Queima de <br />Estoque Nike</h1>
                        <div className="textoLorem" >
                            <p></p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. modi aspernatur in cum atque adipisci quibusdam iste.
                        </div>

                        <div>
                            <button className="b-verOfertas">Ver ofertas</button>
                        </div>

                    </div>

                    <div>
                        <img className="imagem-sapato" src={Sapato} alt="" />
                    </div>
                </div>


                {/* Segunda parte */}
                <h2 className="textoColecao">Coleções em destaque</h2>
                <div>
                    <ul className="colecao">
                        <li>
                            <img src={img1} alt="" />
                            <div className="info">
                                <div className="info1">
                                    <span>30% OFF</span>
                                </div>

                                <span><button className="botao-comprar">Comprar</button></span>
                            </div>
                        </li>

                        <li>
                            <img src={img2} alt="" />
                            <div className="info">
                                <div className="info1">
                                    <span>30% OFF</span>
                                </div>

                                <span><button className="botao-comprar">Comprar</button></span>
                            </div>
                        </li>

                        <li>
                            <img src={img3} alt="" />
                            <div className="info">
                                <div className="info1">
                                    <span>30% OFF</span>
                                </div>

                                <span><button className="botao-comprar">Comprar</button></span>
                            </div>
                        </li>
                    </ul>


                    {/*Terceira parte */}
                    <div className="container3">
                        <h1 className="central-text">Coleções em destaque</h1>
                        <div className="images-container3">

                            <div className="image-item">
                                <div className="arredondar">
                                    <img src={Camiseta} alt="Imagem 1" className="image" />
                                </div>
                                <p className="image-text">Camisetas</p>
                            </div>

                            <div className="image-item">
                                <div className="arredondar">
                                    <img src={calca} alt="Imagem 1" className="image" />
                                </div>
                                <p className="image-text">Calças</p>
                            </div>

                            <div className="image-item">
                                <div className="arredondar">
                                    <img src={bone} alt="Imagem 1" className="image" />
                                </div>
                                <p className="image-text">Bonés</p>
                            </div>

                            <div className="image-item">
                                <div className="arredondar">
                                    <img src={headphones} alt="Imagem 1" className="image" />
                                </div>
                                <p className="image-text">Headphones</p>
                            </div>

                            <div className="image-item">
                                <div className="arredondar">
                                    <img src={tenis} alt="Imagem 1" className="image" />
                                </div>
                                <p className="image-text">Tênis</p>
                            </div>

                        </div>
                    </div>


                    {/*Quarta parte */}
                    <div className="container-4">
                        <h2>Produtos em alta</h2>
                        <ul className="menu">
                            <li><p>Ver todos </p></li>
                            <li> <img width={17} src={seta} /></li>
                        </ul>

                    </div>

                <div className="lado-a-lado">
                        <div className="conteudo-card">
                            <div className="card1">
                                <img width={285} src= {tenisColecao} />
                            </div>

                            <div  className="desconto">
                                <span>30% OFF</span>
                            </div>

                            <div className="ajustar">
                                <h3 className="titulo-card">tenis</h3>
                                <p className="subtitulo-card">K-Swiss Sneakers</p>
                            
                            <span>
                                <del className="old-price">$200</del> 
                                <span className="price">$100</span>
                            </span>
                            </div>
                          
                        </div>

                    <div className="conteudo-card">
                        <div className="card1">
                        <img width={285} src= {tenisColecao} />
                        </div>
                        <div  className="desconto">
                        <span>30% OFF</span>
                        </div>
                        <div className="ajustar">
                        <h3 className="titulo-card">tenis</h3>
                        <p className="subtitulo-card">K-Swiss Sneakers</p>
                        <span>
                        <del className="old-price">$200</del> 
                        <span className="price">$100</span>
                        </span>
                        </div>
                        
                    </div>

                    <div className="conteudo-card">
                        <div className="card">
                        <img width={285} src= {tenisColecao} />
                        </div>    
                        <h3 className="titulo-card">tenis</h3>
                        <p className="subtitulo-card">K-Swiss Sneakers</p>
                        <span>
                        <del className="old-price">$200</del> 
                        <span className="price">$100</span>
                        </span>
                        
                    </div>

                    <div className="conteudo-card">
                        <div className="card">
                        <img width={285} src= {tenisColecao} />
                        </div>
                        <h3 className="titulo-card">tenis</h3>
                        <p className="subtitulo-card">K-Swiss Sneakers</p>
                        <span>
                        <del className="old-price">$200</del> 
                        <span className="price">$100</span>
                        </span>
                        
                    </div>

                    <div className="conteudo-card">
                        <div className="card">
                        <img width={285} src= {tenisColecao} />
                        </div>
                        <h3 className="titulo-card">tenis</h3>
                        <p className="subtitulo-card">K-Swiss Sneakers</p>
                        <span>
                        <del className="old-price">$200</del> 
                        <span className="price">$100</span>
                        </span>
                        
                    </div>

                    <div className="conteudo-card">
                        <div className="card">
                        <img width={285} src= {tenisColecao} />
                        </div>
                        <h3 className="titulo-card">tenis</h3>
                        <p className="subtitulo-card">K-Swiss Sneakers</p>
                        <span>
                        <del className="old-price">$200</del> 
                        <span className="price">$100</span>
                        </span>
                        
                    </div>

                    <div className="conteudo-card">
                        <div className="card">
                        <img width={285} src= {tenisColecao} />
                        </div>
                        <h3 className="titulo-card">tenis</h3>
                        <p className="subtitulo-card">K-Swiss Sneakers</p>
                        <span>
                        <del className="old-price">$200</del> 
                        <span className="price">$100</span>
                        </span>
                        
                    </div>

                    <div className="conteudo-card">
                        <div className="card">
                        <img width={285} src= {tenisColecao} />
                        </div>
                        <h3 className="titulo-card">tenis</h3>
                        <p className="subtitulo-card">K-Swiss Sneakers</p>
                        <span>
                        <del className="old-price">$200</del> 
                        <span className="price">$100</span>
                        </span>
                        
                    </div>
            </div>


                    {/*Quinta parte */}
                    <section className="conteudo-jordan">
                        <div className="circulo-jordan">
                            <img width={500} src= {tenisJordan} />
                        </div>

                        <div className="texto-jordan">
                            <h4>Oferta especial</h4>
                            <h2 className="titulo-jordan">Air Jordan edição de <br />colecionador</h2>
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Mollitia nostrum nulla doloremque in cumque, corporis, <br />
                            deleniti corrupti explicabo iste aut aliquam? Voluptatem ex suscipit magnam libero eligendi.<br />
                            Voluptatem, similique culpa.
                            </p>
                            <button className="botao-jordan">Ver ofertas</button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Home;