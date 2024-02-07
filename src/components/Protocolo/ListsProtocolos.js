import { ItemProtocolo } from './ItemProtocolo'

export const ListsProtocolos = ({ protocolos, paciente, setFlag, setShow }) => {
    return (
        <div className="mt-3 d-flex flex-wrap justify-content-between">
            {protocolos &&
                protocolos.map((protocolo, index) => (
                    <ItemProtocolo
                        nombre={protocolo.protocolo.nombre}
                        numEjercicios={protocolo.ejercicios.length}
                        ejercicios={protocolo.ejercicios}
                        key={index}
                        id_protocolo={protocolo.protocolo.id}
                        paciente={paciente}
                        setFlag={setFlag}
                        setShow={setShow}
                    />
                ))}
        </div>
    )
}
