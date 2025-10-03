const dados = [
{
id: 1,
titulo: "One Piece",
descricao: "Mangá iniciado em 1997 e ainda em publicação, com mais de 100 volumes lançados.",
conteudo: "One Piece acompanha as aventuras de Monkey D. Luffy e sua tripulação em busca do lendário tesouro One Piece. É uma das obras mais vendidas e influentes do mundo.",
autor: "Eiichiro Oda",
data: "1997",
imagem: "img/onepiece.jpg"
},
{
id: 2,
titulo: "Wanted!",
descricao: "Coletânea de histórias curtas publicadas antes do sucesso de One Piece.",
conteudo: "Wanted! é uma coletânea de mangás curtos de Oda, lançada antes de One Piece, que mostrava seu potencial criativo e talento artístico.",
autor: "Eiichiro Oda",
data: "1992",
imagem: "img/wanted.jpg"
},
{
id: 3,
titulo: "Romance Dawn",
descricao: "Versão inicial que deu origem a One Piece.",
conteudo: "Romance Dawn foi a primeira versão da história de Luffy, apresentada em forma de one-shot, e serviu como protótipo para One Piece.",
autor: "Eiichiro Oda",
data: "1996",
imagem: "img/romancedawn.jpg"
}
];

function carregarCards() {
const lista = document.getElementById("lista-itens");
if (!lista) return;

lista.innerHTML = "";
dados.forEach(item => {
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `       <a href="detalhes.html?id=${item.id}">         <img src="${item.imagem}" alt="${item.titulo}">         <h3>${item.titulo}</h3>         <p>${item.descricao}</p>       </a>
    `;
lista.appendChild(card);
});
}

function carregarDetalhes() {
const detalhes = document.getElementById("detalhes-item");
if (!detalhes) return;

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const item = dados.find(d => d.id === id);

if (item) {
detalhes.innerHTML = `       <h2>${item.titulo}</h2>       <img src="${item.imagem}" alt="${item.titulo}">       <p><strong>Autor:</strong> ${item.author || "Eiichiro Oda"}</p>       <p><strong>Ano:</strong> ${item.data}</p>       <p>${item.conteudo}</p>
    `;
} else {
detalhes.innerHTML = "<p>Obra não encontrada.</p>";
}
}

document.addEventListener("DOMContentLoaded", () => {
carregarCards();
carregarDetalhes();
});
