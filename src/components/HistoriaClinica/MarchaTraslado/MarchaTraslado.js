import { Marcha } from './Marcha'
import { Traslado } from './Traslado'

export const MarchaTraslado = ({ id_historia_clinica }) => {
    return (
        <div className="container mt-5">
            <h2 className="fs-6">MARCHA / TRASLADO</h2>

            <div className="row justify-content-between" id="marcha">
                <Marcha id_historia_clinica={id_historia_clinica} />
                <Traslado id_historia_clinica={id_historia_clinica} />
            </div>
        </div>
    )
}
