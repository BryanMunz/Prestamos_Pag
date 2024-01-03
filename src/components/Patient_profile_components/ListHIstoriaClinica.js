import { ItemHistoriaClinica } from './ItemHistoriaClinica'

export const ListHIstoriaClinica = ({ historias = [], paciente }) => {
    return (
        <>
            {!historias ? (
                <img
                    src="/images/Iconos/no_registro.jpeg"
                    width="50%"
                    className="mt-4"
                />
            ) : (
                historias.map((historia, index) => (
                    <ItemHistoriaClinica
                        fecha={historia?.fecha}
                        motivo={historia?.motivos}
                        id={historia?.id}
                        paciente={paciente}
                    />
                ))
            )}
        </>
    )
}
