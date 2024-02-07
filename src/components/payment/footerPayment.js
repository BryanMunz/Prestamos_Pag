// Importa los módulos necesarios
import React from 'react';
import PaymentContainer from './paymentContainer';
import OrderSummary from './orderSummary';

// Estilo para el contenedor principal
const screenStyle = {
    display: 'flex',
    flexDirection: 'column', // Por defecto, ordenado en columna
    alignItems: 'center',
    padding: '20px',
};

// Estilo para los textos adicionales
const textStyle = {
    textAlign: 'center',
    marginBottom: '20px',
};

// Componente principal
const FooterPayment = () => {
    return (
        <div style={screenStyle}>
            <h2 style={textStyle}>Ingrese su información de pago</h2>
            <h3 style={textStyle}>Y comience a utilizar inmediatamente Biobotix</h3>
            {/* Establece el orden en fila para pantallas grandes */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <PaymentContainer />
                <OrderSummary />
            </div>
        </div>
    );
};

export default FooterPayment;
