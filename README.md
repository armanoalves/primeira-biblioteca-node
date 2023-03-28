# primeira-biblioteca-node

## Aprendizados

### Aula 01

- Para criar um projeto em Node.js utilizamos o comando `npm init`;

- O arquivo `package.json` é utilizado pelo Node.js para listar as dependências instaladas, além de informações sobre versão do programa, autoria e scripts;

- As dependências (também chamadas de libs ou bibliotecas) são pacotes de código pronto que outras pessoas da comunidade disponibilizam, e nós as utilizamos para executar tarefas específicas no código sem termos que reescrever do zero;

- Para deixar o código mais organizado podemos usar ferramentas de linting, além da importância delas para reforçar estilo e também para prever possíveis bugs.

### Aula 02

- Podemos utilizar a lib `fs` (File System, ou sistema de arquivos) nativa do JavaScript para que o programa consiga acessar e ler arquivos do computador;

- Conseguimos capturar mensagens de erro enviadas pelo Node.js quando algo no programa não sai como o esperado utilizando a palavra-chave `throw`, ou lançar;

- Que as “promessas” são a forma que o JavaScript utiliza para trabalhar com código assíncrono e que podemos resolvê-las utilizando em conjunto as palavras-chave `async` e `await` ou o método `.then()`.

### Aula 03

- Como utilizar expressões regulares, uma sintaxe feita para reconhecer padrões de texto, para capturar links e URLs;

- Como utilizamos classes e grupos de expressões regulares para refinar a busca por estes padrões, além dos métodos que o JavaScript tem (por exemplo `match` e `exec`) para trazer os resultados e trabalhar com eles;

- Manipular os resultados extraídos do texto através de expressões regulares e montar um objeto de retorno utilizando a sintaxe do JavaScript e desestruturação de objetos com o spread operator (....).

### Aula 04

- A utilizar a interface de linha de comando e como aplicamos a lib `process` do Node.js para capturar e utilizar os dados informados no terminal em nosso código;

- A organizar o código separando em arquivos as funções que lidam com entrada e saída de dados das funções que processam os links;

- Como fazer estes diversos arquivos conversarem entre si através da exportação e importação de módulos com `import` e `export`;

- Que scripts são instruções que usamos para automatizar tarefas e como escrever nossos próprios scripts, incluí-los no arquivo de configuração `package.json` e utilizá-los para executar comandos no terminal.

### Aula 05

- Como utilizar acessar URLs com a API `fetch` e manipular os dados devolvidos, como o código de status HTTP;

- Utilizar o método `Promise.all` para acessar de forma assíncrona um array de URLs e receber o resultado;

- Que a API `fetch` é baseada no conceito de **promessas** em JavaScript, e nessa aula vimos como utiliza o `async/await` para resolver as promessas e garantir que o código seja executado de forma assíncrona, retornando os resultados.