'use client';
import {useContext} from 'react'
import {NavBarContext} from './NavBarCont'
function useNAvBarContex() {
  return useContext(NavBarContext)
}


export  default useNAvBarContex
