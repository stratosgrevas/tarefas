/**
 * SISTEMA de CADASTRO DE TAREFAS
 * Arquivo server para inicialização do servidor da API
 * Autor: Allan Gleison Santos
 */

// imports e requisições de arquivos do projeto
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// definição da porta padrão da api
const port = 3001;

// configuração da conexão com o banco de dados
const db = mysql.createPool({
    host: "localhost", // servidor do banco de dados
    user: "root", // usuário do banco de dados
    password: "", // senha do banco de dados
    database: "todo", // banco de dados
});

// configuração para retornar tudo em JSON
app.use(cors());
app.use(express.json());

// metodo para listar todos os registros da tabela tb_todos
app.get("/listar", (req, res) => {

    let sql = "SELECT * FROM tb_todos ORDER BY ID DESC";

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

});

// metodo para gravar um novo registro na tabela tb_todos
app.post("/gravar", (req, res) => {
    const { nome } = req.body;
    const { descricao } = req.body;

    let sql = "INSERT tb_todos (nome, descricao) VALUES( ?,? )";

    db.query(sql, [nome, descricao], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// metodo update para alterar um registro na tabela tb_todos
app.put("/editar", (req, res) => {
    const { id } = req.body;
    const { nome } = req.body;
    const { descricao } = req.body;

    let mysql = "UPDATE tb_todos SET nome = ?, descricao = ? WHERE id = ?";

    db.query(mysql, [nome, descricao, id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

// metodo para deletar um registro na tabela tb_todos
app.delete("/deletar/:id", (req, res) => {
    const { id } = req.params;

    let mysql = "DELETE FROM tb_todos WHERE id = ?";

    db.query(mysql, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

//iniciando o servidor
app.listen(port, () => {
    console.log(`API funcionando em http://localhost:${port}`);
});