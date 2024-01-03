import {
    faTemperatureLow,
    faDroplet,
    faLungs,
    faHeartPulse,
} from '@fortawesome/free-solid-svg-icons'
import { faGratipay } from '@fortawesome/free-brands-svg-icons'
import { Item } from './Item'
import { useState } from 'react'
import axios from '@/lib/axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const SignosVitales = ({id_historia_clinica, data}) => {
    const [form, setForm] = useState({
        frecuencia_cardiaca: '',
        temperatura: '',
        saturacion_oxigeno: '',
        frecuencia_respiratoria: '',
        presion_arterial: '',
    })

    const handleSubmit = () => {
        axios
            .post('/api/historia_clinica/register_signos_vitales', {
                id_historia_clinica,
                ...form,
            })
            .then(e => {
                toast.success('Se agregaron correctamente los datos', {
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
            .catch(error => console.log(error.response))
    }

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div className="col-12 col-sm-6 mt-2">
            <ToastContainer />
            <div className="shadow h-100">
                <h3
                    className="fs-6 px-3 py-2"
                    style={{ backgroundColor: '#f7f7f7' }}>
                    SIGNOS VITALES
                </h3>
                <Item
                    icon={faGratipay}
                    text="Frecuencia Cardiaca"
                    signo="x min"
                    color="#354a5d"
                    width="18px"
                    name='frecuencia_cardiaca'
                    value={form.frecuencia_cardiaca}
                    handleChange={handleChange}
                />
                <Item
                    icon={faTemperatureLow}
                    text="Temperatura"
                    signo="C"
                    color="#5ad38c"
                    width="19px"
                    name='temperatura'
                    value={form.temperatura}
                    handleChange={handleChange}
                />
                <Item
                    icon={faDroplet}
                    text="Saturación de Oxigeno"
                    signo="%"
                    color="#9a5cb4"
                    width="16px"
                    name='saturacion_oxigeno'
                    value={form.saturacion_oxigeno}
                    handleChange={handleChange}
                />
                <Item
                    icon={faLungs}
                    text="Frecuencia Respiratoria"
                    signo="x min"
                    color="#ed8335"
                    width="23px"
                    name='frecuencia_respiratoria'
                    value={form.frecuencia_respiratoria}
                    handleChange={handleChange}
                />
                <Item
                    icon={faHeartPulse}
                    text="Presión Arteriar"
                    signo="KG"
                    color="#7ebbe6"
                    width="21px"
                    name='presion_arterial'
                    value={form.presion_arterial}
                    handleChange={handleChange}
                />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary me-4 mt-4 mb-3" onClick={handleSubmit}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}
