function copiar(){
    /* Declaro variable que captura el contedio del Textarea */
    let textoCopiado = document.getElementById('msg');
    textoCopiado.select();
    /** copia al porta papeles**/
    document.execCommand('copy');
}