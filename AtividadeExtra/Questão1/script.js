function calcular(){
    let n1 = document.getElementById("nota1").value;
    let n2 = document.getElementById("nota2").value;
    let n3 = document.getElementById("nota3").value;
    let mensagem = document.getElementById("mensagem")
    let soma = parseFloat(n1) + parseFloat(n2) + parseFloat(n3);
    
    soma = soma/3;
    
    if(soma >= 7){
        mensagem.innerHTML="Aprovado. Sua nota é: " + soma;
    }else if(soma < 7 && soma >= 5){
        mensagem.innerHTML="Recuperação. Sua nota é: " + soma;
    }else if(soma < 5){
        mensagem.innerHTML="Reprovado. Sua nota é: " + soma;
    }
}
