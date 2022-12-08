import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function PublicRoutes(props) {
  const router = useRouter()

  if (typeof window !== 'undefined') {
    if(localStorage.getItem('token')){
      return props.children
    }else{
      return router.push('/');
    }
  }
  
}

export default PublicRoutes;
