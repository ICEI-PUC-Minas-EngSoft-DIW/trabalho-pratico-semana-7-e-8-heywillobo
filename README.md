# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: William Augusto Lobo Freire
- Matricula: 887712
- Proposta de projeto escolhida: 1. Pessoas e Produções
- Breve descrição sobre seu projeto: O projeto consiste na criação de uma home-page dedicada ao mangaká Eiichiro Oda, criador de One Piece e contar sobre a sua obra.

## Print da Home-Page

<<  COLOQUE A IMAGEM AQUI >>

## Print da página de detalhes do item

<<  COLOQUE A IMAGEM AQUI >>

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const obras = [
{
id: 1,
titulo: "One Piece",
descricao: "A maior obra de Eiichiro Oda, acompanha as aventuras de Monkey D. Luffy em busca do tesouro One Piece.",
imagem: "onepiece.jpg",
detalhes: "One Piece é um mangá publicado desde 1997 e ainda em andamento, sendo o mais vendido da história."
},
{
id: 2,
titulo: "Wanted!",
descricao: "Uma coletânea de one-shots criados por Oda antes de iniciar One Piece.",
imagem: "wanted.jpg",
detalhes: "Wanted! reúne histórias curtas que ajudaram a moldar o estilo narrativo de Oda."
},
{
id: 3,
titulo: "Romance Dawn",
descricao: "História que serviu como base para o que viria a ser One Piece.",
imagem: "romance-dawn.jpg",
detalhes: "Romance Dawn apresenta uma versão inicial de Luffy e sua jornada como pirata."
}
];

