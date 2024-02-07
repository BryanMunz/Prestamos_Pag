import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faLink } from '@fortawesome/free-solid-svg-icons'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'

export const ItemProtocolo = ({
    nombre = '',
    numEjercicios = 0,
    ejercicios = [],
    id_protocolo,
    paciente,
    setFlag,
    setShow,
}) => {
    const router = useRouter()
    const handleAsignar = e => {
        e.preventDefault()
        axios
            .post('/api/protocolo/asignar', {
                id_protocolo,
                id_paciente: paciente.id,
            })
            .then(res => {
                router.push('/patient_profile/patient_dashboard', {
                    query: {
                        pacienteData: JSON.stringify(paciente),
                        protocoloData: JSON.stringify(id_protocolo),
                    },
                })
                setShow()
                setFlag(flag => !flag)
                dispatch({
                    type: 'UPDATE_PROTOCOLO_ID',
                    payload: id_protocolo,
                })
            })
            .catch(error => console.log(error))
    }
    return (
        <div
            className="border rounded-4 d-flex mt-4 py-2"
            style={{ width: '500px' }}>
            <div className="w-50 m-2 d-flex flex-wrap w-50">
                {ejercicios &&
                    ejercicios.map((ejercicio, index) =>
                        index < 4 ? (
                            <div
                                key={index}
                                style={{ width: '40%' }}
                                className="rounded m-2 position-relative">
                                <img
                                    className="rounded w-100 d-block"
                                    src="/images/logo/yoga.jpg"
                                />
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 bg-black rounded"
                                    style={{
                                        opacity: index >= 3 ? '0.5' : '0',
                                    }}></div>
                            </div>
                        ) : (
                            ''
                        ),
                    )}
            </div>
            <div className="w-50 px-2">
                <h3 className="fs-4">{nombre}</h3>
                <p
                    style={{ backgroundColor: '#cde8ff' }}
                    className="rounded-pill px-4 fw-semibold d-inline-block">
                    {numEjercicios} Ejercicios
                </p>
                <button
                    className="btn btn-primary rounded-pill w-100"
                    onClick={handleAsignar}>
                    <FontAwesomeIcon
                        icon={faLink}
                        style={{ width: '17px' }}
                        className="me-2"
                    />
                    Asignar
                </button>
            </div>
        </div>
    )
}
