import { useEffect, useState } from 'react'
import { BtnAntecedentes } from './Antecedentes/BtnAntecedentes'
import { ItemsAlergias } from './Antecedentes/ItemsAlergias'
import { ItemsPatologicos } from './Antecedentes/ItemsPatologicos'
import { ItemsNoPatologicos } from './Antecedentes/ItemsNoPatologicos'
import { ItemsGineco } from './Antecedentes/ItemsGineco'
import { ModalAgregarConsulta } from './ModalAgregarConsulta'
import { ShowPatologicos } from './Antecedentes/ShowPatologicos'
import axios from '@/lib/axios'
import { ListHIstoriaClinica } from './ListHIstoriaClinica'

export const Historijilla = ({ paciente }) => {
    const [antecedentes, setAntecedentes] = useState(null)
    const [flagAntecedentes, setFlagAntecedentes] = useState({
        alergias: false,
        antecedentes_patologicos: false,
        antecedentes_no_patologicos: false,
        antecedentes_gineco: false,
    })
    const [historial, setHistorial] = useState(null)

    const [patologias, setPatologias] = useState([])

    const getPatologias = () => {
        axios.get(`/api/antecedentes?id_paciente=${paciente.id}`).then(res => {
            console.log(res.data)
            setAntecedentes(res.data)
        })
        axios
            .get(`/api/historias_clinicas?id_paciente=${paciente.id}`)
            .then(res => {
                setHistorial(res.data)
            })
    }
    useEffect(() => {
        getPatologias()
    }, [])

    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-12 col-sm-6 text-center">
                    <ModalAgregarConsulta paciente={paciente} />
                    <div
                        className="m-auto mt-4 mb-5 px-3"
                        style={{ backgroundColor: '#f9fbfc' }}>
                        <h2 className="fs-6 text-start ms-5">
                            CONSULTAS INICIADAS
                        </h2>

                        <ListHIstoriaClinica
                            historias={historial}
                            paciente={paciente}
                        />
                    </div>
                </div>
                <div className="col-12 col-sm-6 border p-0">
                    <h3
                        className="fs-6 text-start m-0 px-3 py-2 border-bottom"
                        style={{ backgroundColor: '#f9fbfc' }}>
                        ANTECEDENTES
                    </h3>
                    <div className="p-2">
                        <div>
                            <BtnAntecedentes
                                text="Alergias"
                                name="alergias"
                                setAntecedentes={setFlagAntecedentes}
                                flags={flagAntecedentes}
                            />
                            {flagAntecedentes.alergias ? (
                                <ItemsAlergias paciente={paciente} />
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                    <div className="p-2">
                        <div>
                            <BtnAntecedentes
                                text="Antecedentes Patologicos"
                                name="antecedentes_patologicos"
                                setAntecedentes={setFlagAntecedentes}
                                flags={flagAntecedentes}
                            />
                            {flagAntecedentes.antecedentes_patologicos ? (
                                <ItemsPatologicos
                                    paciente={paciente}
                                    optionsPatologicos={
                                        antecedentes?.antecedentes_patologicos
                                    }
                                />
                            ) : (
                                <ShowPatologicos
                                    data={
                                        antecedentes?.antecedentes_patologicos
                                    }
                                />
                            )}
                        </div>
                    </div>
                    <div className="p-2">
                        <div>
                            <BtnAntecedentes
                                text="Antecedentes No Patologicos"
                                name="antecedentes_no_patologicos"
                                setAntecedentes={setFlagAntecedentes}
                                flags={flagAntecedentes}
                            />
                            {flagAntecedentes.antecedentes_no_patologicos ? (
                                <ItemsNoPatologicos
                                    paciente={paciente}
                                    optionsNoPatologicos={
                                        antecedentes.antecedentes_no_patologicos
                                    }
                                />
                            ) : (
                                <ShowPatologicos
                                    data={
                                        antecedentes?.antecedentes_no_patologicos
                                    }
                                />
                            )}
                        </div>
                    </div>

                    <div className="p-2">
                        <div>
                            <BtnAntecedentes
                                text="Antecedentes Gineco-Obstetricos"
                                name="antecedentes_gineco"
                                setAntecedentes={setFlagAntecedentes}
                                flags={flagAntecedentes}
                            />
                            {flagAntecedentes.antecedentes_gineco ? (
                                <ItemsGineco
                                    paciente={paciente}
                                    optionsGineco={
                                        antecedentes?.antecedentes_gineco
                                    }
                                />
                            ) : (
                                <ShowPatologicos
                                    data={antecedentes?.antecedentes_gineco}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
