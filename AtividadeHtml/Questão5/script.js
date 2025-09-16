function verificarNumero(){
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    numero = numero % 2

    if(numero == 0 ){
        resultado.innerHTML = "Esse numero é par";
    }else{
        resultado.innerHTML = "Esse número é impar";
    }
}