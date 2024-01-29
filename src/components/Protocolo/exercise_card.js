import { useEffect, useState } from 'react'

const ExerciseCard = ({ card, setCardsSelect, cardsSelect = [] }) => {
    const [isSelected, setIsSelected] = useState(false)

    const toggleSelection = () => {
        setIsSelected(!isSelected)
        addOrDeleteEjercicio(!isSelected)
    }

    useEffect(() => {
        setIsSelected(cardsSelect.includes(card))
    }, [])
    useEffect(() => {
        const lastCard = cardsSelect.filter(value => value.id === card.id)
        if (lastCard.length > 0) setIsSelected(true)
    }, [cardsSelect])

    const addOrDeleteEjercicio = selected => {
        if (selected) {
            setCardsSelect(cards => [...cards, card])
        } else {
            const preCardsSelect = cardsSelect.filter(
                preCards => preCards?.id !== card.id,
            )
            setCardsSelect(preCardsSelect)
        }
    }

    return (
        <div
            style={{
                width: '250px',
                padding: '20px',
                borderRadius: '20px',
                boxShadow: isSelected
                    ? '0 8px 16px rgba(0, 0, 0, 0.2)'
                    : '0 4px 8px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                margin: '5px',
            }}
            onClick={toggleSelection}>
            <div
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#5D4FC4' : 'white',
                    border: `2px solid #5D4FC4`, // Agregar borde con el color específico
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    transition: 'background-color 0.3s ease',
                }}></div>
            <img
                src={'/images/logo/yoga.jpg'}
                alt="Imagen"
                style={{
                    width: '100%',
                    height: 'auto',
                    marginTop: '20px',
                    borderRadius: '20px',
                }}
            />
            <h2
                style={{
                    marginTop: '10px',
                    fontSize: '18px',
                    textAlign: 'center',
                }}>
                {card.nombre}
            </h2>
        </div>
    )
}

export default ExerciseCard
