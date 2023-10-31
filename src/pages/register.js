import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import styles from '../style/register.module.css'
import { useForm } from '@/hooks/useForm'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/wizard',
    })

    const [errors, setErrors] = useState([])

    const {
        name,
        last_name,
        email,
        password,
        password_confirmation,
        terminos,
        onInputChange,
        onSubmitForm,
    } = useForm(
        {
            name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            terminos: false,
            setErrors,
        },
        register,
    )

    return (
        <GuestLayout>
            <div className="container-fluid px-5 py-4">
                <div className="col-12 text-center">
                    <img src="/images/logo/logo.png" />
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6 col-12 mt-4">
                        <div className="info-content mt-5">
                            <div className="container-fluid py-4">
                                <h3>¿Cuanto cuesta?</h3>
                                <p className="small">
                                    Suscripción{' '}
                                    <span className="fw-bolder">Mensual</span>{' '}
                                    de Biobotix Clinic: $259 MXN
                                </p>
                                <p className="small">
                                    Suscripción{' '}
                                    <span className="fw-bolder">Anual</span> de
                                    Biobotix Clinic: $2,799 MXN
                                </p>

                                <h4>¿Qué incluye?</h4>
                                <p className="small">
                                    <i
                                        className="fa fa-check-circle-o text-info"
                                        aria-hidden="true"></i>{' '}
                                    Historia clínica
                                </p>

                                <p className="small">
                                    <i
                                        className="fa fa-check-circle-o text-info"
                                        aria-hidden="true"></i>{' '}
                                    Control de pacientes sin limites
                                </p>

                                <p className="small">
                                    <i
                                        className="fa fa-check-circle-o text-info"
                                        aria-hidden="true"></i>{' '}
                                    Biblioteca de ejercicios en constante
                                    actualización
                                </p>
                                <p className="small">
                                    <i
                                        className="fa fa-check-circle-o text-info"
                                        aria-hidden="true"></i>{' '}
                                    Aplicación web y android para pacientes
                                </p>
                                <h4>¿Mis datos estan seguros?</h4>
                                <p className="small">
                                    ¡Si! Tus datos estaran totalmente a salvo
                                    gracias a nuestra{' '}
                                    <span> politica de privacidad. </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 px-1 px-sm-5">
                        <div className="shadow px-1 pt-5 pb-3 px-sm-5">
                            <h3 className="text-center fs-4 mb-5">Registro</h3>
                            <form onSubmit={e => onSubmitForm(e)}>
                                <div className="px-4 mb-4">
                                    <input
                                        type="text"
                                        className="form-control rounded-0"
                                        id="name"
                                        aria-describedby="emailHelp"
                                        placeholder="Nombre"
                                        name="name"
                                        value={name}
                                        onChange={e => onInputChange(e)}
                                    />
                                    <InputError
                                        messages={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="px-4 mb-4">
                                    <input
                                        type="text"
                                        className="form-control rounded-0"
                                        id="last-name"
                                        aria-describedby="emailHelp"
                                        placeholder="Apellidos"
                                        name="last_name"
                                        value={last_name}
                                        onChange={e => onInputChange(e)}
                                    />
                                    <InputError
                                        messages={errors.last_name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="px-4 mb-4">
                                    <input
                                        type="email"
                                        className="form-control rounded-0"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={e => onInputChange(e)}
                                    />
                                    <InputError
                                        messages={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="px-4 mb-4">
                                    <input
                                        type="password"
                                        className="form-control rounded-0"
                                        id="password"
                                        aria-describedby="emailHelp"
                                        placeholder="Contraseña"
                                        name="password"
                                        value={password}
                                        onChange={e => onInputChange(e)}
                                    />
                                    <InputError
                                        messages={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="px-4 mb-4">
                                    <input
                                        type="password"
                                        className="form-control rounded-0"
                                        id="password-confi"
                                        aria-describedby="emailHelp"
                                        placeholder="Confirmar contraseña"
                                        name="password_confirmation"
                                        value={password_confirmation}
                                        onChange={e => onInputChange(e)}
                                    />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="terminos"
                                        name='terminos'
                                        onChange={onInputChange}
                                    />
                                    <label className="form-check-label">
                                        Aceptar{' '}
                                        <Link
                                            href={'/'}
                                            className={styles.links}>
                                            Terminos y condiciones
                                        </Link>
                                    </label>
                                    <InputError
                                        messages={errors.terminos}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="text-center px-4 mt-5">
                                    <button
                                        className={styles.btn}
                                        type="submit">
                                        Registrar
                                    </button>
                                </div>
                                <div className="text-center mt-4">
                                    <p>
                                        ¿Ya tienes una cuenta?{' '}
                                        <Link
                                            href={'/login'}
                                            className={styles.links}>
                                            iniciar sesión
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Register
