// // globalState.js
// import { useReducer } from 'react'

// // Definir el estado inicial
// export const initialState = {
//     flag: false,
//     protocoloId: ''
// }

// // Definir el reducer
// export const reducer = (state, action) => {
//     switch (action.type) {
//         case 'UPDATE_FLAG':
//             return { ...state, flag: action.payload }
//         case 'UPDATE_PROTOCOLO':
//             return { ...state, protocoloId: action.payload }
//         default:
//             return state
//     }
// }

// // Crear el hook personalizado para el contexto
// export const useGlobalState = () => {
//     return useReducer(reducer, initialState)
// }
