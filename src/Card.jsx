import React from 'react';

function Card({ input1, input2, color }) {
  const cardStyle = {
    backgroundColor: color,
    padding: '1rem',
    borderRadius: '5px',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <div className="card" style={cardStyle}>
      <p>Nombre : {input1}</p>
      <p>Color: {input2}</p>
      <p>Hola {input1}, sabemos que usted ha elegido el color: {input2}</p>
    </div>
  );
}

export default Card;
