// Aguarda o documento HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    console.log("🌱 Sistema Agrinho 2026 iniciado com sucesso!");

    // Seleciona o botão da área Hero
    const btnExplorar = document.getElementById('btn-explorar');
    
    // Seleciona a seção "Sobre"
    const secaoSobre = document.getElementById('sobre');

    // Adiciona o evento de clique ao botão
    if (btnExplorar && secaoSobre) {
        btnExplorar.addEventListener('click', () => {
            // Rola a página suavemente até a seção "Sobre"
            secaoSobre.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // Efeito simples: alertar o usuário ao clicar nos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const titulo = card.querySelector('h3').innerText;
            alert(`Você quer saber mais sobre: ${titulo}? \nAdicione mais páginas ou modais ao seu projeto!`);
        });
    });
});