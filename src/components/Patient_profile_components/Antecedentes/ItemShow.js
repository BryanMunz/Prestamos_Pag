import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
const title = {
    hipertencion: 'Hipertension',
    hospitalizacion_previa: 'Hospitalizacion Previa',
    cirugias_previas: 'Cirugias Previas',
    diabetes: 'Diabetes',
    tiroides: 'Tiroides',
    hipotension: 'Hipotension',
    cardiopatias: 'Cardiopatias',
    traumatismo: 'Traumatismo',
    cancer: 'Cancer',
    respiratorias: 'Patologias Respiratorias',
    gastrointestinales: 'Patologias Gastrointestinales',
    otros: 'Otros',
    actividad_fisica: 'Actividad Fisica',
    tabaquismo: 'Tabaquismo',
    alcoholismo: 'Alcoholismo',
    drogas: 'Uso de Drogas',
    vacunas_recientes: 'Vacunas Recientes',
    embarazo: 'Embarazo',
    fecha_menarca: 'Fecha de Menarca',
    cancer_uterino: 'Cancer Uterino',
    ultima_mestruacion: 'Ultima Mestruación'
}

export const ItemShow = ({ name, opcion, descripcion }) => {
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom mt-2">
            <p
                style={{
                    minWidth: '40%',
                    width: '40%',
                    maxWidth: '40%',
                }}
                className="text-start">
                {title[name]}
            </p>
            <p
                style={{ minWidth: '20%', width: '20%', maxWidth: '20%' }}
                className="text-center">
                {opcion === 'si' ? (
                    <FontAwesomeIcon
                        icon={faCheck}
                        className="text-success"
                        style={{ width: '15px' }}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="text-danger"
                        style={{ width: '15px' }}
                    />
                )}
            </p>
            <p
                style={{ minWidth: '40%', width: '40%', maxWidth: '40%' }}
                className="text-start">
                {descripcion}
            </p>
        </div>
    )
}
