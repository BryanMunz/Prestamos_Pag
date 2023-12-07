import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import InputError from '../InputError'

export const ModalVideo = ({ setPaso, setVideo, handleClose, video }) => {
    const [error, setError] = useState('')

    const handleChange = e => {
        const newVideo = e.target.files[0]
        if (newVideo.type != 'video/mp4') {
            setError('Tiene que ser formato MP4')
            return
        }

        if(newVideo.size > 41943040.02) {
            setError('El peso del archivo es demasiado')
            return
        }
        setVideo(newVideo)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (video) {
            setPaso(2)
        }
    }
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Subir nuevo ejercicio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="px-4">
                    <h3 className="fs-4 fw-normal">Subir ejercicio</h3>
                    <p>
                        El video consiste en realizar un repetición del
                        ejercicio, empezando el movimiento desde un punto y
                        acabando en el mismo para obtener el efecto de bucle al
                        reproducirlo de forma continua{' '}
                    </p>
                    <p>
                        Recuerda mantener la cámara estable e intentar centrar
                        el movimiento o la persona
                    </p>
                    <h3 className="fs-4 fw-normal">Requisitos del video</h3>
                    <p className="my-0 py-0"> - Peso menor de 40MB</p>
                    <p className="my-0 py-0">
                        {' '}
                        - Duración entre 20 a 40 segundos
                    </p>
                    <p className="my-0 py-0"> - Formato MP4</p>
                    <p className="my-0 py-0">
                        {' '}
                        - Tamaño de video en formato horizontal
                    </p>
                </div>
                <form className="ms-3 ps-1 mt-2">
                    <input
                        type="file"
                        className="form-control"
                        name="file"
                        accept="video/*"
                        onChange={handleChange}
                    />
                    <InputError/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <div className="w-75 m-auto">
                    <Button
                        variant="danger"
                        className="float-start"
                        onSubmit={handleClose}>
                        Cancelar
                    </Button>
                    <Button
                        variant="success"
                        onClick={handleSubmit}
                        className="float-end"
                        type="submit">
                        Subir video
                    </Button>
                </div>
            </Modal.Footer>
        </>
    )
}
