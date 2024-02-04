// AppStateContext.js
import React, { createContext, useReducer, useContext } from 'react'

// Definir el contexto
const AppStateContext = createContext()

// Definir el proveedor de contexto
export const AppStateProvider = ({ children }) => {
    const initialState = {
        protocoloId: '',
    }

    // Reducer para manejar las acciones
    const reducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_PROTOCOLO_ID':
                return {
                    ...state,
                    protocoloId: action.payload,
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}

// Función de utilidad para consumir el contexto en un componente
export const useAppState = () => {
    return useContext(AppStateContext)
}
