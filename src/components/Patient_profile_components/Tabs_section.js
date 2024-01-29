import { Historijilla } from './Historijilla'
import React, { useState, useEffect } from 'react'
import AjustesPaciente from './AjustesPaciente'
import EmptyProtocol from './Protocolo'

const Tabs = ({ paciente, idProtocolo, setFlag, flag }) => {
    const [windowWidth, setWindowWidth] = useState(null)
    const [activeTab, setActiveTab] = useState('Historia clínica')
    const [content, setContent] = useState(null)

    const handleWindowSizeChange = () => {
        setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0)
    }

    useEffect(() => {
        setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0)
    }, [])

    useEffect(() => {
        changeTab('Historia clínica')
    }, [flag])

    useEffect(() => {
        // Actualiza content cuando paciente esté disponible
        if (paciente) {
            setContent(<Historijilla paciente={paciente} />)
        }
    }, [paciente])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleWindowSizeChange)

            return () => {
                window.removeEventListener('resize', handleWindowSizeChange)
            }
        }
    }, [])

    const changeTab = tabName => {
        setActiveTab(tabName)
        switch (tabName) {
            case 'Historia clínica':
                setContent(<Historijilla paciente={paciente} />)
                break
            case 'Protocolo':
                setContent(
                    <EmptyProtocol
                        paciente={paciente}
                        idProtocolo={idProtocolo}
                        setFlag={setFlag}
                        flag={flag}
                    />,
                )
                break
            case 'Métricas':
                setContent('Métriquirijilla')
                break
            case 'Formularios':
                setContent('Formuliirijillo')
                break
            case 'Ajustes de paciente':
                setContent(<AjustesPaciente />)
                break
            default:
                setContent('')
                break
        }
    }

    const tabs = [
        'Historia clínica',
        'Protocolo',
        'Métricas',
        'Formularios',
        'Ajustes de paciente',
    ]

    const handleSelectChange = event => {
        const selectedTab = event.target.value
        changeTab(selectedTab)
    }

    const renderTabs = () => {
        if (windowWidth <= 768) {
            return (
                <select
                    value={activeTab}
                    onChange={handleSelectChange}
                    style={{ marginTop: '20px', height: '40px' }}>
                    {tabs.map(tab => (
                        <option key={tab} value={tab}>
                            {tab}
                        </option>
                    ))}
                </select>
            )
        } else {
            return (
                <div className="tabs">
                    {tabs.map(tab => (
                        <div
                            key={tab}
                            className={`tab ${
                                activeTab === tab ? 'active' : ''
                            }`}
                            onClick={() => changeTab(tab)}>
                            {tab}
                        </div>
                    ))}
                </div>
            )
        }
    }

    return (
        <div className="tabs-container">
            <style>
                {`
                .tabs-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center; /* Para centrar horizontalmente */
                }
                
                .tabs {
                    display: flex;
                    flex-direction: row;
                    margin-top: 20px; /* Espacio entre las pestañas y el contenido */
                }
                
                .tab {
                    padding: 10px 20px;
                    cursor: pointer;
                    color: #555;
                    border-bottom: 2px solid transparent;
                    transition: border-bottom 0.3s ease-in-out;
                    margin-right: 30px; /* Ajusta el espacio entre las pestañas */
                }
                
                .tab.active {
                    border-bottom: 2px solid #1B73F9;
                    color: #1B73F9;
                }
                
                .tab-content {
                    margin-top: 20px; /* Espacio entre las pestañas y el contenido */
                }
                `}
            </style>
            {renderTabs()}
            <div className="tab-content w-100 px-1 px-sm-5">{content}</div>
        </div>
    )
}

export default Tabs
