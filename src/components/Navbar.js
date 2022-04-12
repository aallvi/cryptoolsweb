import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)





  return (
    <nav>


      {toggleMenu &&

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
                  
      
      
      }

      {screenWidth > 770 &&
      
      
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
      
      
      
      }
    
    

    <button className="icon" onClick={() => setToggleMenu(!toggleMenu) }  >
        <i className="fa fa-bars"></i>
      </button>


    </nav>
  )
}
