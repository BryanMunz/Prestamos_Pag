export const InfoProtocolo = ({ protocolo }) => {
    return (
        <div className="d-flex flex-row justify-content-center">
            <div>
                <p style={{ color: '#59677d' }} className="fw-semibold mb-1">
                    Duración:
                </p>
                <p
                    className="bg-primary text-white px-3 py-2"
                    style={{ borderRadius: '13px' }}>
                    {protocolo?.duracion} semanas
                </p>
            </div>
            <div className="px-1 px-sm-4">
                <p style={{ color: '#59677d' }} className="fw-semibold mb-1">
                    Estatus:
                </p>
                <p className="bg-success text-white px-3 py-2 rounded-pill">
                    Activo
                </p>
            </div>
            <div className="px-1 px-sm-4">
                <p style={{ color: '#59677d' }} className="fw-semibold mb-1">
                    Terapia:
                </p>
                <div className="d-flex flex-wrap" style={{ maxWidth: '205px' }}>
                    {protocolo?.lunes === 1 && (
                        <p
                            className=" text-white px-3 py-2 rounded-pill text-center mx-1"
                            style={{
                                backgroundColor: '#28c686',
                                width: '90px',
                            }}>
                            Lunes
                        </p>

                    )
                    
                    }
                    {
                        protocolo?.martes === 1 && (
                            <p
                                className=" text-white px-3 py-2 rounded-pill text-center mx-1"
                                style={{
                                    backgroundColor: '#28c686',
                                    width: '90px',
                                }}>
                                Martes
                            </p>
    
                        )
                    }
                    {
                        protocolo?.miercoles === 1 && (
                            <p
                                className=" text-white px-3 py-2 rounded-pill text-center mx-1"
                                style={{
                                    backgroundColor: '#28c686',
                                    width: '90px',
                                }}>
                                Miercoles
                            </p>
    
                        )
                    } 
                    {
                        protocolo?.jueves === 1 && (
                            <p
                                className=" text-white px-3 py-2 rounded-pill text-center mx-1"
                                style={{
                                    backgroundColor: '#28c686',
                                    width: '90px',
                                }}>
                                Jueves
                            </p>
    
                        )
                    }

                    {
                        protocolo?.viernes === 1 && (
                            <p
                                className=" text-white px-3 py-2 rounded-pill text-center mx-1"
                                style={{
                                    backgroundColor: '#28c686',
                                    width: '90px',
                                }}>
                                Viernes
                            </p>
    
                        )
                    }

                    {
                        protocolo?.sabado === 1 && (
                            <p
                                className=" text-white px-3 py-2 rounded-pill text-center mx-1"
                                style={{
                                    backgroundColor: '#28c686',
                                    width: '90px',
                                }}>
                                Sábado
                            </p>
    
                        )
                    }

                    {
                        protocolo?.domingo === 1 && (
                            <p
                                className=" text-white px-3 py-2 rounded-pill text-center mx-1"
                                style={{
                                    backgroundColor: '#28c686',
                                    width: '90px',
                                }}>
                                Domingo
                            </p>
    
                        )
                    }

                </div>
            </div>
        </div>
    )
}
