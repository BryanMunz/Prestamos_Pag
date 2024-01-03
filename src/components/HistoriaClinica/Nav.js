import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

export const Nav = ({ paciente }) => {
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
    return (
        <>
            <style>
                {`
                .btn_hover:hover{
                    color: #ffffff !important;
                }
            `}
            </style>
            <button
                className="btn btn-primary ms-4 mt-2 d-flex align-items-center"
                onClick={handleBack}>
                <FontAwesomeIcon icon={faAngleLeft} style={{ width: '8px' }} />
                <span className="ms-1">Atras</span>
            </button>
            <div className="d-flex px-4 py-3 align-items-center">
                <div>
                    <img
                        src="/images/doctor/default.jpg"
                        width={'45px'}
                        className="rounded-circle"
                    />
                </div>
                <div className="px-3">
                    <p className="fs-6 fw-semibold text-secondary m-0">
                        {`${paciente?.name} ${paciente?.last_name}`}
                    </p>
                    <p className="fs-6 text-secondary m-0">
                        01/01/2024 - 22 años
                    </p>
                </div>
                <div className="px-3">
                    <p className="bg-success rounded-pill px-3 text-white fw-semibold m-0">
                        Programa activo
                    </p>
                    <p className="text-secondary m-0">Masculino</p>
                </div>
                <div className="px-3">
                    <button
                        className="btn btn-outline-primary btn_hover rounded-circle d-flex justify-content-center align-items-center text-primary"
                        style={{ width: '40px', height: '40px' }}>
                        <FontAwesomeIcon
                            icon={faPen}
                            style={{ width: '20px' }}
                        />
                    </button>
                </div>
            </div>
        </>
    )
}
