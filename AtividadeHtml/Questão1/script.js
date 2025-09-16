
function calcular(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;

    let soma = parseFloat(n1) + parseFloat(n2) + parseFloat(n3);
    let resultadoFinal = soma/3
    
    let resultado = document.getElementById("resultado");
    
    resultado.textContent = (resultadoFinal);

    if(resultadoFinal <7){
        resultado.innerHTML = "Você reprovou."
    }else{
        resultado.innerHTML = "Você passou!"
    }   
}

