let contador = 0;



const elementoContador = document.getElementById("contador");

function atualizarTela() {
  elementoContador.innerText = contador;

  const btnAumentar = document.getElementById("aumentar");

btnAumentar.addEventListener("click", () => {
  contador++;
  atualizarTela();
});

const btnDiminuir = document.getElementById("diminuir");

btnDiminuir.addEventListener("click", () => {
  contador--;
  atualizarTela();
});

const btnResetar = document.getElementById("resetar");

btnResetar.addEventListener("click", () => {
  contador = 0;
  atualizarTela();
});
}