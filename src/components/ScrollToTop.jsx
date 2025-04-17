import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


export const ScrollToTop = () => {
    const {pathname} = useLocation()
  return (
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])
  )
  return null;
}
