import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        navigate(-1)
    },[])
  return (
    <div></div>
  )
}

export default Redirect