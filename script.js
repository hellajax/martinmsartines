function revealSecret() {
    const martinImg = document.getElementById('martin-img');
    const skibidiSection = document.getElementById('skibidi-section');
    const gifContainer = document.getElementById('gif-container');
    const googleGif = document.getElementById('google-gif');

    // Cambiar la imagen de Martin misteriosamente
    martinImg.src = 'feliz.jpg';

    // Mostrar el GIF de Google bailando
    googleGif.classList.remove('hidden');
    googleGif.classList.add('show');

    // Animar la sección de Skibidi Toilet
    skibidiSection.style.backgroundColor = '#222';
    skibidiSection.style.transition = 'background-color 1s';

    // Mensaje misterioso en consola
    console.log('¿Estás seguro de querer saber más? Algo puede ocurrir...');
}

function showGif() {
    const gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');
    const irGif = document.createElement('img');
    irGif.src = 'IR.webp'; // Ruta del GIF
    irGif.alt = 'Martín se va de cuerpo';
    irGif.classList.add('gif');
    gifContainer.appendChild(irGif);
    document.body.appendChild(gifContainer);
}