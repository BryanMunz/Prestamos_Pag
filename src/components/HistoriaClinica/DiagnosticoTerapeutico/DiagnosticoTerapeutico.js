import { useEffect, useState } from 'react'
import { ItemNotas } from '../ItemNotas'
import axios from '@/lib/axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const DiagnosticoTerapeutico = ({ id_historia_clinica, data }) => {
    const [diagnostico, setDiagnostico] = useState({
        observaciones_clinicas: '',
        objetivos_fisioterapeuticos: '',
        analisis: '',
        diagnostico_medico: '',
        diagnostico_fisioterapeutico: '',
        plan_tratamiento: '',
    })

    useEffect(() => {
        if (data) {
            setDiagnostico({
                observaciones_clinicas: data.observaciones_clinicas,
                objetivos_fisioterapeuticos: data.objetivos_fisioterapeuticos,
                analisis: data.analisis,
                diagnostico_medico: data.diagnostico_medico,
                diagnostico_fisioterapeutico: data.diagnostico_fisioterapeutico,
                plan_tratamiento: data.plan_tratamiento,
            })
        }
    }, [data])

    const handleChange = e => {
        setDiagnostico({ ...diagnostico, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()

        axios
            .post('/api/historia_clinica/register_diagnostico_terapeutico', {
                id_historia_clinica,
                ...diagnostico,
            })
            .then(e => {
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
        <div className="container mt-5" id='diagnostico_terapeutico'>

            <ToastContainer />
            <h2 className="fs-6 mb-3">DIAGNOSTICO TERAPEUTICO</h2>
            <div className="row justify-content-between">
                <div className="col-12 col-sm-6">
                    <ItemNotas
                        title="OBSERVACIONES CLÍNICAS"
                        value={diagnostico.observaciones_clinicas}
                        name="observaciones_clinicas"
                        handleChange={handleChange}
                    />
                </div>
                <div className="col-12 col-sm-6">
                    <ItemNotas
                        title="OBJETIVOS FISIOTERAPÉUTICOS"
                        value={diagnostico.objetivos_fisioterapeuticos}
                        name="objetivos_fisioterapeuticos"
                        handleChange={handleChange}
                    />
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-12 col-sm-6">
                    <ItemNotas
                        title="ANALISIS"
                        value={diagnostico.analisis}
                        name="analisis"
                        handleChange={handleChange}
                    />
                </div>
                <div className="col-12 col-sm-6">
                    <ItemNotas
                        title="DIAGNÓSTICOS MÉDICO"
                        value={diagnostico.diagnostico_medico}
                        name="diagnostico_medico"
                        handleChange={handleChange}
                    />
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-12 col-sm-6">
                    <ItemNotas
                        title="DIAGNÓSTICO FISIOTERAPÉUTICO"
                        value={diagnostico.diagnostico_fisioterapeutico}
                        name="diagnostico_fisioterapeutico"
                        handleChange={handleChange}
                    />
                </div>
                <div className="col-12 col-sm-6">
                    <ItemNotas
                        title="PLAN DE TRATAMIENTO"
                        value={diagnostico.plan_tratamiento}
                        name="plan_tratamiento"
                        handleChange={handleChange}
                    />
                </div>
            </div>
            <button
                className="btn btn-primary float-end"
                onClick={handleSubmit}>
                Guardar
            </button>
        </div>
    )
}
