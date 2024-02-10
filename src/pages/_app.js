import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { AppStateProvider } from '@/reducer/AppStateContext'
// import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap')
    }, [])

    return (
        <AppStateProvider>
            <Component {...pageProps} />
        </AppStateProvider>
    )
}

export default App
