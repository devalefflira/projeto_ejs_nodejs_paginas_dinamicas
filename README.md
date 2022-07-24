# Projeto EJS e Nodejs - Criação de Páginas Dinâmicas



Projeto de criação de páginas dinâmicas de artigos, desenvolvido durante o curso de Nodejs da Tech Academy, da StartSe, turma 1, mês/ano: 07/2022;

Aplicação prática do conceitos abordados em aula, sobre EJS - criação de templates no HTML, para facilitação da implementação de páginas, bem como da manutenção do código. Através do aprendizado, tornou-se possível criar estruturas de páginas, como por exemplo o arquivo footer.ejs (que se refere apenas ao rodapé da página), e adicionar o template no body de todas as páginas.

Usou-se como dependências:

- ejs
- express
- nodemon (em ambiente de desenvolvimento, apenas para reload automático no servidor)

Como trabalhamos com módulos no projeto, adicionamos ao package.json, o:

- "type": "module"

Como baixamos como depêndencia dev o nodemon, logo tivemos que acrescentar ao package.json o:

- "scripts": "dev": "nodemon index.js"

  - No terminal, o comando utilizado para estartar a aplicação é:

    npm run dev

## Passo a passo para a criação do projeto:

Vide os comentários dentro dos códigos e observar a sequência numérica.