// Importa los módulos necesarios
import React from 'react';

// Estilo para el contenedor
const containerStyle = {
    backgroundColor: '#FAFCFE',
    padding: '20px',
    borderRadius: '8px',
    width: '300px', // Incremento de 10 puntos
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
};

// Estilo para el título
const titleStyle = {
    textAlign: 'left',
    fontSize: '24px',
    marginBottom: '10px',
};

// Estilo para el texto de la izquierda (en negrita)
const boldTextStyle = {
    fontWeight: 'bold',
};

// Estilo para el precio (en negrita y color específico)
const boldBlueTextStyle = {
    fontWeight: 'bold',
    color: '#157AFA',
};

// Estilo para el divider
const dividerStyle = {
    border: '1px solid #E2E8F0',
    margin: '15px 0',
};

// Estilo para las filas
const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
};

// Componente principal
const OrderSummary = () => {
    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>Resumen de Orden</h2>
            <div style={dividerStyle}></div>
            <div style={rowStyle}>
                <span style={boldTextStyle}>Plan</span>
                <span>Mensual</span>
            </div>
            <div style={dividerStyle}></div>
            <div style={rowStyle}>
                <span style={boldTextStyle}>Subtotal</span>
                <span>$2,799 MXN</span>
            </div>
            <div style={dividerStyle}></div>
            <div style={rowStyle}>
                <span style={boldTextStyle}>Total a Pagar</span>
                <span style={boldBlueTextStyle}>$2,799 MXN</span>
            </div>
        </div>
    );
};

export default OrderSummary;
