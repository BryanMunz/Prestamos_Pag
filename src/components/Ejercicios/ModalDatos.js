import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import InputError from '../InputError'
import { Zona } from './Option/Zona'
import { Dificultad } from './Option/Dificultad'
import { Especialidad } from './Option/Especialidad'
import { Equipo } from './Option/Equipo'
import { Posicion } from './Option/Posicion'

export const ModalDatos = ({
    form,
    onInputChange,
    video,
    error,
    handleClose,
    onSubmitForm,
}) => {
    const {
        nombre,
        descripcion,
        zona,
        dificultad,
        especialidad,
        equipo,
        posicion,
    } = form
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Subir nuevo ejercicio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="px-4">
                    <h3 className="fs-4 fw-normal">
                        Añadir Ejercicio a la Biblioteca
                    </h3>
                </div>
                <form className="ms-3 ps-1 mt-2 col-11">
                    <div className="col ">
                        <label className="form-label">Nombre *</label>
                        <input
                            className="form-control"
                            name="nombre"
                            value={nombre}
                            onChange={onInputChange}
                        />
                        <InputError messages={error.nombre} />
                    </div>
                    <div className="col mt-2">
                        <label className="form-label mb-0">
                            Explicación del ejercicio *
                        </label>
                        <label className="form-label d-block mt-0 pt-0">
                            Al realizar el ejercicio el paciente leera la
                            siguiente explicación:{' '}
                        </label>
                        <input
                            className="form-control"
                            name="descripcion"
                            value={descripcion}
                            onChange={onInputChange}
                        />
                        <InputError messages={error.descripcion} />
                    </div>
                    <div className="col mt-2">
                        <label className="form-label mb-0">Zona:</label>
                        <select
                            className="form-control"
                            name="zona"
                            onChange={onInputChange}>
                            <option>Seleccione un opción</option>
                            <Zona/>
                        </select>
                        <InputError messages={error.zona} />
                    </div>
                    <div className="col mt-2">
                        <label className="form-label mb-0">Dificultad:</label>
                        <select
                            className="form-control"
                            name="dificultad"
                            onChange={onInputChange}>
                            <option>Seleccione un opción</option>
                            <Dificultad/>
                        </select>
                        <InputError messages={error.dificultad} />
                    </div>
                    <div className="col mt-2">
                        <label className="form-label mb-0">Especialidad:</label>
                        <select
                            className="form-control"
                            name="especialidad"
                            onChange={onInputChange}>
                            <option>Seleccione un opción</option>
                            <Especialidad/>
                        </select>
                        <InputError messages={error.especialidad} />
                    </div>
                    <div className="col mt-2">
                        <label className="form-label mb-0">Equipo:</label>
                        <select
                            className="form-control"
                            name="equipo"
                            onChange={onInputChange}>
                            <option>Seleccione un opción</option>
                            <Equipo/>
                        </select>
                        <InputError messages={error.equipo} />
                    </div>
                    <div className="col mt-2">
                        <label className="form-label mb-0">Posición:</label>
                        <select
                            className="form-control"
                            name="posicion"
                            onChange={onInputChange}>
                            <option>Seleccione un opción</option>
                            <Posicion/>
                        </select>
                        <InputError messages={error.posicion} />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <div className="w-75 m-auto">
                    <Button
                        variant="danger"
                        className="float-start"
                        onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button
                        variant="success"
                        onClick={onSubmitForm}
                        className="float-end"
                        type="submit">
                        Guardar
                    </Button>
                </div>
            </Modal.Footer>
        </>
    )
}
