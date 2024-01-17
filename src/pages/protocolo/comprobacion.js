import ReusableExerciseDosage from '@/components/Protocolo/exercise_dosage_card'
import React, { useEffect, useState } from 'react'
import ItemsDuracionScreen from '@/components/Protocolo/ItemsDuracion'
import axios from '@/lib/axios'

const ComprobacionProtocoloScreen = ({
    exercisesProp = [],
    setData,
    data,
    setCardsDetails,
}) => {
    const [exercises, setExercises] = useState([])

    const [protocoloGuardado, setProtocoloGuardado] = useState(false)
    const [nombreProtocolo, setNombreProtocolo] = useState('')
    const [comentarios, setComentarios] = useState('')
    const [fechaInicio, setFechaInicio] = useState('')

    const handleGuardarProtocolo = e => {
        setProtocoloGuardado(e.target.checked)
        setData(data => ({ ...data, guardar: e.target.checked }))
    }

    const handleNombreProtocolo = e => {
        setNombreProtocolo(e.target.value)
    }

    const handleComentarios = e => {
        setComentarios(e.target.value)
    }

    useEffect(() => {
        if (exercisesProp.length > 0) {
            setExercises([...exercisesProp])
        }
    }, [exercisesProp])

    useEffect(() => {
        if (data?.comentarios !== '') {
            setComentarios(data?.comentarios)
        }
    }, [])

    useEffect(() => {
        if (data?.fecha_inicio !== '') {
            setFechaInicio(data?.fecha_inicio)
        }
    }, [])

    const handleGuardar = () => {
        axios
            .post('/api/protocolo/store', {
                ...data,
                nombre: nombreProtocolo,
                id_user: 2,
            })
            .then(e => console.log(e))
            .catch(error => console.log(error))
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                margin: '0 auto',
                padding: '50px',
            }}>
            <h1>Comprueba los elementos del programa de ejercicios.</h1>
            <div
                style={{
                    margin: '20px',
                }}>
                <label>
                    <input
                        type="checkbox"
                        checked={protocoloGuardado}
                        onChange={handleGuardarProtocolo}
                        style={{ marginRight: '5px' }}
                    />
                    Guardar protocolo en la biblioteca de programas
                </label>
            </div>
            <div
                style={{
                    margin: '20px',
                    width: '100%', // Asegura que el contenedor se expanda al 100% del ancho disponible
                }}>
                <h5>Nombre de Protocolo</h5>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {' '}
                    {/* Contenedor que controlará el ancho del input */}
                    <input
                        type="text"
                        value={nombreProtocolo}
                        onChange={handleNombreProtocolo}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                    />
                </div>

                <div
                    style={{
                        margin: '20px',
                    }}>
                    <h5>Comentarios</h5>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <textarea
                            value={comentarios}
                            onChange={handleComentarios}
                            style={{
                                width: '100%',
                                maxWidth: '800px',
                                minHeight: '100px',
                                padding: '8px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                boxSizing: 'border-box',
                            }}
                        />
                    </div>
                </div>
            </div>

            <h5>Duración del Programa</h5>
            <ItemsDuracionScreen data={data} setData={setData} />
            {/* Utiliza ExerciseDosage */}
            <h5>Dosificación del Programa</h5>
            <ReusableExerciseDosage
                items={exercises}
                setCardsDetails={setCardsDetails}
            />

            <div>
                <button className="btn btn-primary" onClick={handleGuardar}>
                    Guardar
                </button>
            </div>
        </div>
    )
}

export default ComprobacionProtocoloScreen
