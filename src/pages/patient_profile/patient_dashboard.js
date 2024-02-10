import React, { useEffect, useState } from 'react'
import Header from '@/components/Patient_profile_components/Header'
import Tabs from '@/components/Patient_profile_components/Tabs_section'
import AppLayout from '@/components/Layouts/AppLayout'
import { useRouter } from 'next/router'
import { AgregarModal } from '@/components/Protocolo/AgregarProtocolo'
import Head from 'next/head'
import { useAppState } from '@/reducer/AppStateContext'

const PatientDashboard = () => {
    let router = useRouter()
    const pacienteDataString = router.query.pacienteData
    let protocoloIdString = router.query.protocoloData

    const [idProtocolo, setIdProtocolo] = useState(null)
    const [paciente, setPaciente] = useState(null)
    const [flag, setFlag] = useState(false)

    const { state } = useAppState();
    
    useEffect(() => {
        if(state.protocoloId) setIdProtocolo(state.protocoloId)
    }, [state]);

    useEffect(() => {
        if (protocoloIdString) {
            const id_protocolo = JSON.parse(protocoloIdString)
            setIdProtocolo(id_protocolo)
        }
    }, [protocoloIdString])

    useEffect(() => {
        if (pacienteDataString) {
            const pacienteData = JSON.parse(pacienteDataString)
            setPaciente(pacienteData)
        }
    }, [pacienteDataString])

    return (
        <AppLayout flagNav={false}>
            <Head>
                <title>Perfil de paciente</title>
            </Head>
            <Header paciente={paciente} />
            <Tabs
                flag={flag}
                paciente={paciente}
                idProtocolo={idProtocolo}
                setFlag={setFlag}
            />
        </AppLayout>
    )
}

export default PatientDashboard
