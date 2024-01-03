import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'
import { Item } from './Item'

const urlPost = '/api/historia_clinica/register_marcha';

export const Marcha = ({id_historia_clinica}) => {
    
    return (
        <div className="col-12 col-sm-6 mt-2">
            <div className='shadow h-100'>
                <h3
                    className="fs-6 px-3 py-2"
                    style={{ backgroundColor: '#f7f7f7' }}>
                    MARCHA / DEAMBULACIÓN
                </h3>
                <div>
                    <Item
                        text="Claudicante"
                        icon={faPersonWalking}
                        color="#f0c330"
                        width="13px"
                        name='claudicante'
                        id_historia_clinica={id_historia_clinica}
                        url={urlPost}
                    />
                    <Item
                        text="Con Auxiliares"
                        icon={faPersonWalking}
                        color="#f0c330"
                        width="13px"
                        name='auxiliares'
                        id_historia_clinica={id_historia_clinica}
                        url={urlPost}
                    />
                    <Item
                        text="Espastica"
                        icon={faPersonWalking}
                        color="#f0c330"
                        width="13px"
                        name='espastica'
                        id_historia_clinica={id_historia_clinica}
                        url={urlPost}
                    />
                    <Item
                        text="Ataxica"
                        icon={faPersonWalking}
                        color="#f0c330"
                        width="13px"
                        name='ataxica'
                        id_historia_clinica={id_historia_clinica}
                        url={urlPost}
                    />
                    <div className="px-4 mt-3">
                        <label className="label-control">Otros</label>
                        <textarea className="form-control" rows="1"></textarea>
                    </div>
                </div>

                <div className='d-flex justify-content-end'>
                    <button className="btn btn-primary me-4 mt-4 mb-3">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}
