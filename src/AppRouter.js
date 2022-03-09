import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Calculadora } from './screens/Calculadora'
import { Impermanent } from './screens/Impermanent'
import 'animate.css';

export const AppRouter = () => {




  return (
    <BrowserRouter>

    <Navbar/>
    
    <Routes>
        <Route path="/" element={<Impermanent />} />
        <Route path="calculadora" element={<Calculadora />} />
      </Routes>
    
    
    
    
    </BrowserRouter>
  )
}
