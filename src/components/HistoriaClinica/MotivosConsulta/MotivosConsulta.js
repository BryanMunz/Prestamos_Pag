import axios from '@/lib/axios'
import { ItemNotas } from '../ItemNotas'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const MotivosConsulta = ({ id_historia_clinica, data }) => {
    const [motivos, setMotivos] = useState('')

    const handleChange = e => {
        setMotivos({...motivos, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        if(data) {
            setMotivos({motivos: data?.motivos})
        }
    }, [data]);
    const handleSubmit = e => {
        e.preventDefault()
        axios
            .post('/api/historia_clinica/register_motivos', {
                id_historia_clinica,
                ...motivos,
            })
            .then(e => {
                console.log(e.data)
                toast.success('Se modifico correctamente', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                })
            })
            .catch(e => console.log(e.response))
    }
    return (
        <div className="container mt-5">
            <ToastContainer />
            <h2 className="fs-6 mb-3">MOTIVOS DE CONSULTA</h2>
            <div className="row justify-content-between">
                <ItemNotas
                    title="MOTIVOS DE CONSULTA"
                    value={motivos.motivos}
                    handleChange={handleChange}
                    name='motivos'
                />
            </div>
            <button
                className="btn btn-primary float-end"
                onClick={handleSubmit}>
                Guardar
            </button>
        </div>
    )
}
