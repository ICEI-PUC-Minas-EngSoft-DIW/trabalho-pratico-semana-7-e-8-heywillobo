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

