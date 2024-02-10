import React from 'react';

const MiPerfil = () => {
    return (
        <div className="perfil-container">
            <h1>Mi Perfil</h1>
            <div className="input-column">
                <label htmlFor="nombre">Nombre Completo:</label>
                <input type="text" id="nombre" name="nombre" />

                <label htmlFor="apellido">Email:</label>
                <input type="text" id="apellido" name="apellido" />

                <button className="custom-button">Guardar</button>
            </div>
            <style jsx>{`
                .perfil-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 5px;
                }

                .input-column {
                    display: flex;
                    flex-direction: column;
                    margin-top: 20px;
                }

                label {
                    margin-bottom: 5px;
                }

                input {
                    padding: 8px;
                    margin-bottom: 10px;
                }

                .custom-button {
                    background-color: #2278CF;
                    border: none;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 50px
                }

                .custom-button:hover {
                    background-color: #185a8d;
                }
            `}</style>
        </div>
    );
};

export default MiPerfil;
