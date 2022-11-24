// Módulo para criação da tabela TB_TODOS
// Também popula a tabela com primeiros registros

// Siga as instruções para executar o comando para criação da tabela tb_todos:
// 1 - Entre no diretório do projeto pelo CONSOLE ou GITBASH
// 2 - No diretório do projeto, entre no subdiretório /server
// 3 - Execute o comando: node create-table.js
// 4 - O sistema deverá exibir as mensagens de sucesso !

// requisições
const mysql = require("mysql");

// configuração da conexão com o banco de dados
const db = mysql.createPool({
    host: "localhost", // servidor do banco de dados
    user: "root", // usuário do banco de dados
    password: "", // senha do banco de dados
    database: "todo", // banco de dados
});

// chamada da função para criação da tabela tb_todos
createTable(db);

// função para criação da tabela tb_todos
function createTable(conn) {
    const sql = `CREATE TABLE IF NOT EXISTS tb_todos(
                 ID int NOT NULL AUTO_INCREMENT,
                 nome varchar(150) NOT NULL,
                 descricao varchar(255) NOT NULL,
                 PRIMARY KEY (ID)
                 );`;

    conn.query(sql, (error) => {
        if (error) {
            return console.log(error);
        } else {
            console.log("tabela 'tb_todos' criada com sucesso !");
            addRows(conn);
        }
    });
}

// função para popular os primeiros registros da tabela tb_todos
function addRows(conn) {
    const sql = "INSERT INTO tb_todos(nome,descricao) VALUES ?";
    const values = [
        ['tarefa 1', 'execute a tarefa 1'],
        ['tarefa 2', 'execute a tarefa 2'],
        ['tarefa 3', 'execute a tarefa 3']
    ];
    conn.query(sql, [values], (error, results, fields) => {
        if (error) return console.log(error);
        console.log('primeiros registros adicionados com sucesso !');
        conn.end(); //finaliza a conexão
    });
}