import ProgressRegistration from '@/components/ProgressRegistration'
import { useAuth } from '@/hooks/auth'
import { useForm } from '@/hooks/useForm'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import CountryCode from '@/components/CountryCode'
import InputError from '@/components/InputError'
import AppLayoutRegister from '@/components/Layouts/AppLayoutRegister'

const wizard = () => {
    const [code, setCode] = useState([])
    const [id_user, setid] = useState(null)
    const router = useRouter()

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/region/Americas/?fields=idd,name')
            .then(res => res.json())
            .then(res => {
                const combinedData = res.reduce(
                    (accumulator, currentArray) =>
                        accumulator.concat(currentArray),
                    [],
                )
                setCode(combinedData)
            })
    }, [])

    const [errors, setErrors] = useState([])

    const { user } = useAuth({ middleware: 'auth' })

    useEffect(() => {
        setid(user ? user.id : null)
    }, [user])

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const registerWizard = async ({ setErrors, ...props }) => {
        const res = { ...props, id_user }
        await csrf()

        setErrors([])

        axios
            .post('/api/register_organizacion', res)
            .then(() => router.push('/registro_planes'))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const {
        nombre,
        tipo,
        especialidad,
        num_personas,
        telefono,
        onInputChange,
        onSubmitForm,
    } = useForm(
        {
            nombre: '',
            tipo: '',
            especialidad: '',
            num_personas: '',
            telefono: '',
            setErrors,
        },
        registerWizard,
    )

    return (
        <AppLayoutRegister>
            <Head>
                <title>Biobotix Labs</title>
            </Head>

            <div className="container mt-5 px-1 px-sm-5">
                <ProgressRegistration location={0}></ProgressRegistration>

                <div className="row px-1 px-sm-5 mt-5">
                    <h2>Termina de crear tu cuenta</h2>

                    <p className="mt-2">
                        Necesitamos algunos datos extras para poder terminar la
                        configuración de tu cuenta. Por favor completa los
                        siguientes datos
                    </p>
                </div>
                <div className="px-1 mt-4 px-sm-5">
                    <form className="row" onSubmit={onSubmitForm}>
                        <div className="col-12 col-lg-6 mb-4">
                            <label className="form-label">
                                Nombre de tu Organización
                            </label>
                            <input
                                className="form-control"
                                id="nombre"
                                name="nombre"
                                type="text"
                                value={nombre}
                                onChange={e => onInputChange(e)}
                            />
                            <InputError
                                messages={errors.nombre}
                                className="mt-2"
                            />
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <label className="form-label">
                                Tipo de Organización
                            </label>
                            <select
                                className="form-select"
                                id="tipo"
                                name="tipo"
                                value={tipo}
                                onChange={e => onInputChange(e)}>
                                <option>Selecciona una Opción</option>
                                <option value="Estudiante">Estudiante</option>
                                <option value="Hospital">Hospital</option>
                                <option value="Clinica">Clinica</option>
                                <option value="independiente">
                                    independiente
                                </option>
                                <option value="Profesional">Profesional</option>
                            </select>
                            <InputError
                                messages={errors.tipo}
                                className="mt-2"
                            />
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <label className="form-label">
                                Especialidad Principal:
                            </label>
                            <select
                                className="form-select"
                                id="especialidad"
                                name="especialidad"
                                value={especialidad}
                                onChange={e => onInputChange(e)}>
                                <option>Selecciona una Opción</option>
                                <option value='Sin especialidad'>Sin especialidad</option>
                                <option value='Neurólogo (a)'>Neurólogo (a)</option>
                                <option value='Ortopedista'>Ortopedista</option>
                                <option value='Pediatra'>Pediatra</option>
                                <option value='Geriatra'>Geriatra</option>
                                <option value='Médico en rehabilitación'>Médico en rehabilitación</option>
                                <option value='Fisioterapeuta deportivo'>Fisioterapeuta deportivo</option>
                                <option value='Fisioterapeuta respiratorio'>Fisioterapeuta respiratorio</option>
                                <option value='Fisioterapeuta en neurorrehabilitación'>Fisioterapeuta en neurorrehabilitación</option>
                                <option value='Fisioterapeuta en deglución'>Fisioterapeuta en deglución</option>
                                <option value='Nutrición'>Nutrición</option>
                                <option value='Psicología'>Psicología</option>
                                <option value='Psiquiatría'>Psiquiatría</option>
                                <option value='Fisioterapia Ortopedica y traumatológica'>Fisioterapia Ortopedica y traumatológica</option>
                            </select>
                            <InputError
                                messages={errors.especialidad}
                                className="mt-2"
                            />
                        </div>
                        <div className="col-12 col-lg-6 mb-4">
                            <label className="form-label">
                                Numeros de personas de la Organización
                            </label>
                            <select
                                className="form-select"
                                id="num_personas"
                                name="num_personas"
                                value={num_personas}
                                onChange={e => onInputChange(e)}>
                                <option>Selecciona una Opción</option>
                                <option value="1"> 1 </option>
                                <option value="2-5"> 2-5 </option>
                                <option value="6-9"> 6-9 </option>
                                <option value="10"> 10+ </option>
                            </select>
                            <InputError
                                        messages={errors.num_personas}
                                        className="mt-2"
                                    />
                        </div>

                        <div className="col-12 col-lg-6 mb-3">
                            <label className="form-label">
                                Ingrese tu número de télefono
                            </label>
                            <div>
                                <select
                                    className="form-select w-25 d-inline-block"
                                    id="">
                                    <CountryCode></CountryCode>
                                </select>
                                <input
                                    type="number"
                                    className="form-control w-75 d-inline-block"
                                    name="telefono"
                                    value={telefono}
                                    onChange={e => onInputChange(e)}
                                />
                                <InputError
                                        messages={errors.telefono}
                                        className="mt-2"
                                    />
                            </div>
                        </div>

                        <div className="col-12 mb-5">
                            <button
                                type="submit"
                                className="btn btn-outline-info float-end">
                                Siguiente
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayoutRegister>
    )
}

export default wizard
