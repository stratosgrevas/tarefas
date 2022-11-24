# SISTEMA REACT CADASTRO DE TAREFAS - CRUD SIMPLES

Desenvolvedor: Allan Gleison Santos

## SISTEMA

Nesse sistema será possível

- Listar todos as Tarefas.
- Adicionar uma nova Tarefa.
- Alterar o registro de uma Tarefa.
- Deletar uma Tarefa.

## Pré Requisitos para o funcionamento do sistema

1 - Ter instalado o cliente de banco de dados MYSQL ( Pode usar por exemplo o XAMPP que já vem com o MYSQL )

2 - Ter instalado o NODEJS

3 - Ter instalado o pacote NPM

## Instruções para API e FRONT (react)

1 - Execute o MYSQL e crie um novo banco de dados com o nome: <strong>"todo"</strong>

2 - Pelo console, navegue até o diretório do projeto e então navegue ao subdiretório <strong>"client"</strong>:

3 - aqui execute o comando: <strong>"npm install"</strong> para atualização dos pacotes npm do projeto

4 - Ainda no diretório do inicial do projeto, navegue ao subdiretório <strong>"server"</strong>: 

5 - aqui execute o comando: <strong>"npm install"</strong> para atualização dos pacotes npm do projeto

6 - Ainda no subdiretório "server" e, com o banco já criado, execute, pelo console o seguinte comando para criação da tabela e dos primeiros registros no banco de dados:

<pre>node create-table.js</pre>

7 - O sistema deverá exibir as mensagens de sucesso como abaixo:

<pre>
D:\DESENV\REACT\tarefas\server>node create-table.js
tabela 'tb_todos' criada com sucesso !
primeiros registros adicionados com sucesso !
</pre>

8 - Ainda no subdiretório "server", execute o comando <strong>"nodemon server.js"</strong> para iniciar o servidor da API do sistema.

- Você deverá ver no console o seguinte resultado:

<pre>D:\DESENV\DEVNODEJS\teste-node>nodemon server.js
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
API funcionando em http://localhost:3000
</pre>

## Instruções para executar o SISTEMA no navegador

1 - Com a API funcionando, abra outro console e, navegue até o subdiretório <strong>"client"</strong>:

2 - Execute o comando <strong>"npm start"</strong>

3 - No console, você deverá ver o seguinte resultado:

<pre>
Compiled successfully!

You can now view crud in the browser.

  Local:            http://localhost:3000        
  On Your Network:  http://192.168.0.17:3000     

Note that the development build is not optimized.
To create a production build, use npm run build. 

webpack compiled successfully
</pre>

4 - Automaticamente o React se encarregará de abrir uma aba no navegador padrão apontando para o endereço: <strong>"http://localhost:3000/"</strong>

5 - Nessa tela, você deverá ver um resultado como mostrado na figura:



## Dúvidas?

Quaisquer dúvidas que você venha a ter, entre em contato com stratosgrevas@gmail.com
