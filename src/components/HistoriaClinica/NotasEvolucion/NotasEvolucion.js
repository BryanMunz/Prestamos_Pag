import axios from '@/lib/axios'
import { ItemNotas } from '../ItemNotas'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const NotasEvolucion = ({ id_historia_clinica, data }) => {
    const [notas, setNotas] = useState('')

    const handleChange = e => {
        setNotas({ ...notas, [e.target.name]: e.target.value })
    }
    useEffect(() => {

        if(data) {
            setNotas({notas: data.notas_evolucion})
        }
        
    }, [data]);
    const handleSubmit = e => {
        e.preventDefault()
        axios
            .post('/api/historia_clinica/register_notas_evulucion', {
                id_historia_clinica,
                ...notas,
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
            <h2 className="fs-6 mb-3">NOTAS DE EVOLUCIÓN</h2>
            <div className="row justify-content-between">
                <ItemNotas
                    title="NOTAS DE EVOLUCIÓN"
                    value={notas.notas}
                    handleChange={handleChange}
                    name="notas"
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
