// Função para gerar número aleatório entre 1 e 10000
function getRandomNumber() {
    return Math.floor(Math.random() * 10000) + 1;
}

// Função para obter o timestamp atual formatado
function getCurrentTimestamp() {
    return new Date().toISOString();
}

// Função principal que exibe as informações no console
function logInfo() {
    const timestamp = getCurrentTimestamp();
    const randomNumber = getRandomNumber();
    console.log(`[${timestamp}] Mensagem! Número aleatório: ${randomNumber}`);
}

// Executa a função quando a página carrega
logInfo(); 