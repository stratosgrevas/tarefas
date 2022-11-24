/**
 * SISTEMA de CADASTRO DE TAREFAS
 * Arquivo de COMPONENTE para exibição dos cards
 * Autor: Allan Gleison Santos
 */

// imports e requisições de arquivos do projeto
import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  // retorno principal que exibirá o conteúdo do card
  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.nome}
        descricao={props.descricao}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.nome}</h1>
        <p className="card-id">{props.id}</p>
        <p className="card-desc">{props.descricao}</p>
      </div>
    </>
  );
}