import { ItemShow } from './ItemShow'

export const ShowPatologicos = ({ data = [] }) => {
    const arrayData = Object.entries(data)
    return (
        <div className="px-3">
            {data
                ? arrayData.map((valores, index) => {
                      if (valores[1].respuesta !== null) {
                          return (
                              <ItemShow
                                  name={valores[0]}
                                  opcion={valores[1].respuesta}
                                  key={index}
                                  descripcion={valores[1].descripcion}
                              />
                          )
                      }
                  })
                : ''}
        </div>
    )
}
