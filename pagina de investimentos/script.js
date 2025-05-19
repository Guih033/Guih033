
function calcularPontuacao() {
    var pontuacao = 0;

    // Critérios financeiros
    if (document.querySelector('input[name="roi"]:checked') && document.querySelector('input[name="roi"]:checked').value == "1") pontuacao++;
    if (document.querySelector('input[name="divida"]:checked') && document.querySelector('input[name="divida"]:checked').value == "1") pontuacao++;
    if (document.querySelector('input[name="crescimento"]:checked') && document.querySelector('input[name="crescimento"]:checked').value == "1") pontuacao++;
    
    // Critérios institucionais
    if (document.querySelector('input[name="produtos"]:checked') && document.querySelector('input[name="produtos"]:checked').value == "1") pontuacao++;
    if (document.querySelector('input[name="administracao"]:checked') && document.querySelector('input[name="administracao"]:checked').value == "1") pontuacao++;
    
    // Cálculo da alocação com base na pontuação
    var alocacao = (pontuacao / 10) * 100;  // Máximo de 10 pontos, alocação proporcional
    if (alocacao > 100) alocacao = 100;
    
    // Exibindo os resultados
    document.getElementById("pontuacao-total").textContent = pontuacao;
    document.getElementById("alocacao").textContent = alocacao.toFixed(2) + "%";
}
