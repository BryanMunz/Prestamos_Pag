import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

export const CardProtocolo = ({ ejercicio }) => {
    const [idEjercicio, setIdEjercicio] = useState(null)

    useEffect(() => {
        if (ejercicio) {
            setIdEjercicio(ejercicio.id)
        }
    }, [ejercicio])

    const handleDelete = () => {
        axios
            .delete('/api/protocolo/ejercicio?protocolo_id=16&ejercicio_id=1')
            .then(res => console.log(res.data))
    }

    return (
        <div
            style={{ width: '300px' }}
            className="shadow px-4 py-3 rounded mx-2 my-2">
            <div className="d-flex align-items-center">
                <button
                    className="btn btn-outline-danger border border-danger rounded-circle px-2 py-1"
                    onClick={handleDelete}>
                    <FontAwesomeIcon icon={faXmark} style={{ width: '20px' }} />
                </button>
                <span
                    className="d-inline-block px-4 py-1 ms-3  rounded-pill text-white"
                    style={{ backgroundColor: '#5d4fc4' }}>
                    1
                </span>
            </div>
            <div>
                <img
                    src={'/images/logo/yoga.jpg'}
                    alt="Imagen"
                    style={{
                        width: '100%',
                        height: 'auto',
                        marginTop: '20px',
                        borderRadius: '20px',
                    }}
                />
            </div>
        </div>
    )
}
