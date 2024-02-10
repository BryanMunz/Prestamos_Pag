export const ItemComentario = ({ comentario }) => {
    return (
        <div className="border border-start-0 border-end-0 border-bottom-0 mb-3">
            <p className="m-0 mb-1 fw-bolder">{comentario?.comentario}</p>
            <p className="m-0 mb-1 fw-bold" style={{ fontSize: '12px' }}>
                {comentario?.formatted_date}
            </p>
        </div>
    )
}
