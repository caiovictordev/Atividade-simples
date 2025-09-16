function verificar(){
    let idade = document.getElementById("idade").value; 
    let mensagem = document.getElementById("mensagem");

    if(idade >= 18){
        mensagem.innerHTML = "Você é maior de idade."
    }else{
        mensagem.innerHTML = "Você é menor de idade."
    }
}