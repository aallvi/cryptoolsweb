import React, { useState } from 'react'
import '../styles/calculadora.css'

export const Calculadora = () => {

      
    // input precio actual de la cripto 
    const [precioCompra, setPrecioCompra] = useState(0)

    // input cantidad invertida
    const [cantidadInvertida, setcantidadInvertida] = useState(0)
    // input precio de moneda al momento de venta
    const [precioVenta, setPrecioVenta] = useState(0)

    const [ganancia, setGanancia] = useState(0)
    const [final, setFinal] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    const [cotizar, setcotizar] = useState(false)

    const gananciaFinal= () =>{

      if(precioCompra === 0 || cantidadInvertida === 0 || precioVenta === 0){

        alert(
            "Debes rellenar todos los campos",
            "Ingresa montos validos",
            [
              { text: "OK" }
            ]
          );

          return
      }

       const montoFinal = ((precioVenta/precioCompra) * cantidadInvertida)
       setFinal(montoFinal.toFixed(2))
       const utilidad = montoFinal-cantidadInvertida
       setGanancia(utilidad.toFixed(2))
       const variacion = ((precioVenta/precioCompra) - 1)*100
       setPorcentaje(variacion.toFixed(2))

       setcotizar(true)
    }


    console.log('precioCompra',precioCompra)
    console.log('cantidadInvertida',cantidadInvertida) 
    console.log('precioVenta',precioVenta) 

  console.log('ganancia',ganancia)


  return (
    <div className='container animate__animated animate__fadeIn' >

    <p className='label' >Calculadora de Ganancias</p>
    <p className='subtitulo' >Proyecta compras, calcula ganancias y perdidas</p>  
    <p className='subtituloFiat' >Puedes ingresar los valores en la moneda fiat preferida</p>  

    <div className='containerInput' >

          <div className='inputData' >

                  <label className='labelCalculadora' > Precio Compra </label>
                  <input className='inputStyle' type='number'  onChange={e => setPrecioCompra(e.target.value)}  />
                  

          </div>

          <div className='inputData' >

                      <label> Cantidad Invertida </label>
                      <input className='inputStyle' type='number'  onChange={e =>setcantidadInvertida(e.target.value)}  />


          </div>
          <div className='inputData' >

                      <label> Precio Venta Cripto </label>
                      <input className='inputStyle' type='number'  onChange={e => setPrecioVenta(e.target.value) } />


          </div>
    
   


         </div>
           
           <button className='buttonCotizar' onClick={gananciaFinal} >
               <p>Calcular</p>
           </button>


         
         {
             cotizar && 
             <div className='resultadoCalculadora' >

              <p > Monto Final = <span>${final}</span>  </p>
              <p> Ganancias en $ = <span>${ganancia}</span>  </p>
              <p> Variacion en % = <span>{porcentaje}%</span>  </p>



             </div>
         }


        



    




    

       </div>
  )
}
