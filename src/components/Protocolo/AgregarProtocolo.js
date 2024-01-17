import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { Steps } from './Steps'

export const AgregarProtocolo = ({paciente}) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Button
                variant="primary"
                onClick={handleShow}
                style={{
                    width: '100%',
                    backgroundColor: '#ffffff',
                    border: '2px solid #1B73F9',
                    borderRadius: '22px',
                    padding: '12px 24px',
                    marginTop: '20px',
                    marginBottom: '16px',
                    color: '#1B73F9',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    outline: 'none',
                    boxSizing: 'border-box', // Asegura que el ancho incluya padding y borde
                }}>
                Nuevo Protocolo
            </Button>

            <Modal show={show} onHide={handleClose} size='xl' fullscreen='lg-down'>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Steps paciente={paciente} />
                </Modal.Body>
            </Modal>
        </>
    )
}
