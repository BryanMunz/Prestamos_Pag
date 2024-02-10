import { useEffect, useState } from 'react'
import { ItemPatologico } from './ItemPatologico'
import axios from '@/lib/axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const urlsPost = {
    actividad_fisica:
        '/api/antecedentes/no_patologicos/update_actividad_fisica',
    tabaquismo: '/api/antecedentes/no_patologicos/update_tabaquismo',
    alcoholismo: '/api/antecedentes/no_patologicos/update_alcoholismo',
    drogas: '/api/antecedentes/no_patologicos/update_drogas',
    vacunas_recientes:
        '/api/antecedentes/no_patologicos/update_vacunas_recientes',
    otros: '/api/antecedentes/no_patologicos/update_otros',
}

export const ItemsNoPatologicos = ({ paciente, optionsNoPatologicos }) => {
    const [descripciones, setDescripciones] = useState({
        actividad_fisica: '',
        tabaquismo: '',
        alcoholismo: '',
        drogas: '',
        vacunas_recientes: '',
        otros: '',
    })

    const handleChangeDescripciones = e => {
        setDescripciones({ ...descripciones, [e.target.name]: e.target.value })
    }

    const handleSubmitDescripciones = e => {
        e.preventDefault()

        axios
            .post('/api/antecedentes/no_patologias/update_descripciones', {
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

    return (
        <form className="ms-3 mt-1 mb-3" onSubmit={handleSubmitDescripciones}>
            <ToastContainer />
            <ItemPatologico
                text="Actividad Física"
                name="actividad_fisica"
                urlPost={urlsPost.actividad_fisica}
                opcion={optionsNoPatologicos?.actividad_fisica?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Tabaquismo"
                name="tabaquismo"
                urlPost={urlsPost.tabaquismo}
                opcion={optionsNoPatologicos?.tabaquismo?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Alcoholismo"
                name="alcoholismo"
                urlPost={urlsPost.alcoholismo}
                opcion={optionsNoPatologicos?.alcoholismo?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Uso de Drogas"
                name="drogas"
                urlPost={urlsPost.drogas}
                opcion={optionsNoPatologicos?.drogas?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Vacunas Recientes"
                name="vacunas_recientes"
                urlPost={urlsPost.vacunas_recientes}
                opcion={optionsNoPatologicos?.vacunas_recientes?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Otros"
                name="otros"
                urlPost={urlsPost.otros}
                opcion={optionsNoPatologicos?.otros?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <button className="btn btn-outline-primary mt-3">Guardar</button>
        </form>
    )
}
