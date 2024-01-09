import React, { useState } from 'react'
import { ItemNotas } from '../ItemNotas'
import { OptiosExploracionFisica } from './OptiosExploracionFisica'
import axios from '@/lib/axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ExploracionFisica = ({ id_historia }) => {
    const [notas, setNotas] = useState([])
    const [opcion, setOpcion] = useState({})

    const handleSubmit = () => {
        axios
            .post('/api/historia_clinica/register_exploracion_fisica', {
                ...opcion,
                id_historia_clinica: id_historia,
            })
            .then(e => {
                toast.success('Se modifico correctamente', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                })
            })
    }

    const handleChangeInput = e => {
        setOpcion({ ...opcion, [e.target.name]: e.target.value })
    }

    const handleChangeSelect = e => {
        const index = e.target.selectedIndex
        if (!opcion.hasOwnProperty(e.target.value)) {
            setNotas([
                ...notas,
                { title: e.target.options[index].text, name: e.target.value },
            ])
            setOpcion({ ...opcion, [e.target.value]: '' })
        }
    }
    const handleChange = (title, name) => {
        if (!opcion.hasOwnProperty(name)) {
            setNotas([...notas, { title: title, name: name }])
            setOpcion({ ...opcion, [name]: '' })
        }
    }
    return (
        <div className="container mt-5">
            <ToastContainer />
            <h2 className="fs-6">EXPLORACIÓN FÍSICA / TOPOGRÁFICA</h2>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <select
                        className="form-control"
                        onChange={handleChangeSelect}>
                        <OptiosExploracionFisica />
                    </select>
                    <div className="mt-3">
                        {notas
                            ? notas.map(({ title, name }) => (
                                  <ItemNotas
                                      title={title}
                                      name={name}
                                      value={opcion[name]}
                                      handleChange={handleChangeInput}
                                  />
                              ))
                            : ''}
                    </div>
                    <button className='btn btn-primary float-end' onClick={handleSubmit}>Agregar</button>
                </div>
                <div className="col-12 col-sm-6">
                    <img src="/images/descargar.jfif" usemap="#image-map" />

                    <map name="image-map">
                        <area
                            alt="Extremidad Superior Derecha Parte Frontal"
                            title="Extremidad Superior Derecha Parte Frontal"
                            coords="47,98,43,104,42,110,39,117,39,124,38,131,38,137,38,144,36,153,35,161,33,169,29,176,27,183,27,189,25,198,25,205,23,211,23,218,23,224,19,230,12,233,8,239,4,245,1,251,7,253,7,258,5,265,13,258,13,267,18,262,21,256,20,267,25,263,28,256,28,268,31,261,33,251,36,245,37,238,34,232,37,226,41,217,44,211,47,203,51,196,52,184,54,176,56,170,58,164,60,158,63,152,62,142,62,135,59,126,57,118,53,111,49,106"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Extremidad Superior Derecha Parte Frontal',
                                    'Extremidad_Superior_Derecha_Parte_Frontal',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Cabeza Parte Frontal"
                            title="Cabeza Parte Frontal"
                            coords="82,20,78,29,78,37,71,42,72,48,76,55,82,61,87,68,94,69,107,69,113,64,119,53,127,50,126,41,119,33,121,25,114,19,104,14,94,14,86,14"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Cabeza Parte Frontal',
                                    'Cabeza_Parte_Frontal',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Cabeza Parte Posterior"
                            title="Cabeza Parte Posterior"
                            coords="340,67,350,65,357,67,364,67,368,61,371,53,376,54,380,47,377,38,373,31,372,21,365,15,357,12,349,12,341,13,335,18,331,26,330,32,329,38,324,46,325,53,330,54,335,53,336,58"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Cabeza Parte Posterior',
                                    'Cabeza_Parte_Posterior',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Cuello Parte Frontal"
                            title="Cuello Parte Frontal"
                            coords="85,70,95,70,101,71,107,71,112,71,117,72,80,77,74,80,65,83,79,86,85,88,90,89,96,89,101,90,107,90,113,89,121,88,127,85,120,77,132,82,125,78"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Cuello Parte Frontal',
                                    'Cuello_Parte_Frontal',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Cuello Parte Posterior"
                            title="Cuello Parte Posterior"
                            coords="338,71,332,74,324,82,325,88,331,88,337,88,342,88,348,89,357,89,365,86,371,86,376,84,379,78,370,75,365,68,358,68,348,67,341,67"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Cuello Parte Posterior',
                                    'Cuello_Parte_Posterior',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Extremidad Superior Izquierda Parte Posterior"
                            title="Extremidad Superior Izquierda Parte Posterior"
                            coords="313,87,306,91,298,97,294,105,292,111,291,120,289,131,287,137,287,146,288,153,285,161,284,169,281,176,279,183,277,190,275,199,274,207,274,215,275,221,270,227,264,233,258,239,254,243,249,250,252,254,260,250,259,258,255,266,260,264,267,255,265,263,264,269,273,256,272,268,277,259,279,267,283,254,287,244,287,236,286,229,289,225,293,217,296,206,300,194,301,185,305,174,308,165,313,154,312,142,310,130,310,120,312,108,313,96"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Extremidad Superior Izquierda Parte Posterior',
                                    'Extremidad_Superior_Izquierda_Parte_Posterior',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Extremidad Superior Izquierda Parte Frontal"
                            title="Extremidad Superior Izquierda Parte Frontal"
                            coords="148,90,154,97,160,112,160,122,162,132,163,142,165,152,167,160,168,166,171,171,173,178,174,189,174,197,175,203,177,211,177,217,178,224,182,228,187,233,193,238,196,244,199,249,190,248,193,255,195,262,186,254,188,264,180,257,179,267,173,261,169,266,169,248,163,237,165,230,161,220,157,209,153,198,152,185,149,173,145,163,140,153,140,140,145,125,146,111,147,104"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Extremidad Superior Izquierda Parte Frontal',
                                    'Extremidad_Superior_Izquierda_Parte_Frontal',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Extremidad Superior Derecha Parte Posterior"
                            title="Extremidad Superior Derecha Parte Posterior"
                            coords="397,118,397,126,394,133,395,141,392,147,393,153,397,160,399,169,402,176,403,182,403,191,406,198,408,205,412,210,414,219,417,225,419,230,418,236,418,244,420,249,423,253,424,261,424,268,427,256,431,265,433,269,432,256,437,263,440,267,440,257,443,261,447,264,445,254,443,245,450,251,448,245,443,236,436,230,430,222,431,213,429,203,429,190,425,181,420,166,418,156,416,144,415,130,414,116,411,102,404,93,397,90,395,99,394,105,395,110"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Extremidad Superior Derecha Parte Posterior',
                                    'Extremidad_Superior_Derecha_Parte_Posterior',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Tronco Parte Frontal"
                            title="Tronco Parte Frontal"
                            coords="46,97,48,104,54,110,55,115,59,124,60,133,62,141,64,148,65,156,65,166,65,174,64,182,60,189,60,194,59,201,59,210,57,220,65,219,70,219,78,219,85,220,93,217,101,219,107,219,112,219,118,220,126,221,133,222,140,221,143,212,142,205,142,198,140,188,139,180,136,171,134,162,137,154,138,145,137,137,140,129,140,119,142,107,143,100,145,92,138,82,126,82,124,89,111,91,100,91,86,91,75,89,68,85,59,85,53,88"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Tronco Parte Frontal',
                                    'Tronco_Parte_Frontal',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Tronco Parte Posterior"
                            title="Tronco Parte Posterior"
                            coords="311,90,312,97,310,114,312,107,310,120,310,126,311,136,313,146,313,155,314,162,315,170,313,176,312,182,310,188,309,196,309,206,309,211,308,217,306,224,311,226,317,226,322,226,329,229,334,225,342,224,349,224,354,224,360,225,368,226,377,227,383,226,388,224,395,224,397,216,396,204,396,192,392,185,390,177,391,167,391,159,391,144,391,135,392,124,396,116,392,106,393,98,396,90,388,85,380,84,371,86,360,90,352,89,340,89,328,89,321,88"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Tronco Parte Posterior',
                                    'Tronco_Parte_Posterior',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Extremidad Inferior Izquierda Parte Frontal"
                            title="Extremidad Inferior Izquierda Parte Frontal"
                            coords="102,269,103,277,103,288,104,302,106,308,106,314,105,321,105,330,105,337,104,347,103,359,104,365,104,373,105,380,106,389,107,398,106,410,107,418,107,426,105,431,105,438,109,445,108,454,109,460,110,466,113,471,118,473,125,470,130,468,133,462,129,454,126,446,123,437,121,429,121,421,124,413,125,401,129,390,131,381,133,370,134,359,134,351,130,343,133,337,134,329,137,317,138,307,140,300,142,291,145,282,146,272,146,265"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Extremidad Inferior Izquierda Parte Frontal',
                                    'Extremidad_Inferior_Izquierda_Parte_Frontal',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Extremidad Inferior Derecha Parte Frontal"
                            title="Extremidad Inferior Derecha Parte Frontal"
                            coords="56,278,58,286,59,294,62,306,63,313,64,321,64,330,66,339,66,346,67,354,66,359,65,365,67,371,69,381,71,390,73,396,75,403,77,411,79,420,78,426,78,434,73,441,71,448,69,453,67,460,67,468,73,469,79,470,85,472,90,466,92,458,93,445,95,434,97,427,92,415,94,403,97,392,98,378,97,366,96,355,95,343,94,334,95,321,96,314,97,305,97,297,97,286,97,278,97,271,81,270,69,270,54,271"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Extremidad Inferior Derecha Parte Frontal',
                                    'Extremidad_Inferior_Derecha_Parte_Frontal',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Extremidad Inferior Derecha Parte Posterior"
                            title="Extremidad Inferior Derecha Parte Posterior"
                            coords="357,273,357,281,357,291,357,298,358,305,360,315,360,325,360,333,360,345,358,354,356,361,357,368,358,385,358,394,359,401,359,408,360,413,359,420,356,426,360,433,363,443,364,451,363,463,366,470,371,472,376,469,382,466,386,461,385,454,381,447,379,439,376,428,375,420,377,408,380,398,384,391,385,381,388,372,385,360,385,353,386,345,387,333,389,326,390,317,392,307,394,299,395,285,397,277,398,271"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Extremidad Inferior Derecha Parte Posterior',
                                    'Extremidad_Inferior_Derecha_Parte_Posterior',
                                )
                            }
                            style={{ cursor: 'pointer' }}
                        />
                        <area
                            alt="Extremidad Inferior Izquierda Parte Posterior"
                            title="Extremidad Inferior Izquierda Parte Posterior"
                            coords="308,277,308,284,310,289,311,296,313,302,313,312,315,320,319,327,319,335,319,340,319,350,319,359,319,369,321,376,322,383,324,391,326,400,328,406,329,413,329,421,331,427,327,435,326,441,323,446,320,454,317,461,321,467,327,469,332,471,339,470,341,463,343,455,344,445,345,438,347,431,344,419,345,409,347,396,348,388,348,372,347,362,347,351,345,333,345,325,347,317,347,309,348,302,348,291,348,279"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Extremidad Inferior Izquierda Parte Posterior',
                                    'Extremidad_Inferior_Izquierda_Parte_Posterior',
                                )
                            }
                        />
                        <area
                            alt="Zona Pelvica Frontal"
                            title="Zona Pelvica Frontal"
                            coords="56,221,55,228,54,236,53,244,55,252,55,261,67,268,74,268,81,269,91,269,97,264,102,261,107,263,116,264,124,262,136,263,145,261,148,252,149,244,147,234,145,225,134,220,122,220,108,219,94,219,79,219,68,220"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Zona Pelvica Frontal',
                                    'Zona_Pelvica_Frontal',
                                )
                            }
                        />
                        <area
                            alt="Zona Pelvica Posterior"
                            title="Zona Pelvica Posterior"
                            coords="305,236,304,245,306,256,307,266,317,271,328,271,333,271,340,271,346,271,349,263,356,270,367,269,376,270,383,270,390,270,395,268,399,262,399,255,398,247,398,237,394,229,387,228,372,228,360,228,343,229,326,230,313,232"
                            shape="poly"
                            onClick={() =>
                                handleChange(
                                    'Zona Pelvica Posterior',
                                    'Zona_Pelvica_Posterior',
                                )
                            }
                        />
                    </map>
                </div>
            </div>
        </div>
    )
}
