var texto = `Aqui está um exemplo
de um texto com
várias linhas
para ser digitado.`;
// Texto para ser digitado

var paper = document.getElementById('paper');
// Elemento onde o texto será exibido

var index = 0;
// Índice que controla a posição do texto que será exibido

function escreverTexto() {
  paper.innerHTML += texto.charAt(index);
  index++; // Função que adiciona texto ao elemento em intervalos de tempo

  if (index < texto.length) {
    setTimeout(escreverTexto, 50); 
  } // Se não terminou de digitar o texto, chama a função após um pequeno intervalo
} 


window.onload = escreverTexto;
// Inicia o processo de escrever o texto quando a página carrega
