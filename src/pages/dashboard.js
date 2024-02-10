import Filtro from '@/components/Home/Filtro'
import ListPacientes from '@/components/Home/ListPacientes'
import ModalEspecialidad from '@/components/Home/ModalEspecialidad'
import ModalLograr from '@/components/Home/ModalLograr'
import MyModal from '@/components/Home/MyModal'
import Search from '@/components/Home/Search'
import AppLayout from '@/components/Layouts/AppLayout'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'

import Head from 'next/head'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const [pacientes, setPacientes] = useState([])
    const [newPacientes, setNewPacientes] = useState([])
    const { user } = useAuth({ middleware: 'auth', wizard: true })
    const [paso, setPaso] = useState(1)
    const [idUser, setIdUser] = useState(null)

    useEffect(() => {
        setIdUser(user?.id)
    }, [user])

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const getPacientes = (order = 'asc_nombre', filter = 'sin_plan') => {
        axios
            .get(`/api/pacientes?order=${order}&filter=${filter}`)
            .then(res => {
                setPacientes(res.data)
            })
    }

    useEffect(() => getPacientes(), [])
    useEffect(() => {
        setNewPacientes([...pacientes])
    }, [pacientes])
    const updateWizar = async () => {
        setPaso(paso + 1)
        axios.post('/api/user/update/wizard', { id_user: idUser }).then()
    }
    return (
        <AppLayout>
            <Head>
                <title>BIOBOTIX CLINIC</title>
            </Head>

            <div className="py-2">
                {user?.wizard === 1 ? (
                    paso === 1 ? (
                        <ModalEspecialidad setPaso={setPaso} />
                    ) : (
                        <ModalLograr
                            setPaso={setPaso}
                            updateWizard={updateWizar}
                        />
                    )
                ) : (
                    ''
                )}
                <MyModal handleNewPaciente={getPacientes}></MyModal>
                <Search
                    pacientes={pacientes}
                    setNewPacientes={setNewPacientes}></Search>
                <Filtro
                    setPacientes={setPacientes}
                    getPacientes={getPacientes}></Filtro>
                <ListPacientes
                    pacientes={newPacientes}
                    getPacientes={getPacientes}></ListPacientes>
            </div>
        </AppLayout>
    )
}

export default Dashboard
