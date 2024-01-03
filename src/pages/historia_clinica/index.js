import { DiagnosticoTerapeutico } from '@/components/HistoriaClinica/DiagnosticoTerapeutico/DiagnosticoTerapeutico'
import { MarchaTraslado } from '@/components/HistoriaClinica/MarchaTraslado/MarchaTraslado'
import { MotivosConsulta } from '@/components/HistoriaClinica/MotivosConsulta/MotivosConsulta'
import { Nav } from '@/components/HistoriaClinica/Nav'
import { NotasEvolucion } from '@/components/HistoriaClinica/NotasEvolucion/NotasEvolucion'
import { ResultadoYEstudios } from '@/components/HistoriaClinica/Resultado/ResultadoYEstudios'
import { ResumenClinico } from '@/components/HistoriaClinica/ResumenClinico.js/ResumenClinico'
import { SomatometriaSignosVitales } from '@/components/HistoriaClinica/SomatometriaSignosVitales/SomatometriaSignosVitales'
import AppLayout from '@/components/Layouts/AppLayout'
import axios from '@/lib/axios'
import style from '@/style/HistoriaClinica/LayoutHistorialClinica.module.css'
import { data } from 'autoprefixer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const historia_clinica = () => {
    const router = useRouter()
    const idHistoriaClinicaString = router.query.id_historia_clinica
    const pacienteDataString = router.query.pacienteData
    const [paciente, setPaciente] = useState(null)
    const [id_historia_clinica, setIdHistoriaClinica] = useState(null)
    const [historias, setHistorias] = useState(null);
    useEffect(() => {
        if (pacienteDataString) {
            const pacienteData = JSON.parse(pacienteDataString)
            setPaciente(pacienteData)
        }
    }, [pacienteDataString])

    useEffect(() => {
        if (idHistoriaClinicaString) {
            const idHostoriaClinica = JSON.parse(idHistoriaClinicaString)
            setIdHistoriaClinica(idHostoriaClinica)
        }
    }, [idHistoriaClinicaString])

    useEffect(() => {
        if (id_historia_clinica) {
            axios
                .get(`/api/historias_clinicas/datos?id=${id_historia_clinica}`)
                .then(res =>{
                    console.log(res.data)
                    setHistorias(res.data)
                })
        }
    }, [id_historia_clinica])
    return (
        <AppLayout flagNav={false}>
            <div className={`${style.Contenedor}`}>
                <div
                    className={`${style.Nav}`}
                    style={{
                        borderBottom: '2px solid #bcbcbc',
                        borderRight: '1px solid #bcbcbc',
                    }}>
                    <Nav paciente={paciente} />
                </div>
                <div className={`${style.Contenido} px-2`}>
                    <SomatometriaSignosVitales
                        id_historia_clinica={id_historia_clinica}
                        data={historias}
                    />
                    <MarchaTraslado id_historia_clinica={id_historia_clinica} />
                    <MotivosConsulta
                        id_historia_clinica={id_historia_clinica}
                        data={historias?.motivos}
                    />
                    <DiagnosticoTerapeutico
                        id_historia_clinica={id_historia_clinica}
                        data={historias?.diagnostico}
                    />
                    <NotasEvolucion id_historia_clinica={id_historia_clinica} data={historias?.notas} />
                    <ResultadoYEstudios />
                </div>
                <div className={`${style.Antecedentes}`}>
                    <ResumenClinico paciente={paciente} />
                </div>
            </div>
        </AppLayout>
    )
}

export default historia_clinica
