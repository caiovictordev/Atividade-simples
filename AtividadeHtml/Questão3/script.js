function converter(){
    let celsius = document.getElementById("celsius").value;
    let saida = document.getElementById("saida");
    let soma = celsius * 1.8;
    let resultadoFinal = soma + 32;
    
    saida.innerHTML = "O resultado é: " + resultadoFinal ;
}