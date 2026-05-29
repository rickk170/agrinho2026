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
// ==========================================
    // LÓGICA DO PROTÓTIPO NÍVEL 4: RASTREABILIDADE
    // ==========================================
    
    const formPlantio = document.getElementById('form-plantio');
    const listaPlantios = document.getElementById('lista-plantios');

    let registros = JSON.parse(localStorage.getItem('agrinho_registros_v2')) || [];

    // Função auxiliar para gerar um código de rastreio único
    function gerarCodigoRastreio() {
        return 'LOTE-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    }

    // Função auxiliar para definir o nível de sustentabilidade
    function avaliarSustentabilidade(metodoIrrigacao) {
        if (metodoIrrigacao === 'gotejamento') return '🌱 Alta (Econômico)';
        if (metodoIrrigacao === 'chuva') return '🌧️ Natural (100%)';
        return '💧 Média (Convencional)';
    }

    function atualizarTabela() {
        listaPlantios.innerHTML = ''; 
        
        registros.forEach((registro, index) => {
            const linha = document.createElement('tr');
            
            const seloSustentavel = avaliarSustentabilidade(registro.irrigacao);
            
            linha.innerHTML = `
                <td><span class="badge-rastreio">${registro.codigo}</span></td>
                <td>${registro.cultura} <br><small>${registro.area} ha</small></td>
                <td><span class="badge-sustentavel">${seloSustentavel}</span></td>
                <td><button class="btn-remover" onclick="removerRegistro(${index})">Excluir</button></td>
            `;
            
            listaPlantios.appendChild(linha);
        });
    }

    if (formPlantio) {
        formPlantio.addEventListener('submit', (evento) => {
            evento.preventDefault(); 
            
            const cultura = document.getElementById('cultura').value;
            const area = document.getElementById('area').value;
            const data = document.getElementById('data').value;
            const irrigacao = document.getElementById('irrigacao').value;
            const codigoUnico = gerarCodigoRastreio();

            const novoRegistro = { 
                codigo: codigoUnico, 
                cultura, 
                area, 
                data, 
                irrigacao 
            };
            
            registros.push(novoRegistro);
            localStorage.setItem('agrinho_registros_v2', JSON.stringify(registros));
            
            formPlantio.reset();
            atualizarTabela();
        });
    }

    window.removerRegistro = function(index) {
        registros.splice(index, 1); 
        localStorage.setItem('agrinho_registros_v2', JSON.stringify(registros)); 
        atualizarTabela(); 
    };

    atualizarTabela();