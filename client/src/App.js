/**
 * SISTEMA de CADASTRO DE TAREFAS
 * Arquivo da tela principal
 * Autor: Allan Gleison Santos
 */

// imports e requisições de arquivos do projeto
import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/card";

export default function App() {
  const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);

  // constante para recuperar dados do form
  // e gerar a requisição para gravar informações no banco
  // e caso sucesso na gravação recarrega os registros
  const handleGravar = () => {
    Axios.post("http://localhost:3001/gravar", {
      nome: values.nome,
      descricao: values.descricao,
    }).then((res) => {
      if (res.status === 200) {
        Axios.get("http://localhost:3001/listar").then((response) => {
          setListCard(response.data);
        });
      } else {
        alert("Erro ao cadastrar o registro!");
      }
    });
  };

  // atualiza os registros na lista de cards
  useEffect(() => {
    Axios.get("http://localhost:3001/listar").then((response) => {
      setListCard(response.data);
    });
  }, []);

  // atualiza as informações dos campos a cada 
  // caractere digitado nos campos
  const handleAddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  // retorno principal que exibirá o conteúdo:
  // 1- form com os campos para cadastro das atividades
  // 2 - cards com a lista de registros da tabela tb_todos
  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Cadastro de Tarefas</h1>

        <input
          type="text"
          name="nome"
          placeholder="Digite um nome para a tarefa"
          className="register-input"
          onChange={handleAddValues}
        />
        <input
          type="text"
          placeholder="Digite uma descrição para a tarefa"
          name="descricao"
          className="register-input"
          onChange={handleAddValues}
        />

        <button onClick={handleGravar} className="register-button">
          Cadastrar
        </button>
      </div>

      {listCard.map((val) => (
        <Card
          listCard={listCard}
          setListCard={setListCard}
          key={val.ID}
          id={val.ID}
          nome={val.nome}
          descricao={val.descricao}
        />
      ))}
    </div>
  );
}