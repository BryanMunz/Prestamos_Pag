import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPrint } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { AddComments } from './AddComments'
import { AgregarProtocolo } from './AgregarProtocolo'
import { PDFDownloadLink, PDFViewer, StyleSheet } from '@react-pdf/renderer'
import PDF from './PDF'

const styles = StyleSheet.create({
    pdfLink: { outline: 'none' },
})

export const ButtonsProtocolo = ({
    protocolo,
    ejercicioProtocolo,
    ejercicios,
    usuario,
    infoProfesional,
    consultorio,
    organizacion,
    paciente,
    fechas,
    dias,
    comentarios,
    id_protocolo,
    getComentarios
}) => {
    const [show, setShow] = useState(false)
    const [showP, setShowP] = useState(false)

    return (
        <div className="d-flex felx-rows flex-wrap justify-content-center">
            <AddComments show={show} setShow={setShow} comentarios={comentarios} getComentarios={getComentarios} protocolo_id={id_protocolo}/>
            <button
                className="btn btn-outline-primary mx-1 d-flex flex-rows flex-column my-2"
                style={{ width: '120px', minWidth: '100px', height: '75px' }}
                onClick={() => setShow(!show)}>
                <FontAwesomeIcon
                    icon={faComment}
                    className="m-auto"
                    style={{ width: '20px' }}
                />
                <span className="d-inline-block m-auto">Comentarios</span>
            </button>
            <PDFDownloadLink
                document={
                    <PDF
                        protocolos={ejercicioProtocolo}
                        consulorio={consultorio}
                        organizacion={organizacion}
                        infoProfesional={infoProfesional}
                        paciente={paciente}
                        usuario={usuario}
                        fechas={fechas}
                        dias={dias}
                        comentarios={comentarios}
                        protocolo={protocolo}
                    />
                }
                fileName="Hola.pdf">
                <button
                    className="btn btn-outline-primary mx-1 d-flex flex-rows flex-column my-2"
                    style={{
                        width: '120px',
                        minWidth: '100px',
                        height: '75px',
                    }}>
                    <FontAwesomeIcon
                        icon={faPrint}
                        className="m-auto"
                        style={{ width: '20px' }}
                    />
                    <span className="d-inline-block m-auto ">Imprimir</span>
                </button>
            </PDFDownloadLink>
            <button
                onClick={() => setShowP(!showP)}
                className="btn btn-outline-primary mx-1 my-2"
                style={{ width: '120px', minWidth: '100px', height: '75px' }}>
                Ajustes
            </button>
            <AgregarProtocolo
                show={showP}
                setShow={setShowP}
                protocolo={protocolo}
                ejercicios={ejercicios}
                ejercicioProtocolo={ejercicioProtocolo}
                
            />
            {/* <PDFViewer>
                <PDF protocolos={ejercicioProtocolo} />
            </PDFViewer> */}
        </div>
    )
}
