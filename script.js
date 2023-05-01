const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".text_desencriptado");
const copia = document.querySelector(".boton__copiar");
copia.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector(".text_area").value;
    let validador = textoEscrito.match(/^[a-z]/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.display = "block"; 
        textArea.value = "";
        copia.style.display = "block";
        document.getElementById("mensaje_informacion").style.display = "none"; 
    }
}
//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "bet"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"``
// `La letra "n" es convertida para "dly"``
// `La letra "c" es convertida para "stx"``
// `La letra "m" es convertida para "rs"``
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "hx"], ["i", "bet"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], ["c", "stx"], ["n", "dly"], ["m", "rs"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    copia.style.display = "block";
    mensaje.style.display = "block";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "hx"], ["i", "bet"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], ["c", "stx"], ["n", "dly"], ["m", "rs"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    document.getElementById("mensaje_informacion").style.display = "none";
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    document.execCommand('copy');
    mensaje.value = "";
    copia.style.display = "none"
    mensaje.style.display = "none";
    document.getElementById("mensaje_informacion").style.display = "flex"; 
}
