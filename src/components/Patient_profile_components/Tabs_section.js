import React, { useState, useEffect } from 'react';
import AjustesPaciente from './AjustesPaciente';
import EmptyProtocol from './Protocolo';
import MetricasChart from './Metricas/Chart';

const Tabs = () => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    const [activeTab, setActiveTab] = useState('Historia clínica');
    const [content, setContent] = useState('Historijilla');

    const handleWindowSizeChange = () => {
        setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleWindowSizeChange);

            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            };
        }
    }, []);

    const changeTab = (tabName) => {
        setActiveTab(tabName);
        // Actualizar el contenido según la pestaña seleccionada
        switch (tabName) {
            case 'Historia clínica':
                setContent('Historijilla');
                break;
            case 'Protocolo':
                setContent(<EmptyProtocol />);
                break;
            case 'Métricas':
                setContent(<MetricasChart />);
                break;
            case 'Formularios':
                setContent('Formuliirijillo');
                break;
            case 'Ajustes de paciente':
                setContent(<AjustesPaciente />);
                break;
            default:
                setContent('');
                break;
        }
    };

    const tabs = [
        'Historia clínica',
        'Protocolo',
        'Métricas',
        'Formularios',
        'Ajustes de paciente',
    ];

    const handleSelectChange = (event) => {
        const selectedTab = event.target.value;
        changeTab(selectedTab);
    };

    const renderTabs = () => {
        if (windowWidth <= 768) {
            return (
                <select
                    value={activeTab}
                    onChange={handleSelectChange}
                    style={{ marginTop: '20px', height: '40px' }}
                >
                    {tabs.map((tab) => (
                        <option key={tab} value={tab}>
                            {tab}
                        </option>
                    ))}
                </select>
            );
        } else {
            return (
                <div className="tabs">
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            className={`tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => changeTab(tab)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
            );
        }
    };

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
            <div className="tab-content">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Tabs;
