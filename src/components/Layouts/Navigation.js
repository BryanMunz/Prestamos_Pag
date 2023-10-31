import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink, {
    ResponsiveNavButton,
} from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../style/navigation.module.css';

const Navigation = ({ user }) => {
    const router = useRouter()

    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

    return (
        <nav className={`${styles.nav} ${styles.shadow} navbar navbar-expand-lg bg-white`}>
            <div className="container-fluid">
                <Link className="navbar-brand ms-3" href="#">
                    <img src='/images/logo/logo_x_bio.png' width={'30px'}/>
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
                        {/* <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li>

                        <li className="nav-item">
                            <Link href={'/login'}
                                className="nav-link disabled"
                                aria-disabled="true">
                                Disabled
                            </Link>
                        </li> */}
                    </ul>
                    <button className='btn btn-outline-danger' onClick={logout}>
                        Cerrar Sessión
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
