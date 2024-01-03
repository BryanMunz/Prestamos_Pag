import { FaClock, FaPlus, FaMinus, FaImage } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ExerciseConfigurationScreen = () => {

  const exercises = [
    { id: 'exercise1', title: 'Exercise 1', imageUrl: 'url1' },
    { id: 'exercise2', title: 'Exercise 2', imageUrl: 'url2' },
    // ... otras tarjetas de ejercicios
  ];

  const onDragEnd = (result) => {
    // lógica para el final del arrastre, si necesitas alguna
  };

  return (
    <div className="exercise-configuration-screen">
      <h2>Configura los ejercicios seleccionados</h2>
      <h4>Duración estimada de la sesión: 04 min.</h4>

      <div className="config-container" style={{ backgroundColor: '#F2F2F2', borderRadius: '20px' }}>
        <p>Descanso entre ejercicios general (min. 5 seg. - max. 60 seg)</p>
        <div className="time-container" style={{ border: '1px solid #1b73f9', borderRadius: '10px', padding: '10px', color: '#1b73f9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span><FaClock size={30} /></span>
          <p>Segundos</p>
          <span className="separator">|</span>
          <div className="buttons-container">
            <button><FaMinus /></button>
            <p>10</p>
            <button><FaPlus /></button>
          </div>
        </div>
      </div>

      {/* Contenedor para las tarjetas arrastrables */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="exercises">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ marginTop: '20px' }}
            >
              {exercises.map((exercise, index) => (
                <Draggable key={exercise.id} draggableId={exercise.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '15px',
                          border: '1px solid #ccc',
                          borderRadius: '8px',
                          padding: '8px',
                        }}
                      >
                        <div style={{ marginRight: '12px' }}>
                          <FaImage style={{
                            borderRadius: '20%', width: '80px',
                            height: '80px'
                          }} />
                        </div>
                        <div>
                          <h4>{exercise.title}</h4>
                          <div>
                            <input type="text" placeholder="Sets" style={{ margin: '6px' }} />
                            <input type="text" placeholder="Repeticiones" style={{ margin: '6px' }} />
                            <input type="text" placeholder="Hold" style={{ margin: '6px' }} />
                            <input type="text" placeholder="Descanso" style={{ margin: '6px' }} />
                            <input type="text" placeholder="Peso (Kg)" style={{ margin: '6px' }} />
                          </div>
                        </div>
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
        .exercise-configuration-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px;
        }

        .config-container {
          width: 80%;
          padding: 20px;
          margin-top: 20px;
        }

        .time-container {
          display: flex;
          align-items: center;
          border-radius: 10px;
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
          align-items: center;
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
  );
};

export default ExerciseConfigurationScreen;
