let boton1 = document.querySelector("#btn-encriptar"); 
boton1.onclick = encriptar;

let boton2 = document.querySelector("#btn-desencriptar"); 
boton2.onclick = desencriptar;

function encriptar (){
    /** Declaracion de variables y encriptado**/
    let texto = document.querySelector("#input-texto").value;
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    /** enviar el texto encriptado a la salida **/
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
    mostrarElementos();
}   

function desencriptar (){ 
    /** Declaracion de variables y desencriptado**/
    let texto = document.querySelector("#input-texto").value; 
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    /** enviar el texto desencriptado a la salida **/
    document.querySelector(".text-input-salida").value = textoCifrado; 
    document.querySelector("#input-texto").value;
    mostrarElementos();

}

function mostrarElementos(){
    /** Declaracion de variables y captura de elemento por su id**/
    let mostrar = document.getElementById('resultado');
    let noMostrar = document.getElementById('textoMasImagen');
    /** ocultar y mostrar elemento **/
    if(mostrar.style.display ==='none'){
        mostrar.style.display = 'none';
        noMostrar.style.display = 'block';

        alert("no me ves");
    }   
    else{
        mostrar.style.display = 'block';
        noMostrar.style.display = 'none';
        alert("me ves");
    }
}
