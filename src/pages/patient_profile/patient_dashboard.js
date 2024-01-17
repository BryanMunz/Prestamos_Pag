import React, { useEffect, useState } from 'react'
import Header from '@/components/Patient_profile_components/Header'
import Tabs from '@/components/Patient_profile_components/Tabs_section'
import AppLayout from '@/components/Layouts/AppLayout'
import { useRouter } from 'next/router'
import { AgregarModal } from '@/components/Protocolo/AgregarProtocolo'

const PatientDashboard = () => {
    const router = useRouter()
    const pacienteDataString = router.query.pacienteData
    const [paciente, setPaciente] = useState(null)
    useEffect(() => {
        if (pacienteDataString) {
            const pacienteData = JSON.parse(pacienteDataString)
            setPaciente(pacienteData)
        }
    }, [pacienteDataString])


    return (
        <AppLayout flagNav={false}>
            <Header paciente={paciente} />
            <Tabs paciente={paciente} /> 
        </AppLayout>
    )
}

export default PatientDashboard
