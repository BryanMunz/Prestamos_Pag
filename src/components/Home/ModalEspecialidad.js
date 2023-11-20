import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import styles from '../../style/dashboard/Modal.module.css'

const ModalEspecialidad = ({ setPaso }) => {
    const [show, setShow] = useState(false)
    const [especialidad, setespecialidad] = useState('')
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        setShow(true)
    }, [])

    return (
        <>
            <Modal show={show} size="lg" centered>
                <Modal.Body>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-12 col-lg-4 text-center m-auto mt-5">
                                <img
                                    src="/images/logo/logo_x_bio.png"
                                    className="w-25"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-4 m-auto">
                                <p className="py-2 px-5 rounded-pill bg-primary text-white m-auto mt-3">
                                    Paso 1 de 2
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-7 m-auto">
                                <p className="fw-bold fs-6">
                                    Cuéntanos cuál es tu especialidad para
                                    personalizar el entorno de la plataforma
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div
                                className="col-12 col-lg-4"
                                onClick={() => setespecialidad('deportes')}>
                                <label
                                    className={`btn ${
                                        especialidad == 'deportes'
                                            ? 'border'
                                            : ''
                                    }`}
                                    for="btn-check-5">
                                    <img
                                        src="/images/web_defaults/profesional_1.png"
                                        className={`w-100 ${styles.img}`}
                                    />
                                    <p className="fw-bold">
                                        Profesional del Deporte
                                    </p>
                                </label>
                                <input
                                    type="checkbox"
                                    className="btn-check"
                                    id="btn-check-6"
                                    autocomplete="off"
                                />
                            </div>
                            <div
                                className="col-12 col-lg-4"
                                onClick={() =>
                                    setespecialidad('rehabilitacion')
                                }>
                                <label
                                    className={`btn ${
                                        especialidad == 'rehabilitacion'
                                            ? 'border'
                                            : ''
                                    }`}
                                    for="btn-check-5">
                                    <img
                                        src="/images/web_defaults/profesional_2.png"
                                        className={`w-100 ${styles.img}`}
                                    />
                                    <p className="fw-bold">
                                        Profesional en Rehabilitación
                                    </p>
                                </label>
                                <input
                                    type="checkbox"
                                    className="btn-check"
                                    id="btn-check-6"
                                    autocomplete="off"
                                />
                            </div>
                            <div
                                className="col-12 col-lg-4"
                                onClick={() => setespecialidad('otro')}>
                                <label
                                    className={`btn ${
                                        especialidad == 'otro' ? 'border' : ''
                                    }`}
                                    for="btn-check-5">
                                    <img
                                        src="/images/web_defaults/profesional_3.png"
                                        className={`w-100 ${styles.img}`}
                                    />
                                    <p className="fw-bold">Otro</p>
                                </label>
                                <input
                                    type="checkbox"
                                    className="btn-check"
                                    id="btn-check-6"
                                    autocomplete="off"
                                />
                            </div>
                        </div>
                        <div className="row mt-4 mb-4">
                            <div className="col">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setPaso(2)}>
                                    SIGUIENTE
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalEspecialidad
