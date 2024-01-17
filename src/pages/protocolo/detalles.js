import ReusableExerciseDosage from '@/components/Protocolo/exercise_dosage_card'
import { useEffect, useState } from 'react'
import { FaClock, FaPlus, FaMinus, FaImage } from 'react-icons/fa'

const ExerciseConfigurationScreen = ({
    cardsDataOrder = [],
    setCardsDetails,
    setData
}) => {
    const [descanso, setDescanso] = useState(10)
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        if (cardsDataOrder.length) {
            setExercises(cardsDataOrder)
        }
    }, [cardsDataOrder])

    const handlePlusDescanso = () => {
        if (descanso >= 60) return

        setDescanso(descanso + 1)
    }

    const handleSubDescanso = () => {
        if (descanso <= 5) return
        setDescanso(descanso - 1)
    }

    useEffect(() => {
        setData( data => ({...data, descanso: descanso}) )
    }, [descanso]);

    return (
        <div className="exercise-configuration-screen">
            <h2>Configura los ejercicios seleccionados</h2>
            <h4>Duración estimada de la sesión: 04 min.</h4>

            <div
                className="config-container"
                style={{ backgroundColor: '#F2F2F2', borderRadius: '20px' }}>
                <p>
                    Descanso entre ejercicios general (min. 5 seg. - max. 60
                    seg)
                </p>
                <div
                    className="time-container"
                    style={{
                        border: '1px solid #1b73f9',
                        borderRadius: '10px',
                        padding: '15px',
                        color: '#1b73f9',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <span>
                        <FaClock size={30} />
                    </span>
                    <p>Segundos</p>
                    <span className="separator">|</span>
                    <div className="buttons-container">
                        <button onClick={handleSubDescanso}>
                            <FaMinus />
                        </button>
                        <p>{descanso}</p>
                        <button onClick={handlePlusDescanso}>
                            <FaPlus />
                        </button>
                    </div>
                </div>
            </div>

            {/* Utiliza ExerciseDosage */}
            <ReusableExerciseDosage
                items={exercises}
                setCardsDetails={setCardsDetails}
            />

            <style jsx>{`
                /* Estilos para la pantalla */
                .exercise-configuration-screen {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: 20px;
                }

                .config-container {
                    width: 80%;
                    padding: 15px;
                    margin-top: 20px;
                }

                .time-container {
                    display: flex;
                    padding: 10px;
                    color: blue;
                }

                .time-container span,
                .time-container p {
                    margin-right: 5px;
                }

                .separator {
                    margin: 0 10px;
                }

                .buttons-container {
                    display: flex;
                    justifycontent: 'center';
                }

                .buttons-container button {
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 5px;
                    cursor: pointer;
                    background-color: #fff;
                    color: #1b73f9;
                    border: 1px solid #1b73f9;
                }

                /* Estilos comunes */
                /* ... */
            `}</style>
        </div>
    )
}

export default ExerciseConfigurationScreen
