import axios from '@/lib/axios'
import { ItemPatologico } from './ItemPatologico'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'

const urlsPost = {
    embarazo: '/api/antecedentes/gineco_obstetricos/update_embarazo',
    cancer_uterino:
        '/api/antecedentes/gineco_obstetricos/update_cancer_uterino',
    otros: '/api/antecedentes/gineco_obstetricos/update_otros',
    fecha_menarca: '/api/antecedentes/gineco_obstetricos/update_fecha_menarca',
    ultima_mestruacion:
        '/api/antecedentes/gineco_obstetricos/update_ultima_mestruacion',
}

export const ItemsGineco = ( {paciente, optionsGineco}) => {
    const [descripciones, setDescripciones] = useState({
        embarazo: '',
        cancer_uterino: '',
        otros: '',
    })

    const handleChangeDescripciones = e => {
        setDescripciones({ ...descripciones, [e.target.name]: e.target.value })
    }

    const handleSubmitDescripciones = e => {
        e.preventDefault()

        axios
            .post('/api/antecedentes/gineco_obstetricos/update_descripciones', {
                ...descripciones,
                id_paciente: paciente.id,
            })
            .then(() => {
                toast.success('Se modificaron correctamente', {
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
            .catch(error => {
                if (error.response.status !== 422) throw error
            })
    }

    const handleChangeFechas = e => {
        axios
            .post(urlsPost[e.target.name], {
                respuesta: e.target.value,
                id_paciente: paciente.id,
            })
            .then(() => {
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
            .catch(error => console.log(error.response))
    }

    return (
        <form className="ms-3 mt-1 mb-3" onSubmit={handleSubmitDescripciones}>
            <ToastContainer />
            <ItemPatologico
                text="Embarazos"
                name="embarazo"
                urlPost={urlsPost.embarazo}
                handleChange={handleChangeDescripciones}
                opcion={optionsGineco?.embarazo?.respuesta}
                id_paciente={paciente.id}
            />
            <div className="mt-3">
                <div className="d-flex justify-content-between">
                    <label>Fecha de Menarca</label>
                    <input
                        type="date"
                        className="form-control w-25"
                        name="fecha_menarca"
                        onChange={handleChangeFechas}
                        value={optionsGineco?.fecha_menarca?.fecha}
                    />
                </div>
            </div>
            <ItemPatologico
                text="Cancer Uterino"
                name="cancer_uterino"
                urlPost={urlsPost.cancer_uterino}
                handleChange={handleChangeDescripciones}
                opcion={optionsGineco?.cancer_uterino?.respuesta}
                id_paciente={paciente.id}
            />
            <div className="mt-3">
                <div className="d-flex justify-content-between">
                    <label>Ultima Mestruación</label>
                    <input
                        type="date"
                        className="form-control w-25"
                        name="ultima_mestruacion"
                        onChange={handleChangeFechas}
                        value={optionsGineco?.ultima_mestruacion?.fecha}
                    />
                </div>
            </div>
            <ItemPatologico
                text="Otros"
                name="otros"
                urlPost={urlsPost.otros}
                handleChange={handleChangeDescripciones}
                opcion={optionsGineco?.otros?.respuesta}
                id_paciente={paciente.id}
            />
            <button className="btn btn-outline-primary mt-3">Guardar</button>
        </form>
    )
}
