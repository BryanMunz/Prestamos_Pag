import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import router from 'next/router'

const Header = () => {
    const headerStyle = {
        backgroundColor: '#242735',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontSize: '1.5rem',
        padding: '20px',
    };

    const userInfoStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    };

    const userDataStyle = {
        flex: '1',
        textAlign: 'left',
        margin: '5px',
        fontSize: '1.3rem',
    };

    const goBack = () => {
        router.back(); // Navegar hacia atrás usando next/router
    };

    const patientName = "Nombre del usuario"; // Aquí puedes obtener el nombre del usuario
    const edad = "30 años";
    const sexo = "Masculino";
    const correo = "correo@example.com";
    const numeroExpediente = "123456789";

    // Regla @media para ajustar el padding en pantallas pequeñas
    const smallScreenPadding = `
        @media (max-width: 768px) {
            headerStyle.padding = '10px';
        }
    `;

    return (
        <div style={headerStyle}>
            <div style={{ alignSelf: 'flex-start' }}>
                <div onClick={goBack} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '1.3rem' }}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '10px' }} />
                    <span>Volver</span>
                </div>
                <h1 style={{ fontSize: '2rem', marginTop: '10px' }}>{patientName}</h1>
            </div>
            <div style={userInfoStyle}>
                <div style={userDataStyle}>
                    <p style={{ color: 'grey' }}>Edad:</p>
                    <p style={{ color: 'white' }}>{edad}</p>
                </div>
                <div style={userDataStyle}>
                    <p style={{ color: 'grey' }}>Sexo:</p>
                    <p style={{ color: 'white' }}>{sexo}</p>
                </div>
                <div style={userDataStyle}>
                    <p style={{ color: 'grey' }}>Correo:</p>
                    <p style={{ color: 'white' }}>{correo}</p>
                </div>
                <div style={userDataStyle}>
                    <p style={{ color: 'grey' }}>Número de expediente:</p>
                    <p style={{ color: 'white' }}>{numeroExpediente}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;