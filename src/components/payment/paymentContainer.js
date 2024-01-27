// Importa los componentes necesarios de React y Next.js
import React from "react";
import {
    PaymentElement,
    useStripe,
    useElements,
    Elements,
} from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";

// Crear una instancia de Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


// Componente que envuelve la lógica de pago
const PaymentContainer = () => {

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        appearance,
        clientSecret, // obtenido a partir de paymentintent de backend
    };

    return (
        <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            )}
        </div>
    );
};


// Form de stripe
const PaymentForm = () => {
    // Store a reference to Stripe
    // Access the Stripe library in your CheckoutForm component by using the useStripe() and useElements() hooks. 
    // If you need to access Elements via a class component, use the ElementsConsumer instead.
    const stripe = useStripe();
    const elements = useElements();

    // Set up the state
    // Initialize some state to keep track of the payment, show errors, and manage the user interface.
    const [message, setMessage] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const paymentElementOptions = {
        layout: "tabs",
    };


    const handleSubmit = async (e) => {

    };

    return (
        <>
            {/* Estilo del formulario (puedes moverlo a un archivo CSS si prefieres) */}
            <style jsx>{`
        /* Estilos del formulario */
            `}</style>

            {/* Contenido del formulario */}
            <form id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button disabled={isLoading || !stripe || !elements} id="submit">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </>
    );
};

export default PaymentContainer;