// Importa los componentes necesarios de React y Next.js
import React, { useState } from 'react'; // Asegúrate de importar useState desde React
import axios from 'axios';

// Estilo CSS para el contenedor de pago
const paymentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
};

// Estilo CSS para los inputs y el botón
const inputStyle = {
    width: '100%',
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const spacedInputStyle = {
    ...inputStyle,
    width: '90%',
    marginRight: '15px', // Espacio adicional entre los inputs
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#5D4FC4',
    color: 'white',
    cursor: 'pointer',
    border: 'none'
};

// Página principal
const PaymentContainer = () => {

    const [value, setValue] = useState(20); // Establecer el valor inicial a 20
    const [currency, setCurrency] = useState('mxn'); // Establecer el valor inicial a 'mxn'
    const [paymentPlatform, setPaymentPlatform] = useState('stripe'); // Establecer el valor inicial a 'stripe'

    const handlePayment = async () => {
        try {
            // Realizar la solicitud POST al endpoint de pago en Laravel
            const response = await axios.post('/api/payments/pay', {
                value,
                currency,
                payment_platform: paymentPlatform,
            });

            // Manejar la respuesta según sea necesario
            console.log(response.data);

            // Redirigir a la página de aprobación en el cliente
            // (esto podría hacerse con react-router-dom u otra solución de enrutamiento en Next.js)
        } catch (error) {
            console.error(error);
            // Manejar el error según sea necesario
        }
    };


    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {/* Contenedor de pago */}
            <div style={paymentContainerStyle}>
                {/* Título y imagen a la derecha */}
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <p style={{ marginRight: '40px' }}>Pago seguro mediante tarjeta</p>
                    <img src="/images/payment_platforms/mastercard.png" alt="mastercard" style={{ width: '40px', marginRight: '10px' }} />
                    <img src="/images/payment_platforms/visa.png" alt="visa" style={{ width: '50px' }} />
                </div>

                {/* Input para el número de tarjeta */}
                <label style={{ width: '100%', textAlign: 'left' }}>
                    Número de tarjeta <span style={{ color: 'red' }}>*</span>
                    <input type="text" placeholder="**** **** **** ****" style={inputStyle} required />
                </label>

                {/* Inputs para fecha de caducidad y código de tarjeta */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label style={{ textAlign: 'left' }}>
                        Fecha de caducidad <span style={{ color: 'red' }}>*</span>
                        <input type="text" placeholder="MM/AA" style={spacedInputStyle} required />
                    </label>
                    <label style={{ textAlign: 'left' }}>
                        Código de tarjeta <span style={{ color: 'red' }}>*</span>
                        <input type="text" placeholder="CVV" style={spacedInputStyle} required />
                    </label>
                </div>

                <img src="/images/payment_platforms/stripe.png" alt="stripe" style={{ width: '100px', marginRight: '20px', alignSelf: 'flex-start', marginBottom: '20px' }} />

                {/* Botón para realizar el pedido */}
                <button style={buttonStyle} onClick={handlePayment}>Realizar el pedido</button>
            </div>
        </div>
    );
};

export default PaymentContainer;
