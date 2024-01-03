import { useEffect, useState } from 'react'
import { Options } from './Options'
import axios from '@/lib/axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ItemPatologico = ({
    text,
    name = 'alergia',
    id_paciente = 15,
    urlPost,
    opcion,
    handleChange,
}) => {
    const [flag, setFlag] = useState(null)
    const [oldFlag, setOldFlag] = useState('')

    const changeOption = () => {
        axios
            .post(urlPost, {
                respuesta: flag,
                id_paciente: id_paciente,
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
    }

    useEffect(() => {
        if (flag) {
            changeOption()
            setOldFlag(flag)
        }
    }, [flag])

    useEffect(() => {
        if (opcion) {
            setOldFlag(opcion)
        }
    }, [opcion])

    return (
        <div className="mt-3">
            <ToastContainer />
            <div className="d-flex justify-content-between">
                <label>{text}</label>
                <Options
                    handleChange={setFlag}
                    oldOption={oldFlag}
                    name={name}
                />
            </div>
            {oldFlag === 'si' || flag === 'si' ? (
                <div>
                    <input
                        type="text"
                        className="form-control mt-3"
                        name={name}
                        onChange={handleChange}
                    />
                </div>
            ) : (
                ''
            )}
        </div>
    )
}
