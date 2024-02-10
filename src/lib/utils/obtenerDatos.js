export const obtenerDatosExploracion = (
    setNotas,
    setOpcion,
    data,
    notas,
    opcion,
) => {
    if (data.cabeza_parte_frontal) {
        setNotas([
            ...notas,
            {
                name: 'Cabeza_Parte_Frontal',
                title: 'Cabeza Parte Frontal',
            },
        ])
        setOpcion({
            ...opcion,
            Cabeza_Parte_Frontal: data.cabeza_parte_frontal,
        })
    }

    if (data.cabeza_parte_posterior) {
        setNotas([
            ...notas,
            {
                name: 'Cabeza_Parte_Posterior',
                title: 'Cabeza Parte Posterior',
            },
        ])
        setOpcion({
            ...opcion,
            Cabeza_Parte_Posterior: data.cabeza_parte_posterior,
        })
    }

    if (data.cuello_parte_frontal) {
        setNotas([
            ...notas,
            {
                name: 'Cuello_Parte_Frontal',
                title: 'Cuello Parte Frontal',
            },
        ])
        setOpcion({
            ...opcion,
            Cuello_Parte_Frontal: data.cuello_parte_frontal,
        })
    }

    if (data.cuello_parte_posterior) {
        setNotas([
            ...notas,
            {
                name: 'Cuello_Parte_Posterior',
                title: 'Cuello Parte Posterior',
            },
        ])
        setOpcion({
            ...opcion,
            Cuello_Parte_Posterior: data.cuello_parte_posterior,
        })
    }

    if (data.extremidad_superior_izquierda_parte_frontal) {
        setNotas([
            ...notas,
            {
                name: 'Extremidad_Superior_Izquierda_Parte_Frontal',
                title: 'Extremidad Superior Izquierda Parte Frontal',
            },
        ])
        setOpcion({
            ...opcion,
            Extremidad_Superior_Izquierda_Parte_Frontal:
                data.extremidad_superior_izquierda_parte_frontal,
        })
    }

    if (data.extremidad_superior_izquierda_parte_posterior) {
        setNotas([
            ...notas,
            {
                name: 'Extremidad_Superior_Izquierda_Parte_Posterior',
                title: 'Extremidad Superior Izquierda Parte Posterior',
            },
        ])
        setOpcion({
            ...opcion,
            Extremidad_Superior_Izquierda_Parte_Posterior:
                data.extremidad_superior_izquierda_parte_posterior,
        })
    }

    if (data.extremidad_superior_derecha_parte_frontal) {
        setNotas([
            ...notas,
            {
                name: 'Extremidad_Superior_Derecha_Parte_Frontal',
                title: 'Extremidad Superior Derecha Parte Frontal',
            },
        ])
        setOpcion({
            ...opcion,
            Extremidad_Superior_Derecha_Parte_Frontal:
                data.extremidad_superior_derecha_parte_frontal,
        })
    }

    if (data.extremidad_superior_derecha_parte_posterior) {
        setNotas([
            ...notas,
            {
                name: 'Extremidad_Superior_Derecha_Parte_Posterior',
                title: 'Extremidad Superior Derecha Parte Posterior',
            },
        ])
        setOpcion({
            ...opcion,
            Extremidad_Superior_Derecha_Parte_Posterior:
                data.extremidad_superior_derecha_parte_posterior,
        })
    }

    if (data.tronco_parte_frontal) {
        setNotas([
            ...notas,
            {
                name: 'Tronco_Parte_Frontal',
                title: 'Tronco Parte Frontal',
            },
        ])
        setOpcion({
            ...opcion,
            Tronco_Parte_Frontal: data.tronco_parte_frontal,
        })
    }

    if (data.tronco_parte_posterior) {
        setNotas([
            ...notas,
            {
                name: 'Tronco_Parte_Posterior',
                title: 'Tronco Parte Posterior',
            },
        ])
        setOpcion({
            ...opcion,
            Tronco_Parte_Posterior: data.tronco_parte_posterior,
        })
    }

    if (data.extremidad_inferior_izquierda_parte_frontal) {
        setNotas([
            ...notas,
            {
                name: 'Extremidad_Inferior_Izquierda_Parte_Frontal',
                title: 'Extremidad Inferior Izquierda Parte Frontal',
            },
        ])
        setOpcion({
            ...opcion,
            Extremidad_Inferior_Izquierda_Parte_Frontal:
                data.extremidad_inferior_izquierda_parte_frontal,
        })
    }

    if (data.extremidad_inferior_izquierda_parte_posterior) {
        setNotas([
            ...notas,
            {
                name: 'Extremidad_Inferior_Izquierda_Parte_Posterior',
                title: 'Extremidad Inferior Izquierda Parte Posterior',
            },
        ])
        setOpcion({
            ...opcion,
            Extremidad_Inferior_Izquierda_Parte_Posterior:
                data.extremidad_inferior_izquierda_parte_posterior,
        })
    }

    if (data.extremidad_inferior_derecha_parte_frontal) {
        setNotas([
            ...notas,
            {
                name: 'Extremidad_Inferior_Derecha_Parte_Frontal',
                title: 'Extremidad Inferior Derecha Parte Frontal',
            },
        ])
        setOpcion({
            ...opcion,
            Extremidad_Inferior_Derecha_Parte_Frontal:
                data.extremidad_inferior_derecha_parte_frontal,
        })
    }

    if (data.extremidad_inferior_derecha_parte_posterior) {
        setNotas([
            ...notas,
            {
                name: 'Extremidad_Inferior_Derecha_Parte_Posterior',
                title: 'Extremidad Inferior Derecha Parte Posterior',
            },
        ])
        setOpcion({
            ...opcion,
            Extremidad_Inferior_Derecha_Parte_Posterior:
                data.extremidad_inferior_derecha_parte_posterior,
        })
    }

    if (data.zona_pelvica_frontal) {
        setNotas([
            ...notas,
            {
                name: 'Zona_Pelvica_Frontal',
                title: 'Zona Pelvica Frontal',
            },
        ])
        setOpcion({
            ...opcion,
            Zona_Pelvica_Frontal: data.zona_pelvica_frontal,
        })
    }

    if (data.zona_pelvica_posterior) {
        setNotas([
            ...notas,
            {
                name: 'Zona_Pelvica_Posterior',
                title: 'Zona Pelvica Posterior',
            },
        ])
        setOpcion({
            ...opcion,
            Zona_Pelvica_Posterior: data.zona_pelvica_posterior,
        })
    }
}
