import { useEffect } from 'react'
import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import {
    FaExclamationTriangle,
    FaArrowsAlt,
    FaCircleNotch,
    FaExclamationCircle,
} from 'react-icons/fa'

const ExerciseOrderScreen = ({ cardsData = [], setCardsSelect }) => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        if (cardsData.length > 0) {
            const exercisesNew = cardsData.map((card, index) => ({
                id: card.id.toString(),
                image: '/images/logo/yoga.jpg',
                nombre: card.nombre,
                position: index + 1,
            }))
            setExercises(exercisesNew)
        }
    }, [cardsData])

    useEffect(() => {
      setCardsSelect(exercises)
    }, [exercises]);

    const onDragEnd = result => {}

    return (
        <div className="exercise-order-screen">
            <h2>
                Ordena los ejercicios arrastrándolos y colocándolos en el orden
                deseado
            </h2>
            <div
                className="info-container"
                style={{ backgroundColor: '#F79E1B', color: '#ffffff' }}>
                <span className="warning-icon">
                    <FaExclamationCircle size={30} />
                </span>
                <p>
                    Hemos ordenado los ejercicios de forma que el paciente
                    realice el menor número de movimientos al teléfono.
                </p>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="exercises">
                    {provided => (
                        <div
                            className="exercises-list"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {exercises.map((exercise, index) => (
                                <Draggable
                                    key={exercise.id}
                                    draggableId={exercise.id}
                                    index={index}>
                                    {provided => (
                                        <div
                                            className="exercise-card"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
                                            <div className="position">
                                                {exercise.position}
                                            </div>
                                            <div className="circle-image">
                                                <img
                                                    src={exercise.image}
                                                    alt={exercise.nombre}
                                                />
                                            </div>
                                            <div className="exercise-details">
                                                <strong>
                                                    {exercise.position}
                                                </strong>
                                                <p>{exercise.nombre}</p>
                                            </div>
                                            <div className="drag-icon">
                                                <FaArrowsAlt />
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            <style jsx>{`
                /* Estilos para la pantalla */
                /* ... */

                .exercise-order-screen {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    padding: 20px;
                }

                .info-container {
                    display: flex;
                    padding: 10px;
                    border-radius: 20px;
                    margin-top: 20px;
                }

                .warning-icon {
                    margin-right: 10px;
                    color: white;
                }

                .exercises-list {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding: 20px 0;
                }

                .exercise-card {
                    width: calc(100% - 20px);
                    border: 1px solid #ccc;
                    border-radius: 15px;
                    padding: 10px;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                }

                .position {
                    font-weight: bold;
                }

                .circle-image {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 10px;
                }

                .circle-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .drag-icon {
                    margin-left: auto;
                }
            `}</style>
        </div>
    )
}

export default ExerciseOrderScreen
