import React from "react";

function Encuentas({ encuentas }) {
    return (
        <div>
        <h2>Encuestas Disponibles</h2>
        <ul>
        {encuentas.map(encuesta => (
        <li key={encuesta.id}>{encuesta.pregunta}</li>
        ))}
        </ul>
        </div>
    );
}

export default Encuentas;