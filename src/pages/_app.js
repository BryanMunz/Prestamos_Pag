import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
// import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }) => {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap");
    }, []);

    return <Component {...pageProps} />
}

export default App
