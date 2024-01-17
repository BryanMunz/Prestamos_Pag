import React, { useEffect, useState } from 'react'

const ItemsDuracionScreen = ({ setData, data }) => {
    const [startDate, setStartDate] = useState('')
    const [duration, setDuration] = useState(1)
    const [error, setError] = useState('')
    const [selectedDays, setSelectedDays] = useState({
        Lun: false,
        Mar: false,
        Mie: false,
        Jue: false,
        Vie: false,
        Sab: false,
        Dom: false,
    })

    const toggleDay = day => {
        setSelectedDays(prevSelectedDays => ({
            ...prevSelectedDays,
            [day]: !prevSelectedDays[day],
        }))

        setData(data => ({ ...data, [day]: !selectedDays[day] }))
    }

    const daysOfWeek = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']

    const handleChangeDate = ({ target }) => {
        const currentDate = new Date()
        const selectedDate = new Date(target.value)

        if (selectedDate > currentDate) {
            setStartDate(target.value)
            setData(data => ({ ...data, fecha_inicio: target.value }))
            setError('')
        } else {
            setError('La nueva fecha debe ser mayor que la fecha actual.')
        }
    }

    const handleDuration = ({ target }) => {
        setDuration(target.value)
        setData(data => ({ ...data, duracion: target.value }))
    }

    useEffect(() => {
        if (data?.fecha_inicio !== '') setStartDate(data?.fecha_inicio)
    }, [])

    useEffect(() => {
        if (data) {
            const { Lun, Mar, Mie, Jue, Vie, Sab, Dom } = data

            setSelectedDays({
                Lun,
                Mar,
                Mie,
                Jue,
                Vie,
                Jue,
                Sab,
                Dom,
            })
        }
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '40px' }}>
                <label
                    htmlFor="startDate"
                    style={{ display: 'block', marginBottom: '5px' }}>
                    Fecha de Inicio:{' '}
                </label>
                <input
                    id="startDate"
                    value={startDate}
                    onChange={e => handleChangeDate(e)}
                    type="date"
                    className="form-control m-auto"
                    style={{ width: '50%' }}
                />
                <p className="text-center text-danger">{error}</p>
                {/* <select id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={{ width: '50%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
                    {/* Opciones para la fecha de inicio */}
                {/* <option value="2023-01-01">01/01/2023</option> */}
                {/* ...más opciones según sea necesario */}
                {/* </select> */}
            </div>
            <div style={{ marginTop: '40px' }}>
                <label
                    htmlFor="duration"
                    style={{ display: 'block', marginBottom: '5px' }}>
                    Duración del Programa:{' '}
                </label>
                <select
                    id="duration"
                    value={duration}
                    onChange={e => handleDuration(e)}
                    style={{
                        width: '50%',
                        padding: '8px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}>
                    {/* Opciones para la duración del programa */}
                    <option value="1">1 semana</option>
                    <option value="2">2 semana</option>
                    <option value="3">3 semana</option>
                    <option value="4">4 semana</option>
                    <option value="5">5 semana</option>
                    <option value="6">6 semana</option>
                    {/* ...más opciones según sea necesario */}
                </select>
            </div>
            <div style={{ marginTop: '40px', marginBottom: '30px' }}>
                {daysOfWeek.map(day => (
                    <button
                        key={day}
                        style={{
                            margin: '5px',
                            backgroundColor: selectedDays[day]
                                ? 'green'
                                : 'transparent',
                            color: selectedDays[day] ? 'white' : 'black',
                            border: '1px solid black',
                            borderRadius: '5px',
                            padding: '8px 12px',
                        }}
                        onClick={() => toggleDay(day)}>
                        {day}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ItemsDuracionScreen
