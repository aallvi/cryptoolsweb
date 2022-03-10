import React from 'react'
import './footer.css'

export const Footer = () => {




  return (
    <div className='container footer' >

      
         <p className='texto' > Descarga la APP para Android <a className='link' target='_blank' href='https://play.google.com/store/apps/details?id=com.criptotoolsalvi&hl=es_CL&gl=US' > Aqui  </a> </p>
            
            <div className='contenedorCopy' >
                  <p className='textoCopyright' > Creado por Alvaro Leiva </p>
                  <a href='https://www.linkedin.com/in/alvaro-leiva-gil-aaa6ba201/' target='_blank' >  <img src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536569.png?token=exp=1646798840~hmac=c1a6486ff96a97304f6fc09311875960' width='100' height='200px' /></a>
            </div>


    </div>
  )
}
