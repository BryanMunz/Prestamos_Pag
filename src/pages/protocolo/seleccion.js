// ExerciseSelectionScreen.js
import ExerciseCard from '@/components/Protocolo/exercise_card';
import React, { useState } from 'react';

const ExerciseSelectionScreen = () => {
    // Datos de ejemplo para las tarjetas
    const cardsData = [
        { id: 1, imageSrc: 'ruta-imagen-1.jpg', title: 'Título 1' },
        { id: 2, imageSrc: 'ruta-imagen-2.jpg', title: 'Título 2' },
        { id: 3, imageSrc: 'ruta-imagen-3.jpg', title: 'Título 3' },
        // Agrega más objetos según sea necesario
    ];

    return (
        <div style={{ textAlign: 'center', margin: '0 auto', padding: '50px' }}>
            <h1>Selecciona los ejercicios que deseas prescribir</h1>



            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {cardsData.map((card) => (
                    <ExerciseCard key={card.id} imageSrc={card.imageSrc} title={card.title} />
                ))}
            </div>

        </div>
    );
};

export default ExerciseSelectionScreen;
