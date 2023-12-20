import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../style/navigation.module.css'
import DropdownLink from '../DropdownLink'

const Navigation = ({ user }) => {
    const router = useRouter()

    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

    return (
        <nav
            className={`${styles.nav} ${styles.shadow} navbar nav-pills navbar-expand-lg bg-white`}>
            <div className="container-fluid">
                <Link className="navbar-brand ms-3" href="#">
                    <img src="/images/logo/logo_x_bio.png" width={'30px'} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {user?.wizard > 0 ? (
                            <>
                                <li
                                    className={`nav-item mx-4 px-2 py-1 rounded-pill ${styles.item}`}>
                                    <Link
                                        className={`nav-link rounded-pill d-inline-block px-4 ${router.pathname === '/dashboard' ? 'active text-white' : ''}`}
                                        aria-current="page"
                                        href="/dashboard">
                                        Pacientes
                                    </Link>
                                </li>
                                <li
                                    className={`nav-item mx-4 px-2 py-1 rounded-pill ${styles.item}`}>
                                    <Link className={`nav-link rounded-pill d-inline-block px-4 ${router.pathname === '/ejercicios' ? 'active text-white' : ''}`} href="/ejercicios">
                                        Ejercicios
                                    </Link>
                                </li>

                                <li
                                    className={`nav-item mx-4 px-2 py-1 rounded-pill ${styles.item}`}>
                                    <Link
                                        className={`nav-link rounded-pill d-inline-block px-4 ${router.pathname === '/configuracion/configuracion' ? 'active text-white' : ''}`}
                                        href="/configuracion/configuracion">
                                        Configuración
                                    </Link>

                                </li>
                                <li
                                    className={`nav-item mx-4 px-2 py-1 rounded-pill ${styles.item}`}>
                                    <Link
                                        href={'/login'}
                                        className="nav-link "
                                        aria-disabled="true">
                                        Centro de ayuda
                                    </Link>
                                </li>
                            </>
                        ) : (
                            ''
                        )}
                    </ul>
                    {user?.wizard == 0 ? (
                        <button
                            className="btn btn-outline-danger"
                            onClick={logout}>
                            Cerrar Sessión
                        </button>
                    ) : (
                        <ul className="navbar-nav me-5 pe-3 mb-2 mb-lg-0">
                            <li className="nav-item dropdown float-end mx-4 px-2 py-1">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <div className="d-inline-block me-2 rounded-circle">
                                        <img
                                            src="/images/doctor/default.jpg"
                                            width="30px"
                                            className="rounded-circle"
                                        />
                                    </div>
                                    {user?.name}
                                </a>
                                <ul className="dropdown-menu">
                                    <li onClick={logout}>
                                        <a className="dropdown-item" href="#">
                                            Cerrar sessión
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navigation
