import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';

const SubscriptionPage = () => {
    const [showPlanDetails, setShowPlanDetails] = useState(true);

    const handleChangeView = () => {
        setShowPlanDetails(!showPlanDetails);
    };

    return (
        <div className="container mt-4">
            <h1>Mi Suscripción</h1>
            <p>Estatus de Suscripción</p>
            <hr />

            {showPlanDetails ? (
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Plan Mensual</h5>
                                <p className="card-text">Tu suscripción vigente termina en X días.</p>
                                <p className="card-text">Tu suscripción se encuentra activa hasta el 02/10/2026.</p>
                                <button className="btn btn-primary" style={{ backgroundColor: '#F79E1B' }} onClick={handleChangeView}>
                                    Cambiar Plan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Pago</h5>
                                <p className="card-text">Tu próxima renovación será de $259 MXN y se actualizará el 02/12.</p>
                                <img
                                    src="ruta_de_la_imagen_procesador_de_pago" // Ruta de la imagen del procesador de pago
                                    alt="Procesador de Pago"
                                    className="img-fluid"
                                />
                                <p className="card-text mt-3">Tarjeta MasterCard que termina en XXXX</p>
                                <p className="card-text">Vencimiento: 04/2029</p>
                                <button className="btn btn-primary">Actualizar Método de Pago</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Actualiza tu Plan</h5>
                                <h6 className="card-title">Qué incluye la plataforma Biobotix?</h6>
                                <ul className="list-group mt-3">
                                    <li className="list-group-item d-flex align-items-center">
                                        <BsCheck className="me-3 text-success" />
                                        Control de pacientes sin límites.
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <BsCheck className="me-3 text-success" />
                                        Seguimiento de adherencia de pacientes.
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <BsCheck className="me-3 text-success" />
                                        Biblioteca de ejercicios en constante actualización.
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <BsCheck className="me-3 text-success" />
                                        Aplicación Web, iOS, Android para pacientes.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-md-6 d-flex align-items-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="plan" id="monthlyPlan" />
                                            <label className="form-check-label fw-bold fs-4" htmlFor="monthlyPlan">
                                                Plan mensual
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        <p className="fs-4">$259 MXN</p>
                                    </div>
                                </div>
                                <p className="fs-8">Descúbre y enamórate de Biobotix</p>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="plan" id="annualPlan" />
                                            <label className="form-check-label fw-bold fs-4" htmlFor="annualPlan">
                                                Plan anual
                                            </label>
                                            <small className="float-end" style={{ color: '#1B73F9' }}>Ahorra 10% </small>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        <p className="fs-4">$2,799 MXN</p>
                                    </div>
                                </div>
                                <p className="fs-8">Transforma tu práctica clínica. Sin plazos forzosos, cancela cuando quieras</p> {/* Tamaño de fuente reducido */}
                                <div className="d-grid mt-3">
                                    <button className="btn btn-primary" style={{ backgroundColor: '#1B73F9', marginTop: '50px' }}>Seleccionar</button>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid mt-3">
                            <button className="btn btn-secondary" style={{ backgroundColor: '#FF0000', marginTop: '50px' }}>Cancelar suscripción</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubscriptionPage;
