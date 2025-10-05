const obras = [
  {
    id: 1,
    titulo: "One Piece",
    descricao: "Mangá sobre piratas em busca do tesouro One Piece.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/2/29/OnePieceVol61Cover.jpg"
  },
  {
    id: 2,
    titulo: "Wanted!",
    descricao: "Coletânea de histórias curtas do Oda antes de One Piece.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/8/8b/Wanted%21_cover.jpg"
  },
  {
    id: 3,
    titulo: "Romance Dawn",
    descricao: "Protótipo inicial que deu origem a One Piece.",
    imagem: "https://i.pinimg.com/originals/46/68/1b/46681bc10de13f3ec9a7b3a5749ab6ce.jpg"
  }
];

function carregarListaObras() {
  const container = document.getElementById("lista-obras");
  if (!container) return;

  obras.forEach(obra => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${obra.imagem}" alt="${obra.titulo}">
      <h3>${obra.titulo}</h3>
      <p>${obra.descricao}</p>
      <a href="detalhes.html?id=${obra.id}" class="btn">Ver Detalhes</a>
    `;
    container.appendChild(card);
  });
}

function carregarDetalhesObra() {
  const container = document.getElementById("detalhes-obra");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const obra = obras.find(o => o.id === id);

  if (!obra) {
    container.innerHTML = "<p>Obra não encontrada.</p>";
    return;
  }

  container.innerHTML = `
    <div class="detalhe-card">
      <img src="${obra.imagem}" alt="${obra.titulo}">
      <h2>${obra.titulo}</h2>
      <p>${obra.descricao}</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  carregarListaObras();
  carregarDetalhesObra();
});
