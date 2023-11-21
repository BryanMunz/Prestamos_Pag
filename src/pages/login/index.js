import ApplicationLogo from '@/components/ApplicationLogo'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/style/register/register.module.css'
import { useForm } from '@/hooks/useForm'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const { email, password, remember, onInputChange, onSubmitForm } = useForm(
        {
            email: '',
            password: '',
            remember: false,
            setErrors,
            setStatus,
        },
        login,
    )

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })


    return (
        <GuestLayout>
            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            <div className="vh-100">
                <div className={`container h-100`}>
                    <div
                        className={`row d-flex justify-content-center align-items-center h-100`}>
                        <div className="col-12 col-md-8 col-lg-6 col-xl-4 shadow p-5 text-center">
                            <div>
                                <ApplicationLogo width="140px" />
                            </div>
                            <h2 className="fs-4 mt-3 mb-5 text-black-50 fw-normal">Iniciar Sesión</h2>
                            <form onSubmit={e => onSubmitForm(e)}>
                                {/* Email Address */}
                                <div className="pt-3">
                                    <Input
                                        id="email"
                                        name='email'
                                        type="email"
                                        value={email}
                                        className="form-control"
                                        placeholder="Email"
                                        onChange={onInputChange}
                                        required
                                        autoFocus
                                    />

                                    <InputError
                                        messages={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Password */}
                                <div className="mt-4">
                                    <Input
                                        id="password"
                                        name='password'
                                        type="password"
                                        value={password}
                                        className="form-control"
                                        placeholder="Contraseña"
                                        onChange={onInputChange}
                                        required
                                        autoComplete="current-password"
                                    />

                                    <InputError
                                        messages={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                {/* Remember Me */}
                                <div className="form-check mt-3 float-start">
                                    <label
                                        htmlFor="remember_me"
                                        className="form-check-label">
                                        <input
                                            id="remember_me"
                                            type="checkbox"
                                            name="remember"
                                            className="form-check-input"
                                            onChange={onInputChange}
                                        />

                                        <span className="ml-2 text-sm text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>

                                <div className="mt-5">
                                    <button
                                        type="submit"
                                        className={`${styles.btn} mt-4`}>
                                        Iniciar Sessión
                                    </button>
                                </div>

                                <div className="mt-4">
                                    <Link
                                        href="/forgot-password"
                                        className={`${styles.links}`}>
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </div>

                                <div className="mt-2">
                                    <p>
                                        ¿No tienes una cuenta?
                                        <Link
                                            href={'/register'}
                                            className={`${styles.links} ms-2`}>
                                            Registrate aquí
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

export default Login
