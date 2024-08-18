const textArea = document.querySelector(".text_area");
const mensagem = document.querySelector(".text_mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value="";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a", "ai"] , ["o","ober"] , ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textDesencriptado = desencriptar(textArea.value);
    mensagem.value = textDesencriptado;
    textArea.value="";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

const btnCopiar = document.querySelector(".btn_copiar");

btnCopiar.addEventListener('click', () =>{
    mensagem.select();
    document.execCommand('copy');
    mensagem.value="";
});
