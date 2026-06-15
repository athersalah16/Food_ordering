'use client'
import {createContext,useState} from 'react'
export const NavBarContext = createContext();
function NavBarProvider({children}) {
  const [route, setRoute] = useState("Home");
    
  return (
    
      <NavBarContext.Provider value={{ route, setRoute }}>
        {children}
      </NavBarContext.Provider>
   
  )
}

export default NavBarProvider
