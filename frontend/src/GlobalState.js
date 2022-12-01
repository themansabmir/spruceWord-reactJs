import React, { createContext, useState } from 'react'
import ShopAPI from './api/ShopAPI'

export const GlobalState = createContext()

export const DataProvider = ({ children }) => {

    const [token,setToken]= useState(false) 

    const state={
        token : [token,setToken],
        shopAPI : ShopAPI()
}



    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>

    )
  
}

export default GlobalState