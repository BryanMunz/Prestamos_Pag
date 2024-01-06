import ReusableExerciseDosage from '@/components/Protocolo/exercise_dosage_card';
import React, { useState } from 'react';
import DuracionScreen from './duracion';
import ItemsDuracionScreen from '@/components/Protocolo/ItemsDuracion';

const ComprobacionProtocoloScreen = () => {

    const exercises = [
        { id: 'exercise1', title: 'Exercise 1', imageUrl: 'url1' },
        { id: 'exercise2', title: 'Exercise 2', imageUrl: 'url2' },
        // ... otras tarjetas de ejercicios
    ];


    const [protocoloGuardado, setProtocoloGuardado] = useState(false);
    const [nombreProtocolo, setNombreProtocolo] = useState('');
    const [comentarios, setComentarios] = useState('');

    const handleGuardarProtocolo = (e) => {
        setProtocoloGuardado(e.target.checked);
    };

    const handleNombreProtocolo = (e) => {
        setNombreProtocolo(e.target.value);
    };

    const handleComentarios = (e) => {
        setComentarios(e.target.value);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                margin: '0 auto',
                padding: '50px'
            }}
        >
            <h1>Comprueba los elementos del programa de ejercicios.</h1>
            <div
                style={{
                    margin: '20px',
                }}
            >
                <label>
                    <input
                        type="checkbox"
                        checked={protocoloGuardado}
                        onChange={handleGuardarProtocolo}
                        style={{ marginRight: '5px' }}
                    />
                    Guardar protocolo en la biblioteca de programas
                </label>
            </div>
            <div style={{
                margin: '20px',
                width: '100%', // Asegura que el contenedor se expanda al 100% del ancho disponible
            }}>
                <h6>Nombre de Protocolo</h6>
                <div style={{ display: 'flex', justifyContent: 'center' }}> {/* Contenedor que controlará el ancho del input */}
                    <input
                        type="text"
                        value={nombreProtocolo}
                        onChange={handleNombreProtocolo}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{
                    margin: '20px'
                }} >
                    <h6>Comentarios</h6>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <textarea
                            value={comentarios}
                            onChange={handleComentarios}
                            style={{ width: '100%', maxWidth: '800px', minHeight: '100px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                        />
                    </div>
                </div>
            </div>

            <h6>Duración del Programa</h6>
            <ItemsDuracionScreen />
            {/* Utiliza ExerciseDosage */}
            <h6>Dosificación del Programa</h6>
            <ReusableExerciseDosage items={exercises} />

        </div>
    );
};

export default ComprobacionProtocoloScreen;
