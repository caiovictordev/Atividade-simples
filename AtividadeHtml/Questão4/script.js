var cont = 0;
function contar(){
    let contador = document.getElementById("contador");
    cont++;
    contador.innerHTML = "Você clicou: " + cont;
}