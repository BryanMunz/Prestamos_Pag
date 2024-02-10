import { useEffect, useState } from 'react'
import { FaImage } from 'react-icons/fa'

const ExerciseDosageCard = ({ exercise, setCardsDetails, cardProp = {} }) => {
    const [card, setCard] = useState({
        sets: '',
        repeticiones: '',
        hold: '',
        descanso: '',
        peso: '',
    })
    const handleChangeCard = ({ target }) => {
        setCard({ ...card, ...exercise,[target.name]: target.value })
    }


    useEffect(() => {
        const { sets, repeticiones, hold, descanso, peso } = card
        if (
            sets !== '' &&
            repeticiones !== '' &&
            hold !== '' &&
            descanso !== '' &&
            peso !== ''
        ) {
            setCardsDetails(card)
        }
    }, [card])
    return (
        <div
            style={{
                marginBottom: '30px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Agregar sombreado / elevación
            }}>
            {/* Tu estructura de tarjeta de ejercicio */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                {/* Contenido de la tarjeta */}
                <div style={{ marginRight: '12px' }}>
                    <FaImage
                        style={{
                            borderRadius: '20%',
                            width: '80px',
                            height: '80px',
                        }}
                    />
                </div>
                <div>
                    <h4>{exercise.nombre}</h4>
                    <div>
                        <input
                            type="text"
                            placeholder="Sets"
                            style={{ margin: '6px' }}
                            name="sets"
                            onChange={handleChangeCard}
                            value={cardProp?.sets}
                            disabled={ cardProp?.sets ? true : false }
                        />
                        <input
                            type="text"
                            placeholder="Repeticiones"
                            style={{ margin: '6px' }}
                            name="repeticiones"
                            onChange={handleChangeCard}
                            value={cardProp?.repeticiones}
                            disabled={ cardProp?.repeticiones ? true : false }
                        />
                        <input
                            type="text"
                            placeholder="Hold"
                            style={{ margin: '6px' }}
                            name="hold"
                            onChange={handleChangeCard}
                            value={cardProp?.hold}
                            disabled={ cardProp?.hold ? true : false }
                        />
                        <input
                            type="text"
                            placeholder="Descanso"
                            style={{ margin: '6px' }}
                            name="descanso"
                            onChange={handleChangeCard}
                            value={cardProp?.descanso}
                            disabled={ cardProp?.descanso ? true : false }
                        />
                        <input
                            type="text"
                            placeholder="Peso (Kg)"
                            style={{ margin: '6px' }}
                            name="peso"
                            onChange={handleChangeCard}
                            value={cardProp?.peso}
                            disabled={ cardProp?.peso ? true : false }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const ReusableExerciseDosage = ({ items = [], setCardsDetails }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            {items.length > 0 && items.map(exercise => (
                <ExerciseDosageCard
                    key={exercise.id}
                    exercise={exercise}
                    setCardsDetails={setCardsDetails}
                    cardProp={exercise}
                />
            ))}
        </div>
    )
}

export default ReusableExerciseDosage
