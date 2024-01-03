import { useState } from 'react';
import { FaDumbbell, FaListAlt, FaInfoCircle, FaCalendarAlt, FaClipboardList, FaList, FaAirbnb, FaArrowCircleUp, FaCheckCircle } from 'react-icons/fa';
import ComentariosProtocolo from './comentarios';
import ExerciseOrderScreen from './order';
import ExerciseConfigurationScreen from './detalles';
import ExerciseSelectionScreen from './seleccion';
import ComprobacionProtocoloScreen from './comprobacion';
import DuracionScreen from './duracion';

const ProtocolCreationTabs = () => {
  const [activeTab, setActiveTab] = useState('Elige ejercicios');
  const [completedTabs, setCompletedTabs] = useState([]);

  const handleTabClick = (tabName, index) => {
    setActiveTab(tabName);
    const tabsUntilIndex = index + 1;
    setCompletedTabs(Array.from({ length: tabsUntilIndex }, (_, i) => tabData[i].name));
  };

  const tabData = [
    { name: 'Elige ejercicios', icon: <FaDumbbell /> },
    { name: 'Orden de los ejercicios', icon: <FaListAlt /> },
    { name: 'Detalles de los ejercicios', icon: <FaInfoCircle /> },
    { name: 'Comentarios del protocolo', icon: <FaList /> },
    { name: 'Selección de días', icon: <FaCalendarAlt /> },
    { name: 'Escalas y cuestionarios', icon: <FaClipboardList /> },
    { name: 'Comprobación final', icon: <FaCheckCircle /> },
  ];

  return (
    <div className="protocol-tabs">
      <div className="tabs-container">
        <h4>Creación del protocolo</h4>
        {tabData.map((tab, index) => (
          <div
            key={tab.name}
            className={`tab ${activeTab === tab.name ? 'active-tab' : ''} ${completedTabs.includes(tab.name) ? 'completed-tab' : ''
              }`}
            onClick={() => handleTabClick(tab.name, index)}
          >
            <span className="icon">{tab.icon}</span>
            <span className="tab-text">{tab.name}</span>
          </div>
        ))}
      </div>

      {/* Contenedor para mostrar el contenido del tab seleccionado */}
      <div className="content">
        {/* Mostrar el screen correspondiente al tab seleccionado */}
        {activeTab === 'Elige ejercicios' && < ExerciseSelectionScreen />}
        {activeTab === 'Orden de los ejercicios' && <ExerciseOrderScreen />}
        {activeTab === 'Detalles de los ejercicios' && <ExerciseConfigurationScreen />}
        {activeTab === 'Comentarios del protocolo' && <ComentariosProtocolo />}
        {activeTab === 'Selección de días' && <DuracionScreen />}
        {activeTab === 'Comprobación final' && <ComprobacionProtocoloScreen />}
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
  );
};

export default ProtocolCreationTabs;
