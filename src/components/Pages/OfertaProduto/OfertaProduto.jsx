import './OfertaProdutos.css'
import img1 from '../../../img/sapato_figma.png'
import estrela_avaliacao from '../../..//img/estrela_avaliacao.png'
import estrela from '../../..//img/estrela.png'

import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react';
import Ultima from '../ultima/Ultima';

const OfertaProduto = () => {
    return (
        <>
          <div className='container_flexx'>
              <div className="containerr">
                  <p className="title"> <span className='destaque'>Home</span> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>

            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation
                loop ={{clickable: true}}
     >
              <SwiperSlide>
                    <img className='image_0' src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='image_1' src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='image_2' src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='image_3' src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='image_4' src={img1} alt="" />
              </SwiperSlide>
            </Swiper>
   </div>
   <div className='container_lado_image'>
     <h1>Tênis Nike Revolution <br /> 6 Next Nature Masculino</h1>
     <p className='nikee'>Casual | Nike | REF:38416711</p>
     <div className='avaliacao0'>
         <img width={120} src={estrela_avaliacao} alt="" />
         <div className='fundo_estrelaa'><p>4.7 <img className='estrela' width={20} src={estrela}/></p></div>
         <p className='ava_90'>(90 avaliações)</p>
     </div>
     <div className='preco_0'>R$ <p className='preco_sapatoo'>219,00</p> <del>259,00</del></div>
     <div className='descricao_0'>
     <h3>Descrição do Produto</h3>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> 
     Facilis, ut velit? Quisquam accusamus eius voluptatem nesciunt <br /> 
     earum nemo suscipit est enim dolor! Quis nemo explicabo libero omnis <br />
     incidunt maxime cum.
     </p>
     </div>

     <div className='tamanho0'>
       <label>Tamanho</label>
       <div className="numeracao_sapato">
       <button>39</button>
       <button>40</button>
       <button>41</button>
       <button>42</button>
       <button>43</button>
       </div>

     </div>

     <div className='tamanho0'>
       <label>Tamanho</label>
       <div className="cor_sapato">
       <button id='btn_1' className='btn_cor'></button>
       <button id='btn_2' className='btn_cor'></button>
       <button id='btn_3' className='btn_cor'></button>
       <button id='btn_4' className='btn_cor'></button>
       </div>

     </div>

     <button className='btn_comprarr'>Comprar</button>
     
   </div>
 </div>

 <Ultima/>
        </>
    );
}
 
export default OfertaProduto;