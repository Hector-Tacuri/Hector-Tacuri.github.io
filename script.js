function mostrarCarta() {
    window.location.href = 'carta.html';
}

function mostrarVideo() {
    document.getElementById('carta').classList.add('oculto');
    document.getElementById('video').classList.remove('oculto');
}

function mostrarInspiracion() {
    document.getElementById('video').classList.add('oculto');
    document.getElementById('inspiracion').classList.remove('oculto');
}
