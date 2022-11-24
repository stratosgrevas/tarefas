/**
 * SISTEMA de CADASTRO DE TAREFAS
 * Arquivo de COMPONENTE da tela popup para edição e exclusão de registros
 * Autor: Allan Gleison Santos
 */

// imports e requisições de arquivos do projeto
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
    const [editValues, setEditValues] = useState({
        id: props.id,
        nome: props.title,
        descricao: props.descricao,
    });

    // atualiza as informações dos campos a cada 
    // caractere digitado nos campos
    const handleChangeValues = (values) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [values.target.id]: values.target.value,
        }));
    };

    // fecha o a tela popup
    const handleClose = () => {
        props.setOpen(false);
    };

    // constante para recuperar dados do form
    // e gerar a requisição para executar o update de informações no banco
    // e caso sucesso na gravação recarrega os registros da tela
    const handleEditar = () => {
        Axios.put("http://localhost:3001/editar", {
            id: editValues.id,
            nome: editValues.nome,
            descricao: editValues.descricao,
        }).then((res) => {
            if (res.status === 200) {
                Axios.get("http://localhost:3001/listar").then((response) => {
                    props.setListCard(response.data);
                });
            } else {
                alert("Erro ao editar o registro!");
            }
        });
        handleClose();
    };

    // constante gerar a requisição para executar o delete do registro no banco
    // e então recarrega os registros da tela
    const handleDeletar = () => {
        Axios.delete(`http://localhost:3001/deletar/${editValues.id}`).then(() => {
            props.setListCard(
                props.listCard.filter((value) => {
                    return value.id !== editValues.id;
                })
            );
        }).then(() => {
            Axios.get("http://localhost:3001/listar").then((response) => {
                props.setListCard(response.data);
            });
        });
        handleClose();
    };

    // retorno principal que exibirá o conteúdo do popup
    // form e botões para edição e exclusão
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Editar</DialogTitle>
                <DialogContent>
                    <TextField
                        disabled
                        margin="dense"
                        id="id"
                        label="id"
                        defaultValue={props.id}
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="nome"
                        label="Nome da tarefa"
                        defaultValue={props.title}
                        type="text"
                        onChange={handleChangeValues}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="descricao"
                        label="Descrição"
                        defaultValue={props.descricao}
                        type="text"
                        onChange={handleChangeValues}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button color="primary" onClick={() => handleDeletar()}>
                        Excluir
                    </Button>
                    <Button color="primary" onClick={() => handleEditar()}>
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}