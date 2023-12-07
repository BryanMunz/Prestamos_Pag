import { AgregarEjercicio } from '@/components/Ejercicios/AgregarEjercicio'
import { ButtonLink } from '@/components/Ejercicios/ButtonLink'
import { Ejercicios } from '@/components/Ejercicios/Ejercicios'
import { FiltroEjercicio } from '@/components/Ejercicios/FiltroEjercicio'
import Header from '@/components/Ejercicios/Header'
import Search from '@/components/Home/Search'
import AppLayout from '@/components/Layouts/AppLayout'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

const index = () => {
    const [ejercicios, setejercicios] = useState([])
    const [newEjercicios, setNewejercicios] = useState([])
    const [filter, setFilter] = useState('todos')

    
    const getEjercicios = () => {
        axios.get(`/api/obtener_ejercicios?filter=${filter}`).then(res => {
            setejercicios(res.data)
        })
    }

    useEffect(() => {
        if(ejercicios) setNewejercicios(ejercicios);
    }, [ejercicios]);
    
    useEffect(() => {
        getEjercicios()
    }, [filter])
    return (
        <AppLayout header={<Header />}>
            <div className="bg-white shadow w-75 m-auto mt-4 px-2 py-4">
                <div className="mx-4 my-3 border-bottom">
                    <ButtonLink text="Biblioteca de ejercicios" active={true} />
                    <ButtonLink text="Plantillas de programas" />
                </div>
                <div className="col-12 col-sm-6 ps-3 mb-5">
                    <Search />
                    <AgregarEjercicio />
                </div>
                <div className="mt-5 mx-4">
                    <FiltroEjercicio ejercicios={ejercicios} setejercicios={setejercicios} setNewejercicios={setNewejercicios} setFilter={setFilter} />
                </div>
                <div className='pt-3 mx-2'>
                    <Ejercicios ejercicios={newEjercicios}/>
                </div>
            </div>
        </AppLayout>
    )
}

export default index
