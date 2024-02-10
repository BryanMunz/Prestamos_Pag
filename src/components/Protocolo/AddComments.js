import Modal from 'react-bootstrap/Modal'
import { Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { ItemComentario } from './ItemComentario'

export const AddComments = ({
    show,
    setShow,
    comentarios,
    getComentarios,
    protocolo_id,
}) => {
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [comentario, setComentario] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .post('/api/protocolo/comentarios/store', {
                protocolo_id: protocolo_id,
                comentario: comentario,
            })
            .then(res => {
                getComentarios()
            })
    }

    return (
        <>
            <style>
                {`
                .form-control:focus 
                {
                    outline:none !important;
                    outline-width: 0 !important;
                    box-shadow: none;
                    -moz-box-shadow: none;
                    -webkit-box-shadow: none;
                    border: 1px solid #84a6d6;
                
        }   
            `}
            </style>
            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                fullscreen="lg-down"
                centered>
                <Modal.Header
                    closeButton
                    style={{ backgroundColor: '#fafafa' }}>
                    <div
                        className="rounded-circle bg-primary d-flex justify-content-center align-items-center"
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '-10%',
                            transform: 'translate(-60%, -20%)',
                            width: '50px',
                            height: '50px',
                        }}>
                        Hola
                    </div>
                    <Modal.Title className="m-auto me-0">
                        Comentarios
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {comentarios && !comentarios.length > 0 ? (
                        <div className='d-flex justify-content-center flex-column'>
                            <img
                                className="d-inline-block w-50 m-auto text-center"
                                src="/images/web_defaults/burbuja-de-dialogo.gif"
                            />
                            <p className="text-center fw-semibold my-0">
                                No hay ningún comentario aún.
                            </p>
                            <p className="text-center fw-semibold my-0">
                                Puedes enviar al primero ya mismo.
                            </p>
                        </div>
                    ) : (
                        comentarios.map((comentario, index) => (
                            <ItemComentario
                                comentario={comentario}
                                key={index}
                            />
                        ))
                    )}

                    <div className="mt-5">
                        <Form>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Escribe mensaje..."
                                    aria-label="Escribe mensaje..."
                                    aria-describedby="basic-addon2"
                                    className="border-end-0"
                                    value={comentario}
                                    onChange={e =>
                                        setComentario(e.target.value)
                                    }
                                    style={{ border: '1px solid #84a6d6' }}
                                />

                                <button
                                    className="btn border-start-0"
                                    onClick={handleSubmit}
                                    style={{ border: '1px solid #84a6d6' }}>
                                    <span
                                        style={{
                                            backgroundColor: '#0a4ead',
                                            width: '38px',
                                            height: '38px',
                                        }}
                                        className="d-flex justify-content-center align-items-center rounded-3">
                                        <FontAwesomeIcon
                                            icon={faPaperPlane}
                                            width={'20px'}
                                            color="#ffff"
                                        />
                                    </span>
                                </button>
                            </InputGroup>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
