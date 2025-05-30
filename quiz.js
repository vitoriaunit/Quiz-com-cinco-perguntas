function verificarQuiz() {
  let pontuacao = 0;
  const respostas = document.querySelectorAll('input[type="radio"]:checked');
  respostas.forEach(resposta => {
    if (resposta.value === "correta") pontuacao++;
  });

  const resultado = document.getElementById("resultado");
  resultado.classList.remove("grande");
  if (pontuacao >= 4) {
    resultado.textContent = `Parabéns!!! Você ganhou o quiz. Pontuação: ${pontuacao}/5`;
    resultado.style.color = "#7c3aed";
    resultado.classList.add("grande");
  } else {
    resultado.textContent = `Você perdeu!!! Pontuação: ${pontuacao}/5`;
    resultado.style.color = "#b91c1c";
  }
}