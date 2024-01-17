import React from 'react';
import { useRouter } from 'next/router';
import { AgregarProtocolo } from '../Protocolo/AgregarProtocolo';

const EmptyProtocol = ( {paciente} ) => {
    const router = useRouter();

    const handleNuevoProtocoloClick = () => {
        // Redirige a la ruta deseada cuando se presiona el botón "Nuevo Protocolo"
        router.push('/protocolo/steps'); // Reemplaza '/nueva-pantalla' con la ruta correcta
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AgregarProtocolo paciente={paciente} />
            <button
                style={{
                    width: '100%',
                    backgroundColor: '#1B73F9',
                    border: 'none',
                    borderRadius: '22px',
                    padding: '12px 24px',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    outline: 'none',
                    boxSizing: 'border-box', // Asegura que el ancho incluya padding y borde
                }}
            >
                Asignar Protocolo Guardado
            </button>
            <div
                style={{
                    width: '100%',
                    backgroundColor: '#F79E1B',
                    borderRadius: '22px',
                    padding: '12px',
                    marginTop: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#ffffff', // Cambio de color a blanco
                    fontSize: '14px', // Ajuste del tamaño de fuente
                    lineHeight: '1.5', // Espaciado entre líneas
                    justifyContent: 'center',
                }}
            >
                <span style={{ marginRight: '8px' }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12" y2="8" />
                    </svg>
                </span>
                Este paciente no tiene aún ningún programa asignado
            </div>
        </div>
    );
};

export default EmptyProtocol;
