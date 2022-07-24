// 9) Criar lista de artigos
const articles = [
  {
    id: 1,
    title: 'Marvel divulga trailer e pôster de Pantera Negra 2;',
    description:
      'A Marvel divulgou, neste sábado (23), o primeiro trailer de Pantera Negra: Wakanda Para Sempre — continuação de Pantera Negra (2018) — durante a San Diego Comic-Con 2022. O filme, previsto para ser lançado em novembro deste ano, também ganhou um novo pôster'
  },

  {
    id: 2,
    title: 'Thor: Amor e Trovão não reacende a faísca que Ragnarok acendeu;',
    description:
      'A impressionante mistura de tons e estilos que o diretor Taika Waititi fez em “Thor: Ragnarok” em grande parte fracassa em Thor: Amor e Trovão, que não é tão engraçado quanto quer ser, tão emocionante quanto precisa ser ou romântico como deveria ser.'
  },

  {
    id: 3,
    title:
      'Ms. Marvel”, da Disney+, traz a primeira personagem muçulmana da Marvel Comics;',
    description:
      'De superfã a super-heroína, a atriz paquistanesa-canadense Iman Vellani, de 19 anos, fez a transformação definitiva na nova série “Ms. Marvel”, da Disney+. Vellani interpreta Kamala Khan, uma estudante do ensino médio de 16 anos e fã de super-heróis que descobre que tem poderes próprios.'
  }
];

// 10) Criar 2 métodos

// 10.1) O primeiro método irá retornar a lista de artigos
function getArticles() {
  return articles;
}

// 10.2) O segundo métido vai pegar o artigo com base no id
function getArticleById(articleId) {
  return articles.find(article => {
    return article.id == Number(articleId);
  });
}

// 11) Exportar as funções
export { getArticles, getArticleById };
// Importe as funções no arquivo index.js
