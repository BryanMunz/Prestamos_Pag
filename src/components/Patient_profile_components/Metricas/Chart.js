import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const MetricasChart = () => {
    // Datos de ejemplo para la gráfica
    const data = {
        labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
        datasets: [
            {
                type: 'line',
                label: 'Eva',
                borderColor: '#F79E1B',
                borderWidth: 2,
                fill: false,
                data: [8, 6, 4, 7, 9, 5, 3],
                yAxisID: 'y1',
            },
            {
                type: 'bar',
                label: 'Adherencia (%)',
                data: [80, 60, 40, 70, 90, 50, 30],
                backgroundColor: '#1B73F9'
            },
        ],
    };

    // Opciones de la gráfica
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Adherencia (%)',
                },
            },
            y1: {
                beginAtZero: true,
                max: 10,
                position: 'right',
                title: {
                    display: true,
                    text: 'Nivel EVA',
                },
            },
        },
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h4>Semana 1 (Ago 25 - Sept 1)</h4>
                </div>
                <div>
                    <button
                        style={{
                            marginLeft: '10px',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            backgroundColor: '#5D4FC4',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Más detalles
                    </button>
                </div>
            </div>
            <div style={{ width: '700px', height: '350px' }}>
                <Bar data={data} options={options} />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <p>Progreso de esta semana -- %</p>
            </div>
        </div>
    );
};

export default MetricasChart;
