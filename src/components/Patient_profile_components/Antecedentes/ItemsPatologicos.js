import axios from '@/lib/axios'
import { ItemPatologico } from './ItemPatologico'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const urlsPost = {
    hipertension: '/api/antecedentes/patologias/update_hipertension',
    hospitalizacion: '/api/antecedentes/patologias/update_hospitalizacion',
    cirugia: '/api/antecedentes/patologias/update_cirugias',
    diabetes: '/api/antecedentes/patologias/update_diabetes',
    tiroides: '/api/antecedentes/patologias/update_tiroides',
    hipotension: '/api/antecedentes/patologias/update_hipotension',
    cardiopatias: '/api/antecedentes/patologias/update_cardiopatia',
    traumatismo: '/api/antecedentes/patologias/update_trumatismo',
    cancer: '/api/antecedentes/patologias/update_cancer',
    respiratorias: '/api/antecedentes/patologias/update_respiratorias',
    gastrointestinales:
        '/api/antecedentes/patologias/update_gastrointestinales',
    otros: '/api/antecedentes/patologias/update_otros',
}

export const ItemsPatologicos = ({ paciente, optionsPatologicos }) => {
    
    const [descripciones, setDescripciones] = useState({
        hipertension: '',
        hospitalizacion: '',
        cirugia: '',
        diabetes: '',
        tiroides: '',
        hipotension: '',
        cardiopatias: '',
        traumatismo: '',
        cancer: '',
        respiratorias: '',
        gastrointestinales: '',
        otros: '',
    })

    const handleChangeDescripciones = e => {
        setDescripciones({ ...descripciones, [e.target.name]: e.target.value })
    }

    const handleSubmitDescripciones = e => {
        e.preventDefault()

        axios
            .post('/api/antecedentes/patologias/update_descripciones', {
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
                text="Hipertensión"
                name="hipertension"
                urlPost={urlsPost.hipertension}
                opcion={optionsPatologicos?.hipertencion?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Hospitalización Previa"
                name="hospitalizacion"
                urlPost={urlsPost.hospitalizacion}
                opcion={optionsPatologicos?.hospitalizacion_previa?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Cirugías Previas"
                name="cirugia"
                urlPost={urlsPost.cirugia}
                opcion={optionsPatologicos?.cirugias_previas?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Diabetes"
                name="diabetes"
                urlPost={urlsPost.diabetes}
                opcion={optionsPatologicos?.diabetes?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Tiroides"
                name="tiroides"
                urlPost={urlsPost.tiroides}
                opcion={optionsPatologicos?.tiroides?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Hipotensión"
                name="hipotension"
                urlPost={urlsPost.hipotension}
                opcion={optionsPatologicos?.hipotension?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Cardiopatías"
                name="cardiopatias"
                urlPost={urlsPost.cardiopatias}
                opcion={optionsPatologicos?.cardiopatias?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Traumatismos"
                name="traumatismo"
                urlPost={urlsPost.traumatismo}
                opcion={optionsPatologicos?.traumatismo?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Cancer"
                name="cancer"
                urlPost={urlsPost.cancer}
                opcion={optionsPatologicos?.cancer?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Patologías Respiratorias"
                name="respiratorias"
                urlPost={urlsPost.respiratorias}
                opcion={optionsPatologicos?.respiratorias?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Patologías Gastrointestinales"
                name="gastrointestinales"
                urlPost={urlsPost.gastrointestinales}
                opcion={optionsPatologicos?.gastrointestinales?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <ItemPatologico
                text="Otros"
                name="otros"
                urlPost={urlsPost.otros}
                opcion={optionsPatologicos?.otros?.respuesta}
                handleChange={handleChangeDescripciones}
                id_paciente={paciente.id}
            />
            <button className="btn btn-outline-primary mt-3" type="submit">
                Guardar
            </button>
        </form>
    )
}
