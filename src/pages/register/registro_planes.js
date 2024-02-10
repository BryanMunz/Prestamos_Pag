import ProgressRegistration from '@/components/ProgressRegistration'
import Head from 'next/head'
import styles from '@/style/register/register.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import AppLayoutRegister from '@/components/Layouts/AppLayoutRegister'

const registro_planes = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/register/registro_clinica')
    }
    return (
        <AppLayoutRegister>
            <Head>
                <title>Biobotix Labs</title>
            </Head>

            <div className="container mt-5 px-1 px-sm-5">
                <ProgressRegistration location={1}></ProgressRegistration>

                <div className="row px-1 mt-5 px-sm-5">
                    <h2>Escoge la mejor manera de probar Biobotix</h2>

                    <p className="mt-2">
                        Inicia tu prueba gratis de Biobotix por 21 días y
                        después de su termino suscribete a nuestro plan
                        mensual o plan anual
                    </p>
                </div>
                <div className="px-1 px-sm-5 mt-4">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h3 className="fs-5">
                                ¿Qué incluye la plataforma Biobotix?
                            </h3>
                            <div className="mt-4">
                                <div className="d-flex align-items-center">
                                    <div
                                        className={`d-flex justify-content-center align-items-center align-bottom me-2 ${styles.icon_ronded}`}>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            width="6px"
                                            color="#25A2B7"
                                        />
                                    </div>
                                    Control de pacientes sin límites
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="d-flex align-items-center">
                                    <div
                                        className={`d-flex justify-content-center align-items-center align-bottom me-2 ${styles.icon_ronded}`}>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            width="6px"
                                            color="#25A2B7"
                                        />
                                    </div>
                                    Seguimiento de adherencia de pacientes
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="d-flex align-items-center">
                                    <div
                                        className={`d-flex justify-content-center align-items-center align-bottom me-2 ${styles.icon_ronded}`}>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            width="6px"
                                            color="#25A2B7"
                                        />
                                    </div>
                                    Bibliotecas de ejercicios en constante
                                    actualización
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="d-flex align-items-center">
                                    <div
                                        className={`d-flex justify-content-center align-items-center align-bottom me-2 ${styles.icon_ronded}`}>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            width="6px"
                                            color="#25A2B7"
                                        />
                                    </div>
                                    Aplicación Web, IOS y Android para pacientes
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                <div className="col-6">
                                    <h4>Plan Mensual</h4>
                                    <p className={styles.text_plan}>
                                        Descubre y enamorate de Biobotix
                                    </p>
                                </div>
                                <div className="col-6 text-center">
                                    <h4 className="fw-bolder fs-3">$259 MXN</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h4>Plan Anual</h4>
                                    <p className={styles.text_plan}>
                                        Transforma tu rehabilitación en una
                                        clinica digital. Sin plazos forzosos,
                                        cancela cuando quieras
                                    </p>
                                </div>
                                <div className="col-6 text-center">
                                    <h4 className="fw-bolder fs-3">
                                        $2,799 MXN
                                    </h4>
                                </div>
                            </div>
                            <div className="d-inline-block w-75 float-end">
                                <button
                                    className={`btn btn-outline-info fw-bold ${styles.btn_planes}`}
                                    onClick={handleClick}>
                                    Comenzar prueba
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayoutRegister>
    )
}

export default registro_planes
