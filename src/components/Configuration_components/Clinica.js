import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const InformacionOrganizacion = () => {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Mi Información Profesional</h1>
            <div className="row mb-3">
                <div className="col">
                    <h2>Información Profesional</h2>
                    <p>Ingresa tu información profesional para poder generar reportes y documentos de seguimiento.</p>
                    <hr />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="cedula" className="form-label">Cédula Profesional:</label>
                    <input type="text" className="form-control" id="cedula" name="cedula" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="especialidad" className="form-label">Especialidad:</label>
                    <input type="text" className="form-control" id="especialidad" name="especialidad" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="profesion" className="form-label">Profesión:</label>
                    <input type="text" className="form-control" id="profesion" name="profesion" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="instituto" className="form-label">Instituto que otorga la cédula:</label>
                    <input type="text" className="form-control" id="instituto" name="instituto" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <h2>Información del Consultorio</h2>
                    <hr />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="consultorio" className="form-label">Nombre del consultorio:</label>
                    <input type="text" className="form-control" id="consultorio" name="consultorio" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="direccion" className="form-label">Dirección:</label>
                    <input type="text" className="form-control" id="direccion" name="direccion" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="pais" className="form-label">Pais:</label>
                    <input type="text" className="form-control" id="pais" name="pais" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="estado" className="form-label">Estado:</label>
                    <input type="text" className="form-control" id="estado" name="estado" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="ciudad" className="form-label">Ciudad:</label>
                    <input type="text" className="form-control" id="ciudad" name="ciudad" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="cp" className="form-label">C.P.:</label>
                    <input type="text" className="form-control" id="cp" name="cp" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label">Teléfono:</label>
                    <input type="text" className="form-control" id="telefono" name="telefono" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <button type="button" className="btn btn-primary" style={{ width: '100%', backgroundColor: '#2278CF' }}>
                        Guardar
                    </button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <h2>Logo de tu Marca Personal / Profesional</h2>
                    <hr />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-3">
                    <div className="position-relative">
                        <img
                            src="ruta_de_la_imagen" // Ruta de tu imagen
                            alt="Logo"
                            className="img-fluid rounded-circle"
                        />
                        <button
                            type="button"
                            className="btn btn-link position-absolute top-0 end-0"
                            style={{ zIndex: 1 }}
                        >
                            <FontAwesomeIcon icon={faPencilAlt} style={{ color: '#000', fontSize: '1.5em' }} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-3">
                    <button type="button" className="btn btn-danger" style={{ backgroundColor: '#EF534F' }}>
                        Guardar Imagen
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InformacionOrganizacion;
