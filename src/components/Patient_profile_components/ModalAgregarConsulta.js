import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ModalAgregarConsulta = ({paciente}) => {
    const router = useRouter()
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({
        motivos: '',
        cita_subsecuente: '',
    })
    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => setShow(true)

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        axios
            .post('/api/register_historia_clinica', {
                id_paciente: paciente.id,
                ...form,
            })
            .then(e => {
                toast.success('Se inicio correctamente la nueva consulta', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                })
                handleClose()
                router.push({
                    pathname: '/historia_clinica',
                    query: { id_historia_clinica: JSON.stringify(e.data.id_historia_clinica), pacienteData: JSON.stringify(paciente) },
                })
            })
    }

    return (
        <>
            <ToastContainer />
            <Button
                variant="outline-primary"
                onClick={handleShow}
                className="btn btn-primary w-75 m-auto text-white">
                Iniciar Nueva Consulta
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="text-uppercase">
                        Motivos de la consulta
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="¿Cuál es el motivo de la consulta?"
                                autoFocus
                                name="motivos"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                type="text"
                                placeholder="Cita subsecuente"
                                name="cita_subsecuente"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleSubmit}
                        type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
