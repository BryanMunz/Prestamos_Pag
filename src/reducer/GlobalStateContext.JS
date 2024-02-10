// GlobalStateContext.js
import React, { createContext, useContext, useReducer } from 'react'

// Define tu estado inicial
const initialState = {
    flag: false,
    protocoloId: '',
}

// Define tu reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FLAG':
            return { ...state, flag: action.payload }
        case 'UPDATE_PROTOCOLO':
            return { ...state, protocoloId: action.payload }
        default:
            return state
    }
}
const GlobalStateContext = createContext()

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export const useGlobalState = () => {
    return useContext(GlobalStateContext)
}
