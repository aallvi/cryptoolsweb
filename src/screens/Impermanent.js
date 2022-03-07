import React, { useEffect, useState } from 'react';
import '../styles/impermanent.css'
import '../styles/normalize.css'


export const Impermanent = () => {


    const [inversion, setInversion] = useState('')

    
    const [precioActivoA, setPrecioActivoA] = useState(0)

  console.log(precioActivoA)

    const [precioActivoAFuturo, setPrecioActivoAFuturo] = useState(0)

    const [precioActivoB, setPrecioActivoB] = useState(0)
    const [precioActivoBFuturo, setPrecioActivoBFuturo] = useState(0)
    
    // aporte a la pool
    const cuantotengoA = (inversion/2)/precioActivoA
    const cuantotengoB = (inversion/2)/precioActivoB


    //liquidez activo a en monto
    const liqA = 1
    //liquidez activo b en monto
    const liqB = precioActivoA/precioActivoB
    //liquidez total en dolares
    const liqTotal = precioActivoA*liqA + precioActivoB*liqB

    // producto constante
    const productCTE = liqA * liqB

    // console.log(productCTE)

    // r2 
    const r2 = precioActivoAFuturo/precioActivoBFuturo
    // console.log('r2',r2)

    //porcentaje part

    const porcentajePart = inversion/liqTotal
   


    // LIQ FUTURA
    // const liqAFuturo = (productCTE/r2)^(1/2)
    const liqAFuturo = Math.sqrt(productCTE/r2)

    const liqBFuturo = (Math.sqrt(productCTE*r2))* precioActivoBFuturo

    const liqTotalFuturo = liqBFuturo*2

    // VALOR FINAL LIQUIDES DESPUES DE VARIACIONES DE PRECIO

    const finalValueLiq = liqTotalFuturo*porcentajePart

    // console.log(finalValueLiq)

    // VALOR SI UBIERAS HOLDEADO

    const valorHold = (cuantotengoA * precioActivoAFuturo) + (cuantotengoB * precioActivoBFuturo)
    // console.log(valorHold)

    // IMPERMANENT LOSS 

     const impermanent = (((valorHold -finalValueLiq)/valorHold)*100).toFixed(2)








  return (
      <div className='fondo' >

      
      <div className='container' >

      <p className='label' >Liquidity Provider</p>

      <div className='containerInput' >

            <div className='inputcuadrado' >

                    <label> Inversion Total </label>
                    <input className='inputStyle' type='number' placeholder='USD' onChange={e => setInversion(parseFloat(e.target.value)) } value={inversion ? inversion : ''} />
                    

            </div>

            <div className='inputcuadrado' >

                        <label> Precio Token A </label>
                        <input className='inputStyle' type='number' placeholder='Precio Inicial' onChange={e => setPrecioActivoA(parseFloat(e.target.value)) } value={precioActivoA ? precioActivoA : ''} />


            </div>
            <div className='inputcuadrado' >

                        <label> Precio Token B </label>
                        <input className='inputStyle' type='number' placeholder='Precio Inicial' onChange={e => setPrecioActivoB(parseFloat(e.target.value)) } value={precioActivoB ? precioActivoB : ''} />


            </div>
      
     


           </div>
             
             <div className='preciosFuturos'>
             <p >Precios Futuros</p>

             </div>


           <div className='containerInput' >

           

            <div className='inputcuadrado' >

                        <label> Precio Token A </label>
                        <input className='inputStyle' type='number' placeholder='Precio Futuro' onChange={e => setPrecioActivoAFuturo(parseFloat(e.target.value)) } value={precioActivoAFuturo ? precioActivoAFuturo : ''} />


            </div>
            <div className='inputcuadrado' >

                        <label> Precio Token B </label>
                        <input className='inputStyle' type='number' placeholder='Precio Futuro' onChange={e => setPrecioActivoBFuturo(parseFloat(e.target.value)) } value={precioActivoBFuturo ? precioActivoBFuturo : ''} />


            </div>
      
     


           </div>



           {
               precioActivoB > 0 && precioActivoA > 0 && precioActivoAFuturo >0 && precioActivoBFuturo >0 ?

              <>
                
           
              
               <p  className='resultadosTitulo' >Resultados</p>

               <div className='resultadoContainer' >
                   <div className='inversionToken' >
                   <p>Inversion Token A: <span>{inversion/2}$</span>   </p>
                   <p className='segundo' >Inversion Token B: <span>{inversion/2}$</span> </p>

                   </div>
                   
                    <div className='resultado' > 

                    <p>Valor si haces Hold <span>${valorHold.toFixed(0)} </span>  </p>
                    <p>Valor si provees liquidez <span>${finalValueLiq.toFixed(0)} </span>  </p>

                    <p> Impermanent Loss <span>{impermanent}%</span>  </p>

                    </div>

               </div>
          
              
              </> :

              <p>Ingresa precios validos para ver el resultado</p>
           }




      




      

         </div>
         
  
      </div>
  )
}
