import {
    faPerson,
    faRulerVertical,
    faWeightScale,
    faPersonWalking,
} from '@fortawesome/free-solid-svg-icons'
import { Item } from './Item'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Somatometria = ({ id_historia_clinica, data }) => {
    const [form, setForm] = useState({
        grasa_corporal: '',
        estatura: '',
        imc: '',
        masa_muscular: '',
        peso: '',
    })

    const obtenerDatos = () => {
        if (data) {
            setForm({
                grasa_corporal: data.grasa_corporal,
                estatura: data.estatura,
                imc: data.imc,
                masa_muscular: data.masa_muscular,
                peso: data.peso,
            })
        }
    }

    useEffect(() => {
        obtenerDatos()
    }, [data])

    const handleSubmit = () => {
        axios
            .post('/api/historia_clinica/register_somatometria', {
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
        <div className="col-12 col-sm-6 mt-2 p-0">
            <ToastContainer />
            <div className="shadow h-100">
                <h3
                    className="fs-6 px-3 py-2"
                    style={{ backgroundColor: '#f7f7f7' }}>
                    SOMATOMETRIA
                </h3>
                <Item
                    icon={faPerson}
                    text="Grasa Corporal"
                    signo="%"
                    color="#e47e31"
                    name="grasa_corporal"
                    handleChange={handleChange}
                    value={form.grasa_corporal}
                />
                <Item
                    icon={faRulerVertical}
                    text="Estatura"
                    signo="CM"
                    color="#a167b9"
                    width="11px"
                    name="estatura"
                    handleChange={handleChange}
                    value={form.estatura}
                />
                <Item
                    icon={faWeightScale}
                    text="IMC"
                    signo="KG/M"
                    color="#f7ccc8"
                    width="17px"
                    name="imc"
                    handleChange={handleChange}
                    value={form.imc}
                />
                <Item
                    icon={faPersonWalking}
                    text="Masa Muscular"
                    signo="%"
                    color="#f0c330"
                    width="13px"
                    name="masa_muscular"
                    handleChange={handleChange}
                    value={form.masa_muscular}
                />
                <Item
                    icon={faWeightScale}
                    text="Peso"
                    signo="KG"
                    color="#5dcbb5"
                    width="17px"
                    name="peso"
                    handleChange={handleChange}
                    value={form.peso}
                />
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-primary me-4 mt-4 mb-3"
                        onClick={handleSubmit}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}
