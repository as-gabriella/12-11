function responder(correta){
    if (correta) {
        //Avançar para a próxima pergunta
        alert("Resposta correta! Indo para a próxima pergunta...");
} else {
        //Entrar no modo tela cheia e exibir imagem de erro
        setTimeout(() => {
          goFullScreen();
          exibirErro(); 
        }, 2000);
  }
}

//Função para exibir a imagem de erro e trocar o som
function exibirErro (){
    const telaCheiaErro = document.getElementById("telaCheiaErro");
    const somErro = document.getElementById("somErro");

    telaCheiaErro.style.display = "flex"; //Exibe a imagem em tela cheia 
    somErro.play(); //Toca o som de erro

    //Clica na tela para sair do modo de erro
    telaCheiaErro.addEventListener("click",I() => {
     telaCheiaErro.style.display = "none";
        sairTelaCheia();
    });

}

//Função para entrar no modo tela cheia 
function goFullScreen(){
    const elem = document.documentElement; 
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (document.mozCancelFullScreen) { //Firefox
        elem.mozRequestFullScreen();
    } else if (document.webkitExistull) { // IE/Edge
    document.


    }
 


}