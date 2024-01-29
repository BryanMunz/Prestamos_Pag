import { InfoProtocolo } from '../Protocolo/InfoProtocolo'
import { ButtonsProtocolo } from '../Protocolo/ButtonsProtocolo'
import { CardsProtocolos } from '../Protocolo/CardsProtocolos'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

export const DetailsProtocolo = ({ paciente, id_protocolo }) => {
    const [idProtocolo, setIdProtocolo] = useState(null)
    const [ejercicios, setEjercicios] = useState(null)
    const [ejercicioProtocolo, setEjerciciosProtocolo] = useState(null)
    const [protocolo, setProtocolo] = useState(null)
    const [usuario, setUsuario] = useState(null)
    const [infoPersonal, setinfoPersonal] = useState(null)
    const [consultorio, setConsultorio] = useState(null)
    const [organizacion, setOrganizacion] = useState(null)
    const [fechas, setFechas] = useState(null)
    const [dias, setDias] = useState(null)
    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        if (id_protocolo) {
            setIdProtocolo(id_protocolo)
        }
    }, [id_protocolo])

    const getProtocolo = () => {
        axios(`/api/protocolo?id_protocolo=${idProtocolo}`)
            .then(res => {
                setEjercicios(res.data.ejercicios)
                setEjerciciosProtocolo(res.data.ejercicio_protocolo)
                setProtocolo(res.data.protocolo)
                setUsuario(res.data.usuario)
                setinfoPersonal(res.data.informacion_profesional)
                setConsultorio(res.data.consultorio)
                setOrganizacion(res.data.organizacion)
                setFechas(res.data.fechas)
                setDias(res.data.dias)
            })
            .catch(error => console.log(error))
    }

    const getComentarios = () => {
        axios
            .get(`/api/protocolo/comentarios?protocolo_id=${idProtocolo}`)
            .then(res => setComentarios(res.data.comentarios))
    }

    useEffect(() => {
        if(idProtocolo) getComentarios()
    }, [idProtocolo])

    useEffect(() => {
        if (idProtocolo) {
            getProtocolo()
        }
    }, [idProtocolo])
    return (
        <>
            <h2 className="fs-4 fw-bold mt-4">{protocolo?.nombre}</h2>
            <InfoProtocolo />
            <ButtonsProtocolo
                protocolo={protocolo}
                ejercicios={ejercicios}
                ejercicioProtocolo={ejercicioProtocolo}
                consultorio={consultorio}
                organizacion={organizacion}
                infoProfesional={infoPersonal}
                paciente={paciente}
                usuario={usuario}
                fechas={fechas}
                dias={dias}
                comentarios={comentarios}
                id_protocolo={idProtocolo}
                getComentarios={getComentarios}
            />
            <CardsProtocolos ejercicios={ejercicios} />
        </>
    )
}
