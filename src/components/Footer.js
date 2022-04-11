import React from 'react'
import './footer.css'
import googleplay from '../img/googleplay.png'



export const Footer = () => {




  return (
    <div className='container footer' >

      
         <p className='texto' > Descarga la APP para Android  </p>

         <a className='link' target='_blank' href='https://play.google.com/store/apps/details?id=com.criptotoolsalvi&hl=es_CL&gl=US' > <img src={googleplay} width={170} />  </a> 
            
            <div className='contenedorCopy' >
                  <p className='textoCopyright' > Creado por Alvaro Leiva </p>
                  <a href='https://www.linkedin.com/in/alvaro-leiva-gil-aaa6ba201/' target='_blank' >  <img src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536569.png?token=exp=1649713272~hmac=521f8021431051036cff7212c4442308' width='100' height='200px' /></a>
            </div>


    </div>
  )
}
