import ProgressRegistration from '@/components/ProgressRegistration'
import Head from 'next/head'
import styles from '@/style/register/register.module.css'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import { useForm } from '@/hooks/useForm'
import { useRouter } from 'next/router'
import InputError from '@/components/InputError'
import AppLayoutRegister from '@/components/Layouts/AppLayoutRegister'

const registro_clinica = () => {
    const router = useRouter()
    const [id_user, setid] = useState(null)
    const [paises, setPaises] = useState([])
    const [tokenEstado, setTokenEstado] = useState('')
    const [estados, setEstados] = useState([])
    const [ciudades, setCiudades] = useState([])
    const [logo, setlogo] = useState(null);

    const onChangeFile = (event) => {
        setlogo(event[0]);
    }

    const handleClick = () => {
        router.push('/register/registro_finalizado')
    }

    const [errors, setErrors] = useState([])
    const { user } = useAuth({ middleware: 'auth' })

    const registerWizard = async ({ setErrors, ...props }) => {
        const res = { ...props, id_user }
        const body = new FormData();
        
        Object.entries(res).forEach( ([propiedad, valor ]) => body.append(propiedad, valor) )

        if(logo != null){
            body.append('logo', logo)
        }

        await csrf()

        setErrors([])

        axios
            .post('/api/register_consultorio', body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
            })
            .then(() => router.push('/register/registro_finalizado'))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const {
        nombre,
        direccion,
        pais,
        estado,
        ciudad,
        cp,
        telefono,
        cedula,
        especialidad,
        instituto,
        onInputChange,
        onSubmitForm,
    } = useForm(
        {
            nombre: '',
            direccion: '',
            pais: '',
            estado: '',
            ciudad: '',
            cp: '',
            telefono: '',
            cedula: '',
            especialidad: '',
            instituto: '',
            setErrors,
        },
        registerWizard,
    )

    useEffect(() => {
        setid(user ? user.id : null)
    }, [user])

    useEffect(() => {
        fetch('https://restcountries.com/v3/all')
            .then(res => res.json())
            .then(res => setPaises(res))
    }, [])

    useEffect(() => {
        fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'api-token':
                    'bHI-7dVNNo107CbQx8pIlIBSQULTkK4O2ymk-pCaDKCQdVnM4FjgkEJQ29rNLZ9DKQY',
                'user-email': 'alextepe27@gmail.com',
            },
        })
            .then(res => res.json())
            .then(res => setTokenEstado(res.auth_token))
    }, [])

    useEffect(() => {
        if (pais != '') {
            fetch(`https://www.universal-tutorial.com/api/states/${pais}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${tokenEstado}`,
                },
            })
                .then(res => res.json())
                .then(res => setEstados(res))
        }
    }, [pais])

    useEffect(() => {
        if (estado != '') {
            fetch(`https://www.universal-tutorial.com/api/cities/${estado}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${tokenEstado}`,
                },
            })
                .then(res => res.json())
                .then(res => setCiudades(res))
        }
    }, [estado])

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    return (
        <AppLayoutRegister>
            <Head>
                <title>Biobotix Labs</title>
            </Head>

            <div className="container mt-5 px-1 px-sm-5">
                <ProgressRegistration location={2}></ProgressRegistration>

                <div className="row px-1 mt-5 px-sm-5">
                    <h2>Información Profesional</h2>

                    <p className="mt-1">
                        Ingresa tu información profesional para poder generar
                        reportes y documentos seguimientos
                    </p>
                </div>

                <div className="px-1 mt-4 px-sm-5">
                    <form onSubmit={onSubmitForm}>
                        <div className="row">
                            <div className={`mt-2`}>
                                <h3 className="fs-4 fw-normal">
                                    Datos de tu Organización
                                </h3>
                                <p className={`${styles.border_botton} pb-3`}>
                                    Esta información se usará en los encabezados
                                    de documentos para generar reportes de
                                    adherencia y tus detalles de contacto en
                                    mensaje a pacientes
                                </p>
                            </div>
                            <div className="col-12 col-lg-6 mb-4">
                                <label className="form-label">
                                    Nombre de tu consultorio: *
                                </label>
                                <input
                                    className="form-control"
                                    id="name"
                                    name="nombre"
                                    type="text"
                                    placeholder="Nombre Del Consultorio"
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
                                    Dirección del consultorio: *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Dirección Del Consultorio"
                                    className="form-control"
                                    name="direccion"
                                    value={direccion}
                                    onChange={e => onInputChange(e)}
                                />
                                <InputError
                                    messages={errors.direccion}
                                    className="mt-2"
                                />
                            </div>
                            <div className="col-12 col-lg-6 mb-4">
                                <label className="form-label">Pais: *</label>
                                <select
                                    className="form-select"
                                    id="pais"
                                    name="pais"
                                    value={pais}
                                    onChange={e => onInputChange(e)}>
                                    <option>Selecciona una Opción</option>
                                    {paises.map((countries, index) => (
                                        <option
                                            value={countries.name.common}
                                            key={index}>
                                            {countries.name.common}
                                        </option>
                                    ))}
                                </select>
                                <InputError
                                    messages={errors.pais}
                                    className="mt-2"
                                />
                            </div>
                            <div className="col-12 col-lg-6 mb-4">
                                <label className="form-label">Estado: *</label>
                                <select
                                    className="form-select"
                                    id="estado"
                                    name="estado"
                                    value={estado}
                                    onChange={e => onInputChange(e)}>
                                    <option>Selecciona una Opción</option>
                                    {/* <option value="tlaxcala">Tlaxcala</option> */}
                                    {estados
                                        ? estados.map((state, index) => (
                                              <option
                                                  value={state.state_name}
                                                  key={index}>
                                                  {state.state_name}
                                              </option>
                                          ))
                                        : ''}
                                </select>
                                <InputError
                                    messages={errors.estado}
                                    className="mt-2"
                                />
                            </div>

                            <div className="col-12 col-lg-6 mb-4">
                                <label className="form-label">Ciudad: *</label>
                                <select
                                    className="form-select"
                                    id="ciudad"
                                    name="ciudad"
                                    value={ciudad}
                                    onChange={e => onInputChange(e)}>
                                    <option>Selecciona una Opción</option>
                                    {ciudades
                                        ? ciudades.map((ciudad, index) => (
                                              <option
                                                  value={ciudad.city_name}
                                                  key={index}>
                                                  {ciudad.city_name}
                                              </option>
                                          ))
                                        : ''}
                                </select>
                                <InputError
                                    messages={errors.ciudad}
                                    className="mt-2"
                                />
                            </div>

                            <div className="col-12 col-lg-6 mb-4">
                                <label className="form-label">
                                    Código postal: *
                                </label>
                                <input
                                    type="number"
                                    placeholder="Código postal del consultorio"
                                    className="form-control"
                                    name="cp"
                                    value={cp}
                                    id='cp'
                                    onChange={e => onInputChange(e)}
                                />
                                <InputError
                                    messages={errors.cp}
                                    className="mt-2"
                                />
                            </div>

                            <div className="col-12 col-lg-6 mb-4">
                                <label className="form-label">
                                    Teléfono de contacto: *
                                </label>
                                <input
                                    type="number"
                                    placeholder="Teléfono de contacto"
                                    className="form-control"
                                    name="telefono"
                                    value={telefono}
                                    id='telefono'
                                    onChange={e => onInputChange(e)}
                                />
                                <InputError
                                    messages={errors.telefono}
                                    className="mt-2"
                                />
                            </div>

                            <div className="col-12 col-lg-6 mb-4">
                                <label className="form-label">
                                    Logotipo organizacional
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="logo"
                                    id='logo'
                                    onChange={(e) => onChangeFile(e.target.files)}
                                />
                                <InputError
                                    messages={errors.logo}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className={`mt-3`}>
                                <h3 className="fs-4 fw-normal">
                                    Información Profesional
                                </h3>
                                <p className={`${styles.border_botton} pb-3`}>
                                    Esta información se usará en los encabezados
                                    de documentos para generar reportes de
                                    adherencia y tus detalles de contacto en
                                    mensaje a pacientes
                                </p>
                            </div>
                            <div className="col-12 col-lg-6 mb-4">
                                <label className="form-label">
                                    Cédula Profesional
                                </label>
                                <input
                                    type="text"
                                    placeholder="Cédula Profesional"
                                    className="form-control"
                                    name="cedula"
                                    id='cedula'
                                    value={cedula}
                                    onChange={e => onInputChange(e)}
                                />
                                <InputError
                                    messages={errors.cedula}
                                    className="mt-2"
                                />
                            </div>

                            <div className="col-12 col-lg-6 mb-4">
                                <label className="form-label">
                                    Especialidad
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
                                    Instituto que otorgo la cédula
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="instituto"
                                    value={instituto}
                                    id='instituto'
                                    onChange={e => onInputChange(e)}
                                />
                                <InputError
                                    messages={errors.instituto}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="col-12 mb-5 pb-5">
                            <button
                                type="submit"
                                className="btn btn-outline-info float-end">
                                Siguiente
                            </button>
                            <button
                                className="float-end mx-4 btn btn-outline-danger"
                                onClick={handleClick}>
                                Continuar sin configurar reporte
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayoutRegister>
    )
}

export default registro_clinica
