import React, { useState } from 'react'

const ItemFiltro = ({text, value, border, active = false, handleFilterBotton}) => {

    switch (border) {
        case 'start':
            border = 'rounded-start-pill';
            break;
    
        case 'end':
            border = 'rounded-end-pill'
            break;
    }

  return (
    <button className={`btn flex-fill border rounded-0 m-0 p-0 ${border} ${active ? 'bg-primary text-white' : ''}`} onClick={ () => handleFilterBotton(text, value)}>
        {text}
    </button>
  )
}

export default ItemFiltro