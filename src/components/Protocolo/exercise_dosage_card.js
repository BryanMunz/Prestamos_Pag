import { FaImage } from 'react-icons/fa';

const ExerciseDosageCard = ({ exercise }) => {
    return (
        <div
            style={{
                marginBottom: '30px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Agregar sombreado / elevación
            }}
        >
            {/* Tu estructura de tarjeta de ejercicio */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
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
                    <h4>{exercise.title}</h4>
                    <div>
                        <input type="text" placeholder="Sets" style={{ margin: '6px' }} />
                        <input
                            type="text"
                            placeholder="Repeticiones"
                            style={{ margin: '6px' }}
                        />
                        <input type="text" placeholder="Hold" style={{ margin: '6px' }} />
                        <input type="text" placeholder="Descanso" style={{ margin: '6px' }} />
                        <input type="text" placeholder="Peso (Kg)" style={{ margin: '6px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ReusableExerciseDosage = ({ items }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            {items.map((exercise) => (
                <ExerciseDosageCard key={exercise.id} exercise={exercise} />
            ))}
        </div>
    );
};

export default ReusableExerciseDosage;
