import React, { useEffect, useState } from 'react'
import { Cotizacion } from './Cotizacion'
import { Formulario } from './Formulario'
import './precio-cripto.css'

export const PrecioCripto = () => {
    
  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptoMoneda] = useState('')

  const [consultarAPI, guardarConsultarAPI] = useState(false)
  const [resultado, setResultado] = useState({})

  const [cargando, setCargando] = useState(false)

  const [info, setInfo] = useState([])

  useEffect(() => {

    const cotizarCripto = async () => {

      if(consultarAPI){
        // console.log('listo para cotizar')
  
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=36681360f91a1caec50e5b51b172b77f3ff58a5b8dcf33660c59ec9ba00bd952`
        );
        const json = await response.json();

        setCargando(true)

        setTimeout(() => {

          
        setResultado([json.DISPLAY[criptomoneda][moneda],info])

       
        
        guardarConsultarAPI(false)

        setCargando(false)
          
        }, 1);
     
      }

    }
    cotizarCripto()
   
  }, [consultarAPI])

  const componente = cargando ? <p>Cargando..</p> : <Cotizacion resultado={resultado} criptomoneda={criptomoneda} info={info} guardarConsultarAPI={guardarConsultarAPI} consultarAPI={consultarAPI} />

   console.log('resultado',resultado)


  return (

    <div className='container' >

<p className='label' >Precios Criptomonedas</p>
    


    <Formulario moneda={moneda} setMoneda={setMoneda} criptomoneda={criptomoneda} setCriptoMoneda={setCriptoMoneda} guardarConsultarAPI={guardarConsultarAPI} setInfo={setInfo}  />

    <Cotizacion resultado={resultado} criptomoneda={criptomoneda} info={info} guardarConsultarAPI={guardarConsultarAPI} consultarAPI={consultarAPI} />

     
    </div>
  )
}
