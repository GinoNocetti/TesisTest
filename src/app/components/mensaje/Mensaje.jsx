import React, { useState, useEffect } from 'react';
import './Mensaje.css'; // Asegúrate de importar el archivo CSS

const Message = ({ mensajeTexto, color = '#2ecc71', duracion = 2000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose(); // Ejecutar callback si se pasa
    }, duracion);

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [duracion, onClose]);

  return (
    visible && (
      <div
        className="mensaje-agregado"
        style={{ backgroundColor: color }}
      >
        {mensajeTexto}
      </div>
    )
  );
};

export default Message;
