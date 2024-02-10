import { useEffect, useState } from 'react'
import {
    FaDumbbell,
    FaListAlt,
    FaInfoCircle,
    FaCalendarAlt,
    FaList,
    FaCheckCircle,
} from 'react-icons/fa'
import ExerciseOrderScreen from '@/pages/protocolo/order'
import ExerciseConfigurationScreen from '@/pages/protocolo/detalles'
import ExerciseSelectionScreen from '@/pages/protocolo/seleccion'
import ComprobacionProtocoloScreen from '@/pages/protocolo/comprobacion'
import DuracionScreen from '@/pages/protocolo/duracion'
import ComentariosProtocolo from '@/pages/protocolo/comentarios'
import axios from '@/lib/axios'

export const Steps = ({
    paciente,
    protocolo,
    ejercicioProtocolo,
    ejercicios,
    setShow,
    setFlag,
    update,
}) => {
    const [activeTab, setActiveTab] = useState('Elige ejercicios')
    const [completedTabs, setCompletedTabs] = useState([])

    const [cardsData, setCardsData] = useState([])
    const [cardsDataSelect, setcardsDataSelect] = useState([])
    const [cardsDataOrder, setcardsDataOrder] = useState([])
    const [cardsDataDetails, setcardsDataDetails] = useState([])

    const [url, setUrl] = useState('')

    const [data, setData] = useState({
        nombre: '',
        descanso: 10,
        comentarios: '',
        fecha_inicio: '',
        duracion: 1,
        Lun: false,
        Mar: false,
        Mie: false,
        Jue: false,
        Vie: false,
        Sab: false,
        Dom: false,
        guardar: false,
        programas: [],
        id_user: null,
    })

    useEffect(() => {
        if (update) setUrl('/api/protocolo/update')
        else setUrl('/api/protocolo/store')
    }, [update])

    useEffect(() => {
        if (ejercicios) {
            setcardsDataSelect([...ejercicios])
        }
    }, [ejercicios])

    useEffect(() => {
        if (paciente) {
            setData({ ...data, id_user: paciente.id })
        }
    }, [paciente])

    useEffect(() => {
        if (protocolo) {
            setData({
                ...data,
                nombre: protocolo.nombre || '',
                fecha_inicio: protocolo?.fecha_inicio || '',
                duracion: protocolo?.duracion || 10,
                Lun: protocolo?.lunes === 1 ? true : false,
                Mar: protocolo?.martes === 1 ? true : false,
                Mie: protocolo?.miercoles === 1 ? true : false,
                Jue: protocolo?.jueves === 1 ? true : false,
                Vie: protocolo?.viernes === 1 ? true : false,
                Sab: protocolo?.sabado === 1 ? true : false,
                Dom: protocolo?.domingo === 1 ? true : false,
            })
        }
    }, [protocolo])

    const obtenerEjercicios = () => {
        axios
            .get('/api/obtener_ejercicios?filter=todos')
            .then(res => setCardsData(res.data))
    }

    useEffect(() => {
        obtenerEjercicios()
    }, [])

    useEffect(() => {
        data.programas = [...cardsDataDetails]
    }, [cardsDataDetails])

    const handleTabClick = (tabName, index) => {
        setActiveTab(tabName)
        const tabsUntilIndex = index + 1
        setCompletedTabs(
            Array.from({ length: tabsUntilIndex }, (_, i) => tabData[i].name),
        )
    }

    const handleChangeCardsDetailts = card => {
        const updatedCards = [...cardsDataDetails]

        const existingCard = updatedCards.find(c => c.id === card.id)

        if (existingCard) {
            const updatedExistingCard = { ...existingCard, ...card }
            const cardIndex = updatedCards.findIndex(c => c.id === card.id)

            updatedCards[cardIndex] = updatedExistingCard
        } else {
            updatedCards.push(card)
        }

        setcardsDataDetails(updatedCards)
    }

    const tabData = [
        { name: 'Elige ejercicios', icon: <FaDumbbell /> },
        { name: 'Orden de los ejercicios', icon: <FaListAlt /> },
        { name: 'Detalles de los ejercicios', icon: <FaInfoCircle /> },
        { name: 'Comentarios del protocolo', icon: <FaList /> },
        { name: 'Selección de días', icon: <FaCalendarAlt /> },
        { name: 'Comprobación final', icon: <FaCheckCircle /> },
    ]

    return (
        <div className="protocol-tabs">
            <div className="tabs-container">
                <h4>Creación del protocolo</h4>
                {tabData.map((tab, index) => (
                    <div
                        key={tab.name}
                        className={`tab ${
                            activeTab === tab.name ? 'active-tab' : ''
                        } ${
                            completedTabs.includes(tab.name)
                                ? 'completed-tab'
                                : ''
                        }`}
                        onClick={() => handleTabClick(tab.name, index)}>
                        <span className="icon">{tab.icon}</span>
                        <span className="tab-text">{tab.name}</span>
                    </div>
                ))}
            </div>

            {/* Contenedor para mostrar el contenido del tab seleccionado */}
            <div className="content">
                {/* Mostrar el screen correspondiente al tab seleccionado */}
                {activeTab === 'Elige ejercicios' && (
                    <ExerciseSelectionScreen
                        cardsData={cardsData}
                        setCardsSelect={setcardsDataSelect}
                        cardsSelect={cardsDataSelect}
                    />
                )}
                {activeTab === 'Orden de los ejercicios' && (
                    <ExerciseOrderScreen
                        cardsData={cardsDataSelect}
                        setCardsSelect={setcardsDataOrder}
                    />
                )}
                {activeTab === 'Detalles de los ejercicios' && (
                    <ExerciseConfigurationScreen
                        cardsDataOrder={cardsDataOrder}
                        setCardsDetails={handleChangeCardsDetailts}
                        setData={setData}
                    />
                )}
                {activeTab === 'Comentarios del protocolo' && (
                    <ComentariosProtocolo setData={setData} />
                )}
                {activeTab === 'Selección de días' && (
                    <DuracionScreen setData={setData} data={data} />
                )}
                {activeTab === 'Comprobación final' && (
                    <ComprobacionProtocoloScreen
                        setData={setData}
                        data={data}
                        exercisesProp={cardsDataDetails}
                        setCardsDetails={handleChangeCardsDetailts}
                        paciente={paciente}
                        setShow={setShow}
                        setFlag={setFlag}
                        url={url}
                        protocolo={protocolo}
                    />
                )}
                {/* Agrega más condicionales para otros screens */}
            </div>

            <style jsx>{`
                .content {
                    margin-top: 20px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }

                .protocol-tabs {
                    display: flex;
                    flex-direction: row;
                    margin: 20px;
                    padding: 10px;
                }

                .tabs-container {
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                }

                .tab {
                    display: flex;
                    align-items: center;
                    padding: 8px 0;
                    cursor: pointer;
                    width: 100%;
                }

                .tab:hover {
                    color: #1b73f9;
                }

                .tab.active-tab {
                    color: #1b73f9;
                    border-bottom: 2px solid #1b73f9;
                }

                .tab.completed-tab {
                    color: #1b73f9;
                }

                .icon {
                    margin-right: 8px;
                }

                .icon :global(svg) {
                    font-size: 28px; /* Adjust the icon size as needed */
                }

                .tab-text {
                    margin-left: 8px;
                }
            `}</style>
        </div>
    )
}
