import { ItemEjercicio } from './ItemEjercicio'

export const Ejercicios = ({ ejercicios = [] }) => {
    return (
        <div className="mt-4 px-4 d-flex justify-content-between flex-wrap">
            {ejercicios
                ? ejercicios.map((ejercicio, index) => (
                      <ItemEjercicio key={index} ejercicio={ejercicio} />
                  ))
                : ''}
        </div>
    )
}
