export const InfoProtocolo = () => {
    

    return (
        <div className="d-flex flex-row justify-content-center">
            <div>
                <p style={{ color: '#59677d' }} className="fw-semibold mb-1">
                    Duración:
                </p>
                <p
                    className="bg-primary text-white px-3 py-2"
                    style={{ borderRadius: '13px' }}>
                    08 Sep 2023 - 15 Sep 2023
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
                    <p
                        className=" text-white px-3 py-2 rounded-pill text-center mx-1"
                        style={{ backgroundColor: '#28c686', width: '90px' }}>
                        Lunes
                    </p>
                    <p
                        className=" text-white px-3 py-2 rounded-pill text-center mx-1"
                        style={{ backgroundColor: '#28c686', width: '90px' }}>
                        Martes
                    </p>
                </div>
            </div>
        </div>
    )
}
