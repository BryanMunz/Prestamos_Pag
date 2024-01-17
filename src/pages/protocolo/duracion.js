import ItemsDuracionScreen from '@/components/Protocolo/ItemsDuracion';
import React, { useState } from 'react';

const DuracionScreen = ( {setData} ) => {
    
    return (
        <div style={{ textAlign: 'center', margin: '0 auto', paddingTop: '50px' }}>
            <h1>Selecciona los días y duración del programa de ejercicios</h1>
            <ItemsDuracionScreen setData={setData} />

        </div>
    );
};

export default DuracionScreen;
