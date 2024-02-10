import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CountryCode from '../CountryCode'
import { useForm } from '@/hooks/useForm'
import axios from '@/lib/axios'
import InputError from '../InputError'

function MyModal({ handleNewPaciente }) {
    const [show, setShow] = useState(false)
    const [activeFolio, setActiveFolio] = useState(false);

    const [errors, setErrors] = useState([])
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const registerPaciente = async ({ setErrors, ...props }) => {
        const res = { ...props }
        await csrf()

        setErrors([])

        axios
            .post('/api/register_paciente', res)
            .then(() => {
                handleNewPaciente()
                handleClose()
                
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const {
        nombre,
        apellidos,
        sexo,
        fecha_nacimiento,
        folio,
        telefono,
        email,
        email_confirmation,
        onInputChange,
        onSubmitForm,
        onResetForm,
    } = useForm(
        {
            nombre: '',
            apellidos: '',
            sexo: 'M',
            fecha_nacimiento: '',
            folio: '',
            telefono: '',
            email: '',
            email_confirmation: '',
            setErrors,
        },
        registerPaciente,
    )

    return (
        <>
            <Button
                variant="outline-primary"
                onClick={handleShow}
                className="float-end mb-3 me-3 mt-4">
                Crear nuevo paciente
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Crear nuevo paciente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="nombre"
                                    aria-label="First name"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onInputChange}
                                />
                                <InputError
                                    messages={errors.nombre}
                                    className="mt-2"
                                />
                            </div>
                            <div className="col">
                                <label className="form-label">Apellidos</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellidos"
                                    aria-label="Last name"
                                    name="apellidos"
                                    value={apellidos}
                                    onChange={onInputChange}
                                />
                                <InputError
                                    messages={errors.apellidos}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label className="form-label">Sexo</label>
                                <select
                                    className="form-select"
                                    name="sexo"
                                    onChange={onInputChange}>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                </select>
                                <InputError
                                    messages={errors.sexo}
                                    className="mt-2"
                                />
                            </div>
                            <div className="col">
                                <label className="form-label">
                                    Año de nacimiento
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={fecha_nacimiento}
                                    name="fecha_nacimiento"
                                    onChange={onInputChange}
                                />
                                <InputError
                                    messages={errors.fecha_nacimiento}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label className="form-label d-inline-block">
                                    Número de expediente médico
                                    <div className="form-check form-switch d-inline-block ms-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckDefault"
                                            onChange={() => setActiveFolio(!activeFolio)}
                                        />
                                        <label
                                            className="form-check-label"
                                            for="flexSwitchCheckDefault">
                                            (Desactivar Folio)
                                        </label>
                                    </div>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    disabled={!activeFolio}
                                    value={folio}
                                    name="folio"
                                    onChange={onInputChange}
                                />
                                <InputError
                                    messages={errors.folio}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="row">
                                <label className="form-label">
                                    Número telefonico (Opciónal)
                                </label>
                                <div className="col-4">
                                    <select
                                        className="form-select"
                                        name="country_code"
                                        onChange={onInputChange}>
                                        <option>Elige una opción</option>
                                        <CountryCode />
                                    </select>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={telefono}
                                        name="telefono"
                                        onChange={onInputChange}
                                    />
                                    <InputError
                                        messages={errors.telefono}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label className="form-label">
                                    Email (Opciónal)
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="paciente@gmail.com"
                                    aria-label="First name"
                                    value={email}
                                    name="email"
                                    onChange={onInputChange}
                                />
                                <InputError
                                    messages={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div className="col">
                                <label className="form-label">
                                    Confirmar Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="paciente@gmail.com"
                                    aria-label="First name"
                                    value={email_confirmation}
                                    name="email_confirmation"
                                    onChange={onInputChange}
                                />
                                <InputError
                                    messages={errors.email_confirmation}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-success"
                        onClick={onSubmitForm}
                        className="w-100"
                        type="submit">
                        Crear paciente
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MyModal
