// 12) Importar as funções criadas no arquivo ArticleService.js
import * as ArticleService from './ArticleService.js';

// 1) Importar o express
import express, { response } from 'express';

// 2) Declarar uma constatante com o identificador válido e atribuir a função express()
const app = express();

// 3) Criar o Servidor
const PORT = process.env.PORT || 3000;

// 6) Comunicar ao node que a engine a ser usada sera a EJS
// 6.1) Setar a engine
app.set('view engine', 'ejs');
// 6.2) Definir o local das views
app.set('views', './views'); // Criar um diretório chamado views

// 4) Escutar uma porta
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// 5) Criar a rota de get
/* 
app.get('/', (request, response) => {
  response.send('<h1>Trabalhando com EJS</h1>'); // Substituído. Vide passo 7.
});
*/

// 7) Renderizar o template - Título
app.get('/', (request, response) => {
  const articles = ArticleService.getArticles();
  response.render('pages/home', { title: 'EJS', articles });
});

// 8) Criar um serviço que vai rertornar uma lista de artigos.
// Vide ArticleService.js

// 13) Vá até o arquivo home.ejs

// 16) Criação da rota dinâmica
app.get('/artigos/:articleId', (request, response) => {
  const articleId = request.params.articleId;
  const article = ArticleService.getArticleById(articleId);
  const title = article ? article.title : 'Artigo não encontrado';
  response.render('pages/artigos', { title: title, article }); // 20) Coloque o template dentro do parênteses
});

// 17) Criar um template - página de detalhes, em arquivo externo. Vide artigos.ejs

// 21) Definir um título padrão - criar uma const acima do response (item 20), na linha 46

// 22) Dentro da pasta views, criar a pasta layout e dentro dessa o arquivo footer.ejs
