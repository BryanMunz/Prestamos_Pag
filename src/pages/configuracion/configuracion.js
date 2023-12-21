import React, { useState, useEffect } from 'react';
import MiPerfil from '@/components/Configuration_components/Perfil';
import InformacionOrganizacion from '@/components/Configuration_components/Clinica';
import SubscriptionPage from '@/components/Configuration_components/Suscripcion';
import UpdatePassword from '@/components/Configuration_components/Password';
import AppLayout from '@/components/Layouts/AppLayout'


const Configuracion = () => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    const [activeTab, setActiveTab] = useState('Perfil');
    const [content, setContent] = useState(<MiPerfil />);

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
            case 'Perfil':
                setContent(<MiPerfil />);
                break;
            case 'Clínica / Organización':
                setContent(<InformacionOrganizacion />);
                break;
            case 'Suscripción':
                setContent(<SubscriptionPage />);
                break;
            case 'Contraseña':
                setContent(<UpdatePassword />);
                break;
            default:
                setContent('');
                break;
        }
    };

    const tabs = [
        'Perfil',
        'Clínica / Organización',
        'Suscripción',
        'Contraseña',
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
        <AppLayout>
            <div className={windowWidth <= 768 ? "tabs-container-column" : "tabs-container"}>
                <style>
                    {`
                .tabs-container {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start; /* Alineación al inicio */
                }

                .tabs-container-column {
                    display: flex;
                    flex-direction: column;
                    align-items: center; /* Alineación al centro horizontal */
                }
                
                .tabs {
                    display: flex;
                    flex-direction: column; /* Cambiado a columna para hacerlos verticales */
                    margin-top: 20px; /* Espacio entre las pestañas y el contenido */
                }
                
                .tab {
                    padding: 10px 20px;
                    cursor: pointer;
                    color: #555;
                    border-bottom: 2px solid transparent;
                    transition: border-bottom 0.3s ease-in-out;
                    margin-bottom: 10px; /* Ajusta el espacio vertical entre las pestañas */
                }
                
                .tab.active {
                    border-bottom: 2px solid #1B73F9;
                    color: #1B73F9;
                }

                .tab-content-column {
                    margin-top: 20px; /* Espacio entre las pestañas y el contenido */
                    border-top: 1px solid #333; /* Divider vertical */
                    padding-top: 20px; /* Espacio entre el divider y el contenido */
                }
                
                .tab-content {
                    margin-top: 20px; /* Espacio entre las pestañas y el contenido */
                    border-left: 1px solid #333; /* Divider vertical */
                    padding-left: 20px; /* Espacio entre el divider y el contenido */
                }
                `}
                </style>
                {renderTabs()}
                <div className={windowWidth <= 768 ? "tab-content-column" : "tab-content"}>
                    <p>{content}</p>
                </div>
            </div>
        </AppLayout>
    );
};

export default Configuracion;
