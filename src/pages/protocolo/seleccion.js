// ExerciseSelectionScreen.js
import React, { useState } from 'react';

const ExerciseSelectionScreen = () => {
    // Ejemplo de datos de ejercicio (puedes reemplazarlos con tu propia lista de ejercicios)
    const exercises = [
        { id: 1, name: 'Ejercicio 1', image: 'exercise1.jpg', isFavorite: false },
        { id: 2, name: 'Ejercicio 2', image: 'exercise2.jpg', isFavorite: true },
        // ... más ejercicios
    ];

    const [selectedExercises, setSelectedExercises] = useState([]);

    const toggleSelectExercise = (exerciseId) => {
        // Lógica para seleccionar/deseleccionar un ejercicio
        // Implementa según sea necesario
    };

    const toggleFavoriteExercise = (exerciseId) => {
        // Lógica para marcar/desmarcar como favorito un ejercicio
        // Implementa según sea necesario
    };

    return (
        <div className="continer">
            <h1>Selecciona los ejercicios que deseas prescribir</h1>
        </div>
    );
};

export default ExerciseSelectionScreen;
