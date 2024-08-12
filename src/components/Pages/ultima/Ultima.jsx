import './Ultima.css'
import seta from "../../../img/seta-direita.png"
import sapato from "../../../img/sapato-3.png"

const Ultima = () => {
    return (
        <>

            <div className='container-ofertaP'>
                <div className='item-oferta flex container-ofertaP'>
                    <h2>Produtos relacionados</h2>
                    <p className='flex ajustarSeta'>Ver todos <img width={17} src={seta}/></p>
                </div>

                <div className='Ajustar-em-linha'>
                    <div>
                    <div className='item-oferta-sapato flex'>
                    <div className='fundo_sapato flex'>
                        <p className='flex'>30% OFF</p>
                        <img width={250} src={sapato} />
                    </div>

                </div>

                <div className='flex descricao-sapato'>
                    <p>tênis</p>
                    <h2>Tênis para corridas longas</h2>
                    <span className='flex descricao-preco'>
                        <del>$200</del>
                        <p>$100</p>
                    </span>
                </div>
                    </div>

                    <div>
                    <div className='item-oferta-sapato flex'>
                    <div className='fundo_sapato flex'>
                        <p className='flex'>30% OFF</p>
                        <img width={250} src={sapato} />
                    </div>

                </div>

                <div className='flex descricao-sapato'>
                    <p>tênis</p>
                    <h2>Tênis para corridas longas</h2>
                    <span className='flex descricao-preco'>
                        <del>$200</del>
                        <p>$100</p>
                    </span>
                </div>
                    </div>

                    <div>
                    <div className='item-oferta-sapato flex'>
                    <div className='fundo_sapato flex'>
                        <p className='flex'>30% OFF</p>
                        <img width={250} src={sapato} />
                    </div>

                </div>

                <div className='flex descricao-sapato'>
                    <p>tênis</p>
                    <h2>Tênis para corridas longas</h2>
                    <span className='flex descricao-preco'>
                        <del>$200</del>
                        <p>$100</p>
                    </span>
                </div>
                    </div>

                    <div>
                    <div className='item-oferta-sapato flex'>
                    <div className='fundo_sapato flex'>
                        <p className='flex'>30% OFF</p>
                        <img width={250} src={sapato} />
                    </div>

                </div>

                <div className='flex descricao-sapato'>
                    <p>tênis</p>
                    <h2>Tênis para corridas longas</h2>
                    <span className='flex descricao-preco'>
                        <del>$200</del>
                        <p>$100</p>
                    </span>
                </div>
                    </div>

                </div>

                <div className='espacamento'></div>

                
            </div>
        </>
    );
}
 
export default Ultima;