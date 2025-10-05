const dados = [
    {
        id: 1,
        titulo: "One Piece",
        descricao: "A obra mais famosa de Eiichiro Oda.",
        conteudo: "One Piece conta a jornada de Monkey D. Luffy em busca do maior tesouro do mundo.",
        ano: 1997,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/2/25/One_Piece_-_Volume_1.jpg", 
        curiosidades: [
            "É o mangá com o maior número de cópias publicadas de um único autor no mundo.",
            "O nome original de 'Gum-Gum Fruit' era 'Gomu Gomu no Mi'."
        ]
    },
    {
        id: 2,
        titulo: "Wanted!",
        descricao: "Coleção de histórias curtas antes de One Piece.",
        conteudo: "Um conjunto de one-shots que ajudaram Oda a se destacar como mangaká.",
        ano: 1992,
        imagem: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388147230i/202613.jpg",
        curiosidades: [
            "A coleção Wanted! foi a estreia oficial de Oda como mangaká.",
            "Contém a história de 'Monsters' (que ganhou um especial de anime em 2024)."
        ]
    },
    {
        id: 3,
        titulo: "Romance Dawn",
        descricao: "Versão inicial do que se tornaria One Piece.",
        conteudo: "Primeira aparição de Luffy, publicada antes da serialização oficial.",
        ano: 1996,
        imagem: "https://m.media-amazon.com/images/I/41-99y6V8DL.jpg",
        curiosidades: [
            "Existem duas versões de 'Romance Dawn'.",
            "Foi um piloto que se tornou a base para o início de One Piece."
        ]
    },
    {
        id: 4,
        titulo: "Monsters",
        descricao: "História curta de samurai e dragões.",
        conteudo: "Uma das obras que mostraram a habilidade de Oda em criar mundos fantásticos.",
        ano: 1994,        imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e0/Monsters_-_Capa.jpg",
        curiosidades: [
            "O protagonista, Ryuma, aparece mais tarde em One Piece.",
            "Foi uma das histórias que rendeu a Oda o prêmio Tezuka."
        ]
    },
    {
        id: 5,
        titulo: "Cross Epoch",
        descricao: "Crossover de One Piece e Dragon Ball.",
        conteudo: "Parceria com Akira Toriyama, lançada em 2006.",
        ano: 2006,
        imagem: "https://i.ebayimg.com/images/g/Y8EAAOSw44BiqH69/s-l1600.jpg",
        curiosidades: [
            "É uma história de apenas 19 páginas.",
            "O crossover foi publicado na revista 'Shonen Jump'."
        ]
    }
];

function carregarDetalhesObra() {
    if (document.getElementById("detalhes-obra")) {
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get("id"));
        const obra = dados.find(o => o.id === id);

        if (obra) {
            document.getElementById("titulo-obra").innerText = obra.titulo;
            document.getElementById("subtitulo-obra").innerText = `Ano: ${obra.ano}`;
            
            document.getElementById("detalhes-obra").innerHTML = `
                <div class="col-md-6">
                    <img 
                        src="${obra.imagem}" 
                        class="img-fluid rounded shadow" 
                        alt="Capa da obra ${obra.titulo}"
                        style="min-width: 100%; height: auto;" 
                    >
                </div>
                <div class="col-md-6">
                    <h3>${obra.titulo}</h3>
                    <p>${obra.conteudo}</p>
                    <p><strong>Ano:</strong> ${obra.ano}</p>
                </div>
            `;
            
            const curiosidadesLista = obra.curiosidades ? 
                obra.curiosidades.map(c => `<li>${c}</li>`).join('') : 
                '<li>Nenhuma curiosidade adicional disponível.</li>';
                
            document.getElementById("curiosidades-obra").innerHTML = curiosidadesLista;
            
        } else {
            document.getElementById("titulo-obra").innerText = "Obra Não Encontrada";
            document.getElementById("subtitulo-obra").innerText = "Verifique o ID na URL.";
            document.getElementById("detalhes-obra").innerHTML = `<div class="col-12"><p class="text-center">Nenhuma obra com o ID ${id} foi encontrada.</p></div>`;
            document.getElementById("curiosidades-obra").innerHTML = `<li>Informações indisponíveis.</li>`;
        }
    }
}

function renderizarObras(lista) {
    const container = document.getElementById("lista-obras");
    if (!container) return;
    
    container.innerHTML = "";

    lista.forEach(obra => {
        const card = `
             <div class="col-md-4">
               <div class="card h-100 shadow-sm">
                 <img src="${obra.imagem}" class="card-img-top" alt="${obra.titulo}">
                 <div class="card-body">
                   <h5 class="card-title">${obra.titulo}</h5>
                   <p class="card-text">${obra.descricao}</p>
                   <a href="detalhes.html?id=${obra.id}" class="btn btn-warning">Ver detalhes</a>
                 </div>
               </div>
             </div>
        `;
        container.innerHTML += card;
    });
}

const listaContainer = document.getElementById("lista-obras");
if (listaContainer) {
    renderizarObras(dados);
    
    const formBusca = document.querySelector("form");
    if (formBusca) {
        formBusca.addEventListener("submit", function(e) {
            e.preventDefault();
            const termo = document.querySelector("input").value.toLowerCase();
        
            const filtradas = dados.filter(obra =>
                obra.titulo.toLowerCase().includes(termo) ||
                obra.descricao.toLowerCase().includes(termo)
            );
        
            renderizarObras(filtradas);
        });
    }
}


document.addEventListener('DOMContentLoaded', carregarDetalhesObra);