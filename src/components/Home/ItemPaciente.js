import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBookMedical,
    faChildReaching,
} from '@fortawesome/free-solid-svg-icons'
import axios from '@/lib/axios'
import styles from '../../style/dashboard/ListPacientes.module.css'

function calcularEdad(fechaNacimiento) {
    const fechaNacimientoObj = new Date(fechaNacimiento)
    const fechaActual = new Date()

    let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear()

    // Ajustar la edad si aún no ha cumplido años en el año actual
    if (
        fechaActual.getMonth() < fechaNacimientoObj.getMonth() ||
        (fechaActual.getMonth() === fechaNacimientoObj.getMonth() &&
            fechaActual.getDate() < fechaNacimientoObj.getDate())
    ) {
        edad--
    }

    return edad
}


const ItemPaciente = ({ paciente, setPacientes }) => {
    const { id, name, last_name, fecha_nacimiento } = paciente;
 
    const handleDeletePaciente = () => {
        axios.delete(`/api/pacientes/delete/${id}`)
        .then(response => setPacientes())
        .catch(error => alert('Hubo un error al elminar el paciente'))
    }
    return (
        <tr>
            <td className={`align-middle text-primary fw-bold text-uppercase ${styles.name}`}>{`${name} ${last_name}`} </td>
            <td className='align-middle'>{calcularEdad(fecha_nacimiento)}</td>
            <td className="align-middle text-center align-items-center">
                <FontAwesomeIcon icon={faBookMedical} width='30px' className={`${styles.icon}`} />
            </td>
            <td className="align-middle text-center align-items-center">
                <FontAwesomeIcon icon={faChildReaching} width='30px' className={`${styles.icon}`} />
            </td>
            <td className="align-middle text-center align-items-center">
                <button className="btn btn-danger" onClick={handleDeletePaciente} >Eliminar</button>
                <button className="btn btn-outline-danger ms-3">
                    Suspender
                </button>
            </td>
        </tr>
    )
}

export default ItemPaciente
