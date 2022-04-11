import React, { useEffect, useState } from 'react'
import { CotizacionHisto } from './CotizacionHisto'
import { FormularioHisto } from './FormularioHisto'
import './precio-cripto.css'

export const PrecioCriptoHisto = () => {
    

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
          `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${criptomoneda}&tsym=${moneda}&limit=730&api_key=36681360f91a1caec50e5b51b172b77f3ff58a5b8dcf33660c59ec9ba00bd952`
        );
        const json = await response.json();
         
        setCargando(true)

        
        setTimeout(() => {

            setResultado([json.Data.Data,info]) 
       
        guardarConsultarAPI(false)

        setCargando(false)
          
            
        }, 10);
          
        // setResultado([json.DISPLAY[criptomoneda][moneda],info])
        
        
     
      }

    }
    cotizarCripto()
   
  }, [consultarAPI])

  // const componente = cargando ? <p>cargando</p>  : <CotizacionHisto resultado={resultado} criptomoneda={criptomoneda} info={info} guardarConsultarAPI={guardarConsultarAPI} consultarAPI={consultarAPI} moneda={moneda} />
  
//  console.log('moneda',moneda)
//  console.log('criptomoneda',criptomoneda)

console.log('resupuesta',resultado)
console.log(typeof resultado)


  return (

    <div className='container animate__animated animate__fadeIn' >

<p className='label' >Precios Historicos de Criptomonedas</p>
    

    <FormularioHisto moneda={moneda} setMoneda={setMoneda} criptomoneda={criptomoneda} setCriptoMoneda={setCriptoMoneda} guardarConsultarAPI={guardarConsultarAPI} setInfo={setInfo} />
 
     {
       resultado[0]  && <CotizacionHisto resultado={resultado} criptomoneda={criptomoneda} info={info} guardarConsultarAPI={guardarConsultarAPI} consultarAPI={consultarAPI} moneda={moneda} />


     }
    {/* {componente} */}


    </div>
  )
}
