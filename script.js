function mostrarInvitacion() {
    var nombre = document.getElementById("nombre").value.trim();
    var invitacionDiv = document.getElementById("invitacion");

    if (nombre) {
        invitacionDiv.style.display = 'block';
        invitacionDiv.innerHTML = `
            <h2>¡Hola, ${nombre}!</h2>
            <p>¡Estás invitado a mi fiesta de cumpleaños!</p>
            <img src="invitacion_${nombre}.jpg" alt="Invitación personalizada">
        `;
    } else {
        alert("Por favor ingresa tu nombre");
    }
}
