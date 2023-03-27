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