// ExerciseSelectionScreen.js
import ExerciseCard from '@/components/Protocolo/exercise_card'
import { useEffect, useState } from 'react'

const ExerciseSelectionScreen = ({ cardsData = [], setCardsSelect, cardsSelect }) => {
    return (
        <div style={{ textAlign: 'center', margin: '0 auto', padding: '50px' }}>
            <h1>Selecciona los ejercicios que deseas prescribir</h1>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                {cardsData.map(card => (
                    <ExerciseCard
                        key={card.id}
                        card={card}
                        setCardsSelect={setCardsSelect}
                        cardsSelect={cardsSelect}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExerciseSelectionScreen
