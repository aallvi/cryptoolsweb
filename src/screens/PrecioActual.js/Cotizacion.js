import React from 'react'

export const Cotizacion = ({resultado,criptomoneda,info}) => {

    if(Object.keys(resultado).length ===0) return null

  const logo = resultado[0].IMAGEURL


  const url = `https://www.cryptocompare.com/${logo}`

  return (
    <div className='contenedorCotizacion ' >

    <p> Precio Actual:  {resultado[0].PRICE}</p>
    <p> Variacion en 24h: {resultado[0].CHANGEPCTDAY}%</p>
   
   <div className='contenedorIMG ' >
   <img src={url} width={150} height={200} />

   </div>
    </div>
  )
}
