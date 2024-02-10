import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import styles from '../../style/dashboard/Modal.module.css'

const ModalLograr = ({setPaso, updateWizard}) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        setShow(true)
    }, [])

    const handleSubmit = () => {
        handleClose();
        updateWizard();
    }


    return (
        <>
            <Modal show={show} size="lg" centered>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 text-center m-auto mt-3">
                                <img
                                    src="/images/logo/logo_x_bio.png"
                                    className="w-25"
                                />
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-12 col-lg-4 m-auto">
                                <p className="py-2 px-5 rounded-pill bg-primary text-white m-auto mt-2">
                                    Paso 2 de 2
                                </p>
                            </div>
                        </div>
                        <div className="row mt-2"> 
                            <div className="col-12">
                                <p className="fw-bold fs-6">
                                    Qué buscas lograr con Biobotix?
                                </p>
                            </div>
                        </div>
                        <div className="row mt-0">
                            <div className="col-12">
                                <p>Selecciona todas las que apliquen</p>
                            </div>
                        </div>
                        <div className="row mt-2 px-4">
                            <input
                                type="checkbox"
                                className="btn-check"
                                id="btn-check-1"
                                autocomplete="off"
                            />
                            <label
                                className="btn text-start py-3"
                                for="btn-check-1">
                                Realizar tests en la plataforma (ROM,
                                estabilidad, cuestionarios)
                            </label>

                            <input
                                type="checkbox"
                                className="btn-check"
                                id="btn-check-2"
                                autocomplete="off"
                            />
                            <label
                                className="btn text-start  py-3 mt-2"
                                for="btn-check-2">
                                Llevar el control de los expedientes de mis
                                pacientes
                            </label>

                            <input
                                type="checkbox"
                                className="btn-check"
                                id="btn-check-3"
                                autocomplete="off"
                            />
                            <label
                                className="btn text-start py-3 mt-2"
                                for="btn-check-3">
                                Prescribir y dosificar programas de ejercicios
                            </label>
                            <input
                                type="checkbox"
                                className="btn-check"
                                id="btn-check-4"
                                autocomplete="off"
                            />
                            <label
                                className="btn text-start py-3 mt-2"
                                for="btn-check-4">
                                Organizar mi agenda y recordatorios
                            </label>
                            <input
                                type="checkbox"
                                className="btn-check"
                                id="btn-check-5"
                                autocomplete="off"
                            />
                            <label
                                className="btn text-start py-3 mt-2"
                                for="btn-check-5">
                                Ofrecer teleconsultas a mis pacientes
                            </label>
                            <input
                                type="checkbox"
                                className="btn-check"
                                id="btn-check-6"
                                autocomplete="off"
                            />
                            <label
                                className="btn text-start py-3 mt-2"
                                for="btn-check-6">
                                Otro
                            </label>
                        </div>
                        <div className="row mt-4 mb-4">
                            <div className="col-6 text-center">
                                <button className="btn btn-secondary px-4" onClick={() => setPaso(1)}>
                                    ANTERIOR
                                </button>
                            </div>
                            <div className="col-6 text-center">
                                <button className="btn btn-primary px-4" onClick={() => handleSubmit()}>
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

export default ModalLograr
