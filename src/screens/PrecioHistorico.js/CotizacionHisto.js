import React, { useEffect, useState } from 'react'
import numbro from 'numbro'


export const CotizacionHisto = ({resultado,criptomoneda,info,moneda}) => {



  const numberr = numbro(1000000).format({thousandSeparated: true})

  const [calculo, setcalculo] = useState(0)
  
  const [miles, setmiles] = useState(0)

   const [coin, setcoin] = useState(moneda)


 

 

    useEffect(() => {

      

      const calcular = () => {
      
        const anos2 = resultado[0][0].open
        const anos1 = resultado[0][365].open
        const meses6 = resultado[0][547].open
  
        if(anos2 > 0) {
          setcalculo(parseFloat(anos2) )
          return
        }
        else if (anos1 > 0) {
          setcalculo(parseFloat(anos1))
          return
        }else setcalculo(parseFloat(meses6))
  
      }
      calcular()
      // setchange(!change)
      setcoin(moneda)
    }, [resultado[0][730]])


    useEffect(() => {
      

      setmiles(numbro(parseFloat(((resultado[0][730].open/calculo)*1000).toFixed(1))).format({thousandSeparated: true}))
      
    }, [calculo])
   
    

    const [preciostodos, setpreciostodos] = useState([])



    useEffect(() => {
    let arry = [];
    for (let i = 0; i < 731; i++) {
       arry[i] = resultado[0][i].high;
    }

     setpreciostodos(arry)

              
    }, [resultado])
    
    

    let ATH = Math.max(...preciostodos)


    // console.log(ATH)
    

    const ATHFORMAT = numbro(ATH).format({thousandSeparated: true})

    
    const preciohoy = numbro(resultado[0][730].open).format({thousandSeparated: true})
    const precio6meses = numbro(resultado[0][547].open).format({thousandSeparated: true})
    const precio1ano = numbro(resultado[0][365].open).format({thousandSeparated: true})
    const precio2ano = numbro(resultado[0][0].open).format({thousandSeparated: true})
    // if(Object.keys(resultado).length ===0) return null

    const [first, setfirst] = useState(false)

 console.log(first)
  return (
    <>
       <div className='contenedorCotizacionHisto'>
            {/* <Text style={{...styles.texto, color:'green', fontWeight:'bold'}}> Maximo Historico = { ATHFORMAT === -Infinity ? <Text style={styles.click}>Ver</Text> : <Text style={styles.span}>${ATHFORMAT}</Text> }</Text> */}
    
    <p> Maximo Historico: <span>${ATHFORMAT} </span>   </p>
    <p> Precio apertura hoy: <span>${preciohoy}</span> </p>
    <p> Precio hace 6 meses:  <span>${precio6meses}</span> </p>
    <p> Precio hace 1 año: <span>${precio1ano} </span> </p>
    <p> Precio hace 2 años: <span>${precio2ano}</span> </p>

  
    

    </div>

    <div className='contenedor2anos' >
    <p> Inversion de 1000 USD hace {resultado[0][0].open > 0 ? '2 años' : resultado[0][365].open > 0 ? '1 año' : resultado[0][547].open >0 ? '6 meses' : null}  </p>
    <p className='text-center' >Hoy  <span>${miles}</span>   </p>
  </div>
    </>
 
  )
}
