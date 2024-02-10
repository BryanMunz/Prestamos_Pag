import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import router from 'next/router'

function calcularEdad(fechaNacimiento) {
    const fechaNacimientoObj = new Date(fechaNacimiento)
    const fechaActual = new Date()

    let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear()

    // Ajustar la edad si aún no ha cumplido años en el año actual
    if (
        fechaActual.getMonth() < fechaNacimientoObj.getMonth() ||
        (fechaActual.getMonth() === fechaNacimientoObj.getMonth() &&
            fechaActual.getDate() < fechaNacimientoObj.getDate())
    ) {
        edad--
    }

    return edad
}

const Header = ({ paciente }) => {
    const [patientName, setPatientName] = useState('')
    const [edad, setEdad] = useState('Sin información')
    const [sexo, setSexo] = useState('Sin información')
    const [correo, setCorreo] = useState('')
    const [numeroExpediente, setNumeroExpediente] = useState(
        'Sin Num. expedinete',
    )

    const fillData = () => {
        const name = paciente?.name + ' ' + paciente?.last_name
        setPatientName(name)
        if (paciente?.fecha_nacimiento)
            setEdad(calcularEdad(paciente?.fecha_nacimiento))
        if (paciente?.sexo) {
            switch (paciente?.sexo) {
                case 'M':
                    setSexo('Masculino')
                    break
                case 'F':
                    setSexo('Femenino')
                    break
            }
        }
        if (paciente?.email) setCorreo(paciente?.email)
    }

    useEffect(() => {
        if (paciente) fillData()
    }, [paciente])

    const headerStyle = {
        backgroundColor: '#242735',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontSize: '1.5rem',
        padding: '20px',
    }

    const userInfoStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    }

    const userDataStyle = {
        flex: '1',
        textAlign: 'left',
        margin: '5px',
        fontSize: '1.3rem',
    }

    const goBack = () => {
        router.push('/dashboard') // Navegar hacia atrás usando next/router
    }

    // Regla @media para ajustar el padding en pantallas pequeñas
    const smallScreenPadding = `
        @media (max-width: 768px) {
            headerStyle.padding = '10px';
        }
    `

    return (
        <div style={headerStyle}>
            <div style={{ alignSelf: 'flex-start' }}>
                <div
                    onClick={goBack}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '1.3rem',
                    }}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ marginRight: '10px' }}
                    />
                    <span>Volver</span>
                </div>
                <h1 style={{ fontSize: '2rem', marginTop: '10px' }}>
                    {patientName}
                </h1>
            </div>
            <div style={userInfoStyle}>
                <div style={userDataStyle}>
                    <p style={{ color: 'grey' }}>Edad:</p>
                    <p style={{ color: 'white' }}>{edad}</p>
                </div>
                <div style={userDataStyle}>
                    <p style={{ color: 'grey' }}>Sexo:</p>
                    <p style={{ color: 'white' }}>{sexo}</p>
                </div>
                <div style={userDataStyle}>
                    <p style={{ color: 'grey' }}>Correo:</p>
                    <p style={{ color: 'white' }}>{correo}</p>
                </div>
                <div style={userDataStyle}>
                    <p style={{ color: 'grey' }}>Número de expediente:</p>
                    <p style={{ color: 'white' }}>{numeroExpediente}</p>
                </div>
            </div>
        </div>
    )
}

export default Header
