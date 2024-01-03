import { useRouter } from 'next/router'

export const ItemHistoriaClinica = ({
    fecha,
    motivo,
    descripcion,
    id,
    paciente,
}) => {
    const date = fecha.split(',')
    const router = useRouter()
    const handleClick = () => {
        router.push({
            pathname: '/historia_clinica',
            query: {
                id_historia_clinica: JSON.stringify(id),
                pacienteData: JSON.stringify(paciente),
            },
        })
    }
    return (
        <div
            className="d-flex rounded border"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}>
            <div
                className="d-flex flex-column m-0 p-3 rounded-start"
                style={{
                    borderLeft: '15px solid #92c8fb',
                    borderRight: '1px solid #dee2e6',
                }}>
                <span className="fw-bolder">{date[0]}</span>
                <span className="fw-bold">{date[1]}</span>
                <span>{date[2]}</span>
            </div>
            <div className="d-flex flex-column justify-content-center ps-3">
                <p className="fw-bolder p-0 m-0">{motivo}</p>
                <p className="fst-italic p-0 m-0" style={{ color: '#8b8b8b' }}>
                    {descripcion}
                </p>
            </div>
        </div>
    )
}
