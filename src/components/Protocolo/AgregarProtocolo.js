import Modal from 'react-bootstrap/Modal'
import { Steps } from './Steps'

export const AgregarProtocolo = ({
    paciente,
    protocolo = null,
    setShow,
    show,
    ejercicioProtocolo,
    ejercicios,
    setFlag,
    update = false
}) => {
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                fullscreen="lg-down">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Steps
                        paciente={paciente}
                        protocolo={protocolo}
                        ejercicios={ejercicios}
                        ejercicioProtocolo={ejercicioProtocolo}
                        setShow={handleClose}
                        setFlag={setFlag}
                        update={update}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}
