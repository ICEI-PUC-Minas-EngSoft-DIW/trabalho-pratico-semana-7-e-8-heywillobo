const obras = [
  {
    id: 1,
    titulo: "One Piece",
    descricao: "Mangá e anime criado por Eiichiro Oda.",
    conteudo: "Acompanha as aventuras de Monkey D. Luffy e sua tripulação na busca pelo tesouro One Piece.",
    autor: "Eiichiro Oda",
    data: "1997",
    imagem: "img/onepiece.jpg"
  },
  {
    id: 2,
    titulo: "Romance Dawn",
    descricao: "Primeira versão da história que daria origem a One Piece.",
    conteudo: "Romance Dawn foi um one-shot escrito por Eiichiro Oda que serviu de base para o que viria a ser One Piece.",
    autor: "Eiichiro Oda",
    data: "1996",
    imagem: "img/romancedawn.jpg"
  },
  {
    id: 3,
    titulo: "Wanted!",
    descricao: "Coletânea de histórias curtas do Oda.",
    conteudo: "Reúne várias histórias escritas e desenhadas por Oda antes de One Piece.",
    autor: "Eiichiro Oda",
    data: "1992",
    imagem: "img/wanted.jpg"
  }
];

function carregarHome() {
  const container = document.getElementById("lista-obras");
  if (!container) return;

  obras.forEach((obra) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${obra.imagem}" alt="${obra.titulo}" class="card-img">
      <h3>${obra.titulo}</h3>
      <p>${obra.descricao}</p>
      <a href="detalhes.html?id=${obra.id}" class="btn">Ver detalhes</a>
    `;

    container.appendChild(card);
  });
}

function carregarDetalhes() {
  const container = document.getElementById("detalhe-obra");
  if (!container) return; 

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const obra = obras.find((o) => o.id === id);

  if (!obra) {
    container.innerHTML = "<p>Obra não encontrada.</p>";
    return;
  }

  container.innerHTML = `
    <div class="detalhe-card">
      <img src="${obra.imagem}" alt="${obra.titulo}" class="detalhe-img">
      <h2>${obra.titulo}</h2>
      <p><strong>Autor:</strong> ${obra.autor}</p>
      <p><strong>Ano:</strong> ${obra.data}</p>
      <p>${obra.conteudo}</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  carregarHome();
  carregarDetalhes();
});
```
