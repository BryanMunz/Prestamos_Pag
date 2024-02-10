import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Options } from './Options'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Item = ({
    icon,
    text,
    color = '#000000',
    width = '15px',
    id_historia_clinica,
    name,
    opcion,
    url
}) => {
    const [flag, setFlag] = useState(null)
    const [oldFlag, setOldFlag] = useState('')

    const changeOption = () => {
        axios
            .post(url, {
                [name]: flag,
                id_historia_clinica: id_historia_clinica,
            })
            .then((e) => {
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
            .catch( e => console.log(e.response))
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
        <>
            <ToastContainer />
            <div className="d-flex justify-content-between align-items-center px-4 mt-3">
                <div className="d-flex">
                    <FontAwesomeIcon
                        icon={icon}
                        style={{ width: width, color: color }}
                    />
                    <p className="p-0 m-0 ms-3">{text}</p>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <Options
                        handleChange={setFlag}
                        name={name}
                        oldOption={oldFlag}
                    />
                </div>
            </div>
        </>
    )
}
