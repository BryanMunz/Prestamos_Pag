import { CardProtocolo } from './CardProtocolo'

export const CardsProtocolos = ({ ejercicios = [], ejercicioProtocolo }) => {
    return (
        <div className="d-flex flex-wrap mb-4">
            {ejercicios &&
                ejercicios.map((ejercicio, index) => (
                    <CardProtocolo
                        key={index}
                        ejercicio={ejercicio}
                    />
                ))}
        </div>
    )
}
