//Declaración de un array vacio
let amigos = [];
//funcion agregar amigo
function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombreAmigo = amigoInput.value.trim();
    //condición si se ingresa algo vacio
    if (nombreAmigo === '') {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    //condición si se repite el nombre (finalidad de colocar inicial del apellido o apellido completo)
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    //guardar nombre y empujar para dejar espacio para otro
    amigos.push(nombreAmigo);
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.join(', ');
    amigoInput.value = '';
}
//sorteo de amigo
function sortearAmigo() {
    if (amigos.length < 4) {
        alert("Asegúrate de agregar al menos 4 personas para el sorteo.");
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    // Algoritmo de Fisher-Yates para mezclar el array de forma aleatoria
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    // Asignación de amigo secreto
    for (let i = 0; i < amigos.length; i++) {
        let amigoActual = amigos[i];
        let amigoSecreto = amigos[(i + 1) % amigos.length];
        
        let div = document.createElement('div');
        div.textContent = `${amigoActual} -> ${amigoSecreto}`;
        resultado.appendChild(div);
    }
}
// una vez finalizado se debe reiniciar
function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}
