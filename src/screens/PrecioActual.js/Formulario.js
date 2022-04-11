import React, { useEffect, useState } from 'react'
import Select from 'react-select'
export const Formulario = ({moneda,setMoneda,criptomoneda,setCriptoMoneda,guardarConsultarAPI,setInfo}) => {

    const [criptodata, setCriptoData] = useState([])

    useEffect(() => {

        const constularAPI = async() => {
        
            try {
                const response = await fetch(
                  'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD'
                );
                const json = await response.json();
             
                return setCriptoData(json.Data)
                
              } catch (error) {
                console.error(error);
              }

        }

        constularAPI()
        
    }, [])
  

    const obtenerMoneda = (moneda) => {
        setMoneda(moneda)

    }
    const obtenerCriptoMoneda = (criptomoneda) => {
        setCriptoMoneda(setSelectedOptionCripto)


        
    }

    const cotizarPrecio = () => {
        

        if(selectedOption.value === 'none' || selectedOptionCripto.value === 'none' ) {
            alert(
                'Error: ambos campos son obligatorios',
                'Ambos campos son obligatorios',
                [
                    {text: 'OK'}
                ]
                
                )
                return;
          }

        //   se pasa la validacion

        setCriptoMoneda(selectedOptionCripto.value)
        setMoneda(selectedOption.value)


          if(criptomoneda !== '' ){
       
            
         }

          guardarConsultarAPI(true)

          console.log('cotizando')
    }


    const options = [
        { value: 'USD', label: 'Dolar' },
        { value: 'CLP', label: 'Peso Chileno' },
        { value: 'MXN', label: 'Peso Mexicano' },
        { value: 'COL', label: 'Peso Colombiano' },
        { value: 'ARS', label: 'Peso Argentino' },
        { value: 'EUR', label: 'Peso Euro' },
        { value: 'GBP', label: 'Libra' }
       
      ]

      const [selectedOption, setSelectedOption] = useState({ value: 'none', label: 'Elige...' });
      const [selectedOptionCripto, setSelectedOptionCripto] = useState({ value: 'none', label: 'Elige...' });

 
      

        const arreglo= []

        for (let i = 0; i < criptodata.length; i++) {
             arreglo[i] = { 'label' : criptodata[i].CoinInfo.FullName, 'value':criptodata[i].CoinInfo.Name}
             

        }
  
        


      console.log(selectedOption)

  return (
    <div>

        <label>Moneda Nacional</label>

       <Select options={options}  onChange={setSelectedOption}  />

       <label>Criptomoneda</label>

       <Select options={arreglo}  onChange={setSelectedOptionCripto}  />

     
       <button className='botonCotizar' onClick={cotizarPrecio} >
         <p>Cotizar</p> 
       </button>

    </div>
  )
}

{/* <Picker.Item label="Seleccione" value="" style={{color:'black'}} />
<Picker.Item label="Dolar" value="USD" style={{color:'black'}} />
<Picker.Item label="Peso Chileno" value="CLP" style={{color:'black'}} />
<Picker.Item label="Peso Mexicano" value="MXN" style={{color:'black'}} />
<Picker.Item label="Peso Colombiano" value="COL" style={{color:'black'}} />
<Picker.Item label="Peso Argentino" value="ARS" style={{color:'black'}} />
<Picker.Item label="Euro" value="EUR" style={{color:'black'}} />
<Picker.Item label="Libra" value="GBP" style={{color:'black'}} /> */}