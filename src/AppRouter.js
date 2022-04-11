import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Calculadora } from './screens/Calculadora'
import { Impermanent } from './screens/Impermanent'
import 'animate.css';
import { Footer } from './components/Footer'
import { PrecioCripto } from './screens/PrecioActual.js/PrecioCripto'
import { PrecioCriptoHisto } from './screens/PrecioHistorico.js/PrecioCriptoHisto'

export const AppRouter = () => {




  return (
    <BrowserRouter>

    <Navbar/>
    
    <Routes>
        <Route path="/" element={<Impermanent />} />
        <Route path="calculadora" element={<Calculadora />} />
        <Route path="precio-criptomonedas" element={<PrecioCripto />} />
        <Route path="precio-criptomonedas-historico" element={<PrecioCriptoHisto />} />
      </Routes>
    
    
    <Footer/>
    
    </BrowserRouter>
  )
}
