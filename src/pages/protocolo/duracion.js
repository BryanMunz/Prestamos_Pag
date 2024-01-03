import React, { useState } from 'react';

const DuracionScreen = () => {
    const [startDate, setStartDate] = useState('');
    const [duration, setDuration] = useState('');
    const [selectedDays, setSelectedDays] = useState({
        Lun: false,
        Mar: false,
        Mie: false,
        Jue: false,
        Vie: false,
        Sab: false,
        Dom: false,
    });

    const toggleDay = (day) => {
        setSelectedDays((prevSelectedDays) => ({
            ...prevSelectedDays,
            [day]: !prevSelectedDays[day],
        }));
    };

    const daysOfWeek = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Selecciona los días y duración del programa de ejercicios</h1>
            <div style={{ marginTop: '40px' }}>
                <label htmlFor="startDate" style={{ display: 'block', marginBottom: '5px' }}>Fecha de Inicio: </label>
                <select id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={{ width: '50%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
                    {/* Opciones para la fecha de inicio */}
                    <option value="2023-01-01">01/01/2023</option>
                    {/* ...más opciones según sea necesario */}
                </select>
            </div>
            <div style={{ marginTop: '40px' }}>
                <label htmlFor="duration" style={{ display: 'block', marginBottom: '5px' }}>Duración del Programa: </label>
                <select id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} style={{ width: '50%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
                    {/* Opciones para la duración del programa */}
                    <option value="1 semana">1 semana</option>
                    {/* ...más opciones según sea necesario */}
                </select>
            </div>
            <div style={{ marginTop: '40px' }}>
                {daysOfWeek.map((day) => (
                    <button
                        key={day}
                        style={{
                            margin: '5px',
                            backgroundColor: selectedDays[day] ? 'green' : 'transparent',
                            color: selectedDays[day] ? 'white' : 'black',
                            border: '1px solid black',
                            borderRadius: '5px',
                            padding: '8px 12px',
                        }}
                        onClick={() => toggleDay(day)}
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DuracionScreen;
