import styles from '../../style/dashboard/ListPacientes.module.css'
import ItemPaciente from './ItemPaciente'

const ListPacientes = ({ pacientes = [], getPacientes }) => {
    return (
        <div className="container-fluit p-0 p-md-5">
            <div className='table-responsive'>
                {
                    pacientes ? pacientes.length > 0 ? (<table className="table table-responsive table-borderless">
                    <thead>
                        <tr>
                            <th scope="col" className={`${styles.title_table} align-middle`}>
                                NOMBRES(s)
                            </th>
                            <th scope="col" className={`${styles.title_table} align-middle`}>
                                EDAD
                            </th>
                            <th
                                scope="col"
                                className={`${styles.title_table} text-center align-middle`}>
                                HISTORIA CLÍNICA
                            </th>
                            <th
                                scope="col"
                                className={`${styles.title_table} text-center align-middle`}>
                                PROGRAMA DE EJERCICIOS
                            </th>
                            <th scope='col'></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            pacientes?.map((paciente, index) => (
                                <ItemPaciente
                                    paciente={paciente}
                                    setPacientes={getPacientes}
                                    key={index}
                                />
                            ))
                        }
                    </tbody>
                </table>) : (<h3 className='mt-3 text-center'>No existen pacientes con planes de rehabilitación activos</h3>) : ''
                }
            </div>
        </div>
    )
}

export default ListPacientes
