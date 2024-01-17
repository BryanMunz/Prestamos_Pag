import React, { useEffect, useState } from 'react';

const ComentariosProtocolo = ( { setData } ) => {
  const [comentario, setComentario] = useState('');

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const enviarComentario = () => {
    // Aquí podrías agregar la lógica para enviar el comentario a tu paciente
    console.log('Comentario enviado:', comentario);
    // Limpia el campo de comentario después de enviar
    setComentario('');
  };

  useEffect(() => {
    setData( data => ({...data, comentarios: comentario}) )
  }, [comentario]);

  return (
    <div className="comentarios-screen">
      <h1>Escribe los comentarios del protocolo y envíalos a tu paciente.</h1>
      <div className="comentarios-box">
        <textarea
          id="comentarioText"
          placeholder="Escribe aquí tus comentarios"
          value={comentario}
          onChange={handleComentarioChange}
        />
        <button onClick={enviarComentario}>Guardar</button>
      </div>

      <style jsx>{`
        .comentarios-screen {
          width: 80%;
          margin: 0 auto;
          padding-top: 50px;
          text-align: center;
        }

        .comentarios-box {
          margin-top: 20px;
        }

        label {
          display: block;
          margin-bottom: 10px;
        }

        textarea {
          width: 100%;
          height: 150px;
          resize: vertical;
          padding: 8px;
          font-size: 16px;
        }

        button {
          margin-top: 10px;
          padding: 8px 16px;
          background-color: #1b73f9;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        button:hover {
          background-color: #1254c7;
        }
      `}</style>
    </div>
  );
};

export default ComentariosProtocolo;
