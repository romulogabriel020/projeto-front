import tenis1 from "../../../img/sapato-1.png"
import tenis2 from "../../../img/sapato-2.png"
import tenis3 from "../../../img/sapato-3.png"
import tenis4 from "../../../img/tenis-venda.png"
import tenis5 from "../../../img/sapato.png"
import tenis6 from "../../../img/pngwing.com (1).png"
import tenis7 from "../../../img/pngwing.com.png"
import tenisVenda from '../../../img/sapato_figma.png'
import './Produtos.css'

import { Link } from 'react-router-dom';
const Produtos = () => {

    return (
        <>
            <main>
                <div className="marcacao">
                    <div className='cabecalho'>
                        <p>Resultados para tênis - 389 produtos</p>

                        <div  className='caixa-relevancia'>
                            <label className='ordenar'>Ordenar por:</label>
                            <select className='dentro-da-caixa'>
                            <option value="relevantes">Mais Relevantes</option>
                            <option value="Menor">Menor preço</option>
                            <option value="Cruze">Maior Preço</option>
                            </select>
                        </div>
                    </div>
                        
                        <div className='ajustar-espacameto'>
                            <div className='opcoes-laterais'>
                                    <p className='text-filtrar'>Filtrar por:</p>
                                    <div className='linha-filtrar'></div>
                           
                                

                                {/* CONTEUDO MARCA */}
                                <div className='container-marca'>
                                    <h1>Marca</h1>
                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="marca">Adidas</label>
                                        </section>

                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="marca">Balenciaga</label>
                                        </section>

                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="marca">K-Swiss</label>
                                        </section>

                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="marca">Nike</label>
                                        </section>

                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="marca">Puma</label>
                                        </section>
                                </div>
                            

                                 {/* CONTEUDO CATEGORIA */}

                                <div className='container-categoria'>
                                    <h1>Categoria</h1>
                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="categoria">Esporte e Lazer</label>
                                        </section>

                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="categoria">Casual</label>
                                        </section>

                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="categoria">Utilitário</label>
                                        </section>

                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="categoria">Corrida</label>
                                        </section>
                                </div>

                                 {/* CONTEUDO GENERO */}

                                 <div className='container-genero'>
                                    <h1>Gênero</h1>
                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="genero">Masculino</label>
                                        </section>

                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="genero">Feminino</label>
                                        </section>

                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="genero">Unisex</label>
                                        </section>
                                </div>


                                   {/* CONTEUDO ESTADO */}
                                <div className='container-estado'>
                                    <h1>Estado</h1>
                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="estado">Novo</label>
                                        </section>

                                        <section>
                                            <input className='quadrado' type="checkbox" id="marca" name="marca" value={"marca"}  />
                                            <label htmlFor="estado">Usado</label>
                                        </section>
                                </div>
                                
                            </div>

                            {/* Sapatos */}

                            <div className='fundo-sapato'>
                            
                                <div className='sapato-img'>
                                    <Link to={"/ofertaProduto"}>
                                    <img src= {tenisVenda} alt="" />
                                    </Link>

                                    <div className="desconto-sapato">
                                        <span>30% OFF</span>
                                        </div>
                                        <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">K-Swiss Sneakers</p>
                                        <span className='preco'>
                                        <del className="">$200</del> 
                                        <span className="">$100</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img1'>
                                    <img src= {tenisVenda} alt="" />
                                    <div className="desconto-sapato">
                                        <span>30% OFF</span>
                                        </div>
                                        <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">K-Swiss Sneakers</p>
                                        <span className='preco'>
                                        <del className="">$200</del> 
                                        <span className="">$100</span>
                                        </span>
                                    </div>
                                </div>

                                 <div className='sapato-img2'>
                                    <img src= {tenis1} alt="" />
                                        <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">Tênis de corrida azul</p>
                                        <span className='preco'>
                                        <span className="">$250</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img3'>
                                    <img src= {tenis1} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">Tênis de corrida azul</p>
                                        <span className='preco'>
                                        <span className="">$250</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img4'>
                                    <img src= {tenis2} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">Tênis Adidas rosa</p>
                                        <span className='preco'>
                                        <span className="">$150</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img5'>
                                    <img src= {tenis2} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">Tênis Adidas rosa</p>
                                        <span className='preco'>
                                        <span className="">$150</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img6'>
                                    <img src= {tenis3} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">Tênis para corridas longas</p>
                                        <span className='preco'>
                                        <span className="">$200</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img7'>
                                    <img src= {tenis3} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">Tênis para corridas longas</p>
                                        <span className='preco'>
                                        <span className="">$200</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img8'>
                                    <img src= {tenis4} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">Tênis casual</p>
                                        <span className='preco'>
                                        <span className="">$50</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img9'>
                                    <img src= {tenis4} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">Tênis casual</p>
                                        <span className='preco'>
                                        <span className="">$50</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img10'>
                                    <img src= {tenis5} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">Tênis perfeito para caminhada</p>
                                        <span className='preco'>
                                        <span className="">$120</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img11'>
                                    <img src= {tenis5} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">Tênis perfeito para caminhada</p>
                                        <span className='preco'> 
                                        <span className="">$120</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img12'>
                                    <img src= {tenis6} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">K-Swiss Sneakers</p>
                                        <span className='preco'>
                                        <del className="">$200</del> 
                                        <span className="">$100</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img13'>
                                    <img src= {tenis6} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">K-Swiss Sneakers</p>
                                        <span className='preco'>
                                        <del className="">$200</del> 
                                        <span className="">$100</span>
                                        </span>
                                    </div>
                                </div>

                                <div className='sapato-img14'>
                                    <img src= {tenis7} alt="" />
                                    <div className="texto-detalhes">
                                        <h3 className="">tenis</h3>
                                        <p className="modelo-sapato">K-Swiss Sneakers</p>
                                        <span className='preco'>
                                        <del className="">$200</del> 
                                        <span className="">$100</span>
                                        </span>
                                    </div>
                                </div>

                            </div>

                            
                           

                        </div>
                    </div>
                
            </main>
        </>
    );
}
 
export default Produtos;