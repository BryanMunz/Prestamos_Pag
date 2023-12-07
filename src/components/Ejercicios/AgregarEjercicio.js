import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { ModalVideo } from './ModalVideo'
import { ModalDatos } from './ModalDatos'
import { useForm } from '@/hooks/useForm'
import axios from '@/lib/axios'

export const AgregarEjercicio = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [error, setErrors] = useState([])
    const [paso, setPaso] = useState(1)
    const [video, setVideo] = useState(null)
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const registerEjercicio = async ({setErrors, ...props }) => {
        const res = { ...props, video }
        const body = new FormData()
        Object.entries(res).forEach(([propiedad, valor]) =>
            body.append(propiedad, valor),
        )
        await csrf()

        setErrors([])

        axios
            .post('/api/register_ejercicio', body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(response => onResetForm())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const {
        form,
        nombre,
        descripcion,
        zona,
        dificultad,
        especialidad,
        equipo,
        posicion,
        onInputChange,
        onSubmitForm,
        onResetForm,
    } = useForm(
        {
            nombre: '',
            descripcion: '',
            descripcion: '',
            zona: '',
            dificultad: '',
            especialidad: '',
            equipo: '',
            posicion: '',
            setErrors
        },
        registerEjercicio,
    )

    return (
        <>
            <Button
                variant="outline-primary"
                onClick={handleShow}
                className="float-start btn btn-success text-white px-4 py-2 ms-3">
                Subir ejercicio
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                {paso === 1 ? (
                    <ModalVideo
                        setPaso={setPaso}
                        setVideo={setVideo}
                        handleClose={handleClose}
                        video={video}
                    />
                ) : (
                    <ModalDatos
                        form={form}
                        onInputChange={onInputChange}
                        video={video}
                        handleClose={handleClose}
                        onSubmitForm={onSubmitForm}
                        error={error}
                    />
                )}
            </Modal>
        </>
    )
}
