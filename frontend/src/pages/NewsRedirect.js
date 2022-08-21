import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const NewsRedirect = () => {
    const navigate = useNavigate();
    let { blogId } = useParams();

    useEffect(()=>{
        navigate('/news/'+blogId)
    },[])
  return (
    <div></div>
  )
}

export default NewsRedirect