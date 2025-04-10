function default_counter() {
    const startDate = new Date("2024-09-12T00:00:00");
    const currentDate = new Date();

    const differenceInMilliseconds = currentDate - startDate;
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    
    const numeroFormatado = differenceInSeconds.toLocaleString("pt-BR");

    document.querySelector("#default_counter").textContent = numeroFormatado;
}
setInterval(default_counter, 1000);


const startDate = new Date("2024-09-12T00:00:00");

// Função para formatar com separador de milhar
function formatNumber(n) {
  return n.toLocaleString("pt-BR");
}

// Inicializa o contador de batidas
function updateHeartbeatsCounter() {
  const now = new Date();
  const diffInMilliseconds = now - startDate;

  // Cada batida = 600ms → total de batidas = diff / 600
  const heartbeats = Math.floor(diffInMilliseconds / 600);

  document.querySelector("#heart_counter").textContent = formatNumber(heartbeats);
}

// Atualiza a cada 600ms
setInterval(updateHeartbeatsCounter, 600);
