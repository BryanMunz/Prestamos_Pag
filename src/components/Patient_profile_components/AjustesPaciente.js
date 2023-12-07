import React, { useState } from 'react';

const AjustesPaciente = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        fechaNacimiento: '',
        correoElectronico: '',
        telefono: '',
    });

    const handleChange = (e, fieldName) => {
        setFormData({ ...formData, [fieldName]: e.target.value });
    };

    const handleGuardar = () => {
        // Lógica para guardar los datos
        console.log('Datos guardados:', formData);
        // Aquí podrías enviar los datos a un servidor o realizar alguna acción
    };

    return (
        <form className="form-container">
            <div className="form-row">
                <label htmlFor="nombre">Nombre(s):</label>
                <input
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => handleChange(e, 'nombre')}
                />
            </div>
            <div className="form-row">
                <label htmlFor="apellidos">Apellido(s):</label>
                <input
                    id="apellidos"
                    type="text"
                    value={formData.apellidos}
                    onChange={(e) => handleChange(e, 'apellidos')}
                />
            </div>
            <div className="form-row">
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                <input
                    id="fechaNacimiento"
                    type="text"
                    value={formData.fechaNacimiento}
                    onChange={(e) => handleChange(e, 'fechaNacimiento')}
                />
            </div>
            <div className="form-row">
                <label htmlFor="correoElectronico">Correo Electrónico:</label>
                <input
                    id="correoElectronico"
                    type="text"
                    value={formData.correoElectronico}
                    onChange={(e) => handleChange(e, 'correoElectronico')}
                />
            </div>
            <div className="form-row">
                <label htmlFor="telefono">Número telefónico (Opcional):</label>
                <input
                    id="telefono"
                    type="text"
                    value={formData.telefono}
                    onChange={(e) => handleChange(e, 'telefono')}
                />
            </div>
            <button className="save-button" onClick={handleGuardar}>
                Guardar
            </button>

            <style>
                {`
                    .form-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }

                    .form-row {
                        width: calc(50% - 10px); /* Para dividir en dos columnas */
                        margin: 5px;
                        display: flex;
                        flex-direction: column;
                    }

                    .form-row label {
                        margin-bottom: 5px;
                    }

                    .form-row input {
                        padding: 5px;
                        width: 100%;
                    }

                    .save-button {
                        width: calc(50% - 10px); /* Ancho relativo al 50% del input con un pequeño espacio */
                        height: 50px;
                        margin: 0 auto;
                        margin-top: 20px;
                        background-color: #157FFB;
                        color: white;
                        padding: 12px; /* Ajusta el relleno */
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 16px;
                        transition: background-color 0.3s ease-in-out;
                    }

                    .save-button:hover {
                        background-color: #0e5da8;
                    }

                    @media screen and (max-width: 768px) {
                        .form-row {
                            width: 100%; /* Cambia a una columna cuando el ancho es menor */
                        }
                    }
                `}
            </style>
        </form>
    );
};

export default AjustesPaciente;
