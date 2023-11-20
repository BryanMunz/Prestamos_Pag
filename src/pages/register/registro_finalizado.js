import AppLayoutRegister from '@/components/Layouts/AppLayoutRegister'
import ProgressRegistration from '@/components/ProgressRegistration'
import Head from 'next/head'
import { useRouter } from 'next/router'

const registro_finalizado = () => {
    const router = useRouter()

    const handleClick = () => {
        router.push('/dashboard')
    }

    return (
        <AppLayoutRegister>
            <Head>
                <title>Biobotix Labs</title>
            </Head>

            <div className="container mt-5 px-5">
                <ProgressRegistration location={3}></ProgressRegistration>

                <div className="row px-1 mt-5 px-md-5">
                    <div className="col-12 col-md-8 col-lg-5 m-auto rounded d-flex justify-content-center flex-column">
                        <img
                            src="/images/logo/Biobotix_Library.jpg"
                            className="d-inline-block rounded m-auto w-75"
                        />
                        <button
                            className="btn btn-primary m-auto mt-3 w-75"
                            onClick={handleClick}>
                            Continuar con la biblioteca
                        </button>
                    </div>
                </div>
            </div>
        </AppLayoutRegister>
    )
}

export default registro_finalizado
