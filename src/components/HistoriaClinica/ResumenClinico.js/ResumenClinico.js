import { ItemsAlergias } from '@/components/Patient_profile_components/Antecedentes/ItemsAlergias'
import { ShowPatologicos } from '@/components/Patient_profile_components/Antecedentes/ShowPatologicos'
import { ListHIstoriaClinica } from '@/components/Patient_profile_components/ListHIstoriaClinica'
import axios from '@/lib/axios'
import {
    faPersonRunning,
    faCaretUp,
    faFileLines,
    faPaperclip,
    faCalendarDays,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
export const ResumenClinico = ({ paciente }) => {
    const [historial, setHistorial] = useState(null)
    const [flags, setFlags] = useState({
        antecedentes: false,
        consultas: false,
    })
    const [antecedentes, setAntecedentes] = useState(null)

    const getHistias = () => {
        axios
            .get(`/api/historias_clinicas?id_paciente=${paciente?.id}`)
            .then(res => {
                setHistorial(res.data)
            })
        axios.get(`/api/antecedentes?id_paciente=${paciente?.id}`).then(res => {
            setAntecedentes(res.data)
        })
    }
    useEffect(() => {
        if (paciente) getHistias()
    }, [paciente])

    const handleClick = (name, value) => {
        setFlags({ ...flags, [name]: !value })
    }

    return (
        <div
            className=""
            style={{
                borderLeft: '1px solid #bcbcbc',
                borderBottom: '1px solid #bcbcbc',
                height: '100vh',
            }}>
            <h3
                className="fs-5 py-4 ps-3"
                style={{ borderBottom: '2px solid #bcbcbc' }}>
                RESUMEN CLÍNICO
            </h3>
            <div className="px-2 d-flex align-items-center justify-content-between py-2 border-bottom">
                <div className="d-flex align-items-center">
                    <span className="px-2">
                        <FontAwesomeIcon
                            icon={faPersonRunning}
                            style={{ width: '22px', color: '#4ba2dc' }}
                        />
                    </span>
                    <p className="m-0">PROGRAMAS DE REHABILITACIÓN INICIADOS</p>
                </div>
                <span className="px-2">
                    <FontAwesomeIcon
                        icon={faCaretUp}
                        style={{ width: '22px', color: '#000000' }}
                    />
                </span>
            </div>
            <div
                className="border-bottom"
                onClick={() => handleClick('antecedentes', flags.antecedentes)}>
                <div className="px-2 d-flex align-items-center justify-content-between py-2">
                    <div className="d-flex align-items-center">
                        <span className="px-2">
                            <FontAwesomeIcon
                                icon={faFileLines}
                                style={{ width: '22px', color: '#35bb6c' }}
                            />
                        </span>
                        <p className="m-0">ANTECEDENTES</p>
                    </div>
                    <span className="px-2">
                        {!flags.antecedentes ? (
                            <FontAwesomeIcon
                                icon={faCaretUp}
                                style={{ width: '22px', color: '#000000' }}
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                style={{ width: '22px', color: '#000000' }}
                            />
                        )}
                    </span>
                </div>
                {flags.antecedentes ? (
                    <div>
                        <h5 className="ms-1" style={{ fontSize: '1rem' }}>
                            Antecedentes Patologicos
                        </h5>
                        <ShowPatologicos
                            data={antecedentes?.antecedentes_patologicos}
                        />
                        <h5 className="ms-1" style={{ fontSize: '1rem' }}>
                            Antecedentes No Patologicos
                        </h5>
                        <ShowPatologicos
                            data={antecedentes?.antecedentes_no_patologicos}
                        />
                        <h5 className="ms-1" style={{ fontSize: '1rem' }}>
                            Antecedentes Gineco
                        </h5>
                        <ShowPatologicos
                            data={antecedentes?.antecedentes_gineco}
                        />
                    </div>
                ) : (
                    ''
                )}
            </div>

            <div className="px-2 d-flex align-items-center justify-content-between py-2 border-bottom">
                <div className="d-flex align-items-center">
                    <span className="px-2">
                        <FontAwesomeIcon
                            icon={faPaperclip}
                            style={{ width: '22px', color: '#17aaf5' }}
                        />
                    </span>
                    <p className="m-0">ARCHIVOS ADJUNTOS</p>
                </div>
                <span className="px-2">
                    <FontAwesomeIcon
                        icon={faCaretUp}
                        style={{ width: '22px', color: '#000000' }}
                    />
                </span>
            </div>
            <div className="border-bottom">
                <div
                    className="px-2 d-flex align-items-center justify-content-between py-2"
                    onClick={() => handleClick('consultas', flags.consultas)}>
                    <div className="d-flex align-items-center">
                        <span className="px-2">
                            <FontAwesomeIcon
                                icon={faCalendarDays}
                                style={{ width: '22px', color: '#f37c65' }}
                            />
                        </span>
                        <p className="m-0">CONSULTAS PASADAS</p>
                    </div>
                    <span className="px-2">
                        {!flags.consultas ? (
                            <FontAwesomeIcon
                                icon={faCaretUp}
                                style={{ width: '22px', color: '#000000' }}
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                style={{ width: '22px', color: '#000000' }}
                            />
                        )}
                    </span>
                </div>

                <div
                    className={`p-2 ${flags.consultas ? 'd-block' : 'd-none'}`}>
                    <ListHIstoriaClinica
                        historias={historial}
                        paciente={paciente}
                    />
                </div>
            </div>
        </div>
    )
}
