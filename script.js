/**
 * PROJETO AGRINHO 2026 - DO CAMPO AO COPO
 * Nível 4 - Programação e Sustentabilidade
 * Arquivo Principal de Lógica (JavaScript)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o "Banco de Dados" local do navegador
    let registrosAgro = JSON.parse(localStorage.getItem('banco_agrinho_2026')) || [];

    // Referências dos elementos HTML
    const formPlantio = document.getElementById('form-plantio');
    const listaPlantios = document.getElementById('lista-plantios');
    
    // Referências do Dashboard (Eixo 2 - Processamento de Dados)
    const statArea