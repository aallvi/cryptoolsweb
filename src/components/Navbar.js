import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav>
    
    <ul>
        <li>
            <NavLink
            to="precio-criptomonedas"
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
            Precios Criptomonedas
          </NavLink>
          
          </li>


        <li>

        <NavLink
            to="precio-criptomonedas-historico"
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
            Precios Historicos Criptomonedas
          </NavLink>

        </li>




        <li>

        <NavLink
            to="calculadora"
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
            Calculadora
          </NavLink>


        </li>


        <li>
         
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'activeClassName' : 'BotonNav'
            }
          >
            Impermanent Loss
          </NavLink>

        </li>
        


    </ul>




    </nav>
  )
}
