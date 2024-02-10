import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const Nav = ({ paciente, handleScroll }) => {
    const router = useRouter()
    const [buttons, setButtons] = useState({
        signos_vitales: false,
        marcha: false,
        motivos_consultas: false,
        diagnostico_terapeutico: false,
        notas_evolucion: false,
        archivos: false,
    })

    const handleActive = ({ target }) => {
        setButtons({
            ...{
                signos_vitales: false,
                marcha: false,
                motivos_consultas: false,
                diagnostico_terapeutico: false,
                notas_evolucion: false,
                archivos: false,
            },
            [target.name]: !buttons[target.name],
        })
        handleScroll(target.name)
    }
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
                .buttons {
                    border: none;
                    background-color: #ffffff;
                }
                .btn_active {
                    border-bottom: 3px solid #1b73f9;
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
            <div className="d-flex justify-content-center">
                <button
                    className={`buttons rounded-0 ${
                        buttons.signos_vitales ? 'btn_active' : ''
                    }`}
                    onClick={handleActive}
                    name="signos_vitales">
                    Signos Vitales
                </button>
                <button
                    className={`buttons rounded-0 ${
                        buttons.marcha ? 'btn_active' : ''
                    }`}
                    onClick={handleActive}
                    name="marcha">
                    Marcha
                </button>
                <button
                    className={`buttons rounded-0 ${
                        buttons.motivos_consultas ? 'btn_active' : ''
                    }`}
                    onClick={handleActive}
                    name="motivos_consultas">
                    Motivos de Consulta
                </button>
                <button
                    className={`buttons rounded-0 ${
                        buttons.diagnostico_terapeutico ? 'btn_active' : ''
                    }`}
                    onClick={handleActive}
                    name="diagnostico_terapeutico">
                    Diagnostico Terapéutico
                </button>
                <button
                    className={`buttons rounded-0 ${
                        buttons.notas_evolucion ? 'btn_active' : ''
                    }`}
                    onClick={handleActive}
                    name="notas_evolucion">
                    Notas Evolución
                </button>
                <button
                    className={`buttons rounded-0 ${
                        buttons.archivos ? 'btn_active' : ''
                    }`}
                    onClick={handleActive}
                    name="archivos">
                    Archivo
                </button>
            </div>
        </>
    )
}
