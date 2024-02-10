import { useEffect, useState } from 'react'
import { Options } from './Options'
import axios from '@/lib/axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ItemsAlergias = ({paciente}) => {
    const [alergias, setAlergias] = useState(null)
    const [oldAlergisa, setOldAlergisa] = useState();

    const obtenerAlergias = () => {
        axios
            .get(`/api/antecedentes/alergias?id_paciente=${paciente.id}`)
            .then(res => {
                if(res.data.alergias !== null) setOldAlergisa(res.data.alergias);
            })
    }

    const changeOption = () => {
        axios
            .post('/api/antecedentes/update_alergias', {
                respuesta: alergias,
                id_paciente: paciente.id,
            })
            .then(() => {
                toast.success('Se agrego correctamente', {
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
    }

    useEffect(() => {
        if (alergias) {
            changeOption()
        }
    }, [alergias])
    useEffect(() => {
        obtenerAlergias()
    }, [alergias])

    return (
        <form className="ms-3 mt-1">
            <ToastContainer />
            <div className="d-flex justify-content-between">
                <label htmlFor="">
                    ¿El paciente cuenta con alergias conocidas?
                </label>
                <Options handleChange={setAlergias} oldOption={oldAlergisa} />
            </div>
            {alergias === 'si' || oldAlergisa === 'si' ? (
                <div className="mt-3">
                    <form>
                        <div class="mb-3">
                            <label for="alergia" class="form-label">
                                Agregar Alergia
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="alergia"
                            />
                            <button
                                type="button"
                                className="btn btn-outline-primary mt-3">
                                Agregar
                            </button>
                        </div>
                        <div class="mb-3">
                            <label for="otras_alergias" class="form-label">
                                Otras alergias
                            </label>
                            <textarea
                                class="form-control"
                                id="otras_alergias"
                                rows="3"></textarea>
                            <button
                                type="button"
                                className="btn btn-outline-primary mt-3">
                                Agregar
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                ''
            )}
        </form>
    )
}
