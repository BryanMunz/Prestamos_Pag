import { useEffect, useState } from 'react'
import { Zona } from './Option/Zona'
import { Dificultad } from './Option/Dificultad'
import { Especialidad } from './Option/Especialidad'
import { Equipo } from './Option/Equipo'
import { Posicion } from './Option/Posicion'

export const FiltroEjercicio = ({
    ejercicios = [],
    setejercicios,
    setNewejercicios,
    setFilter,
}) => {
    const [filterElement, setFilterElement] = useState({
        zona: '',
        dificultad: '',
        especialidad: '',
        objetivo: '',
        equipo: '',
        posicion: '',
    })

    useEffect(() => {
        const filterElements = filtroEjercicio()
        setNewejercicios([...filterElements])
    }, [filterElement])

    const filtroEjercicio = () => {
        const {
            zona,
            dificultad,
            especialidad,
            objetivo,
            equipo,
            posicion,
        } = filterElement
        let filterEjercicios = ejercicios
        if (zona === '') {
            filterEjercicios = filterEjercicios
        } else {
            filterEjercicios = filterEjercicios.filter(
                ejercicio => ejercicio.zona === zona,
            )
        }
        if (dificultad === '') {
            filterEjercicios = filterEjercicios
        } else {
            filterEjercicios = filterEjercicios.filter(
                ejercicio => ejercicio.dificultad === dificultad,
            )
        }
        if (especialidad === '') {
            filterEjercicios = filterEjercicios
        } else {
            filterEjercicios = filterEjercicios.filter(
                ejercicio => ejercicio.especialidad === especialidad,
            )
        }
        if (objetivo === '') {
            filterEjercicios = filterEjercicios
        } else {
            filterEjercicios = filterEjercicios.filter(
                ejercicio => ejercicio.objetivo === objetivo,
            )
        }
        if (equipo === '') {
            filterEjercicios = filterEjercicios
        } else {
            filterEjercicios = filterEjercicios.filter(
                ejercicio => ejercicio.equipo === equipo,
            )
        }
        if (posicion === '') {
            filterEjercicios = filterEjercicios
        } else {
            filterEjercicios = filterEjercicios.filter(
                ejercicio => ejercicio.posicion === posicion,
            )
        }
        return filterEjercicios
    }

    const handleChangeFilterElement = ({ target }) => {
        const { name, value } = target
        setFilterElement({ ...filterElement, [name]: value })
    }
    const handleChangeFilter = e => {
        setFilter(e.target.value)
    }
    return (
        <div className="d-flex justify-content-between flex-row flex-wrap px-2 py-2">
            <div className="me-2 mt-2">
                <select
                    className="form-select"
                    onChange={handleChangeFilter}
                    name="filter">
                    <option value="mios">Mis ejercicios</option>
                    <option value="todos">Todos</option>
                </select>
            </div>
            <div className="me-2 mt-2">
                <select
                    className="form-select"
                    name="zona"
                    onChange={handleChangeFilterElement}>
                    <option value=''>Zona</option>
                    <Zona />
                </select>
            </div>
            <div className="me-2 mt-2">
                <select
                    className="form-select"
                    name="dificultad"
                    onChange={handleChangeFilterElement}>
                    <option value=''>Dificultad</option>
                    <Dificultad />
                </select>
            </div>
            <div className="me-2 mt-2">
                <select
                    className="form-select"
                    name="especialidad"
                    onChange={handleChangeFilterElement}>
                    <option value=''>Especialidad</option>
                    <Especialidad />
                </select>
            </div>
            <div className="me-2 mt-2">
                <select className="form-select">
                    <option value=''>Objetivo</option>
                </select>
            </div>
            <div className="me-2 mt-2">
                <select
                    className="form-select"
                    name="equipo"
                    onChange={handleChangeFilterElement}>
                    <option value=''>Equipo</option>
                    <Equipo />
                </select>
            </div>
            <div className="me-2 mt-2">
                <select
                    className="form-select d-inline-block"
                    name="posicion"
                    onChange={handleChangeFilterElement}>
                    <option value=''>Posición</option>
                    <Posicion />
                </select>
            </div>
        </div>
    )
}
