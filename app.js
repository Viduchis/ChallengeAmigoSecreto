const inputAgregar = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultados = document.getElementById("resultado");

let amigos = [];
const amigosEscogidos = [];


function agregarAmigo() {
    const nuevoAmigo = inputAgregar.value.trim();

    if (nuevoAmigo === "") {
        alert("No puedes agregar un nombre vacio :(");
        return;
    }

    if (!amigos.includes(nuevoAmigo)) {
        amigos.push(nuevoAmigo);
        crearUnItem(nuevoAmigo, listaAmigos);
    }else alert("Este amigo ya fue agregado")
    console.log(amigos);
    inputAgregar.value = "";

}

function sortearAmigo() {
    if (amigos.length === 0) return;

    const amigoSeleccionado = escogerAmigoRandom();

    if (!amigosEscogidos.includes(amigoSeleccionado)) {
        amigosEscogidos.push(amigoSeleccionado);
        crearUnItem(amigoSeleccionado, resultados);
        amigos = amigos.filter(amigo => amigo !== amigoSeleccionado);

        eliminarDeLista(amigoSeleccionado);
    }
    inputAgregar.value = "";
}


function escogerAmigoRandom() {
    return amigos[Math.floor(Math.random() * amigos.length)]
}

function crearUnItem(amigo, lista) {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = amigo;
    lista.appendChild(nuevoElemento);
}

function eliminarDeLista(amigo) {
    const elementos = listaAmigos.getElementsByTagName("li");

    for (let elemento of elementos) {
        if (elemento.textContent === amigo) {
            listaAmigos.removeChild(elemento);
            break;
        }
    }
}
