import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const FlowersContext = createContext()

function FlowersContextProvider({children}) {
    let [flowers,setFlowers] = useState([])
    let [originalFlowers,setOriginalFlowers] = useState([])

useEffect(()=>{
    axios.get("http://localhost:4000/flowers")
    .then(res =>{
        setFlowers(res.data)
        setOriginalFlowers(res.data)
    },[])
})

    const value = {
        flowers,setFlowers,
        originalFlowers,setOriginalFlowers
    }

  return (
    <div>
      <FlowersContext.Provider value={value}>
        {children}
      </FlowersContext.Provider>
    </div>
  )
}

export default FlowersContextProvider
