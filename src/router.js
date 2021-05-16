const { Router } = require('express');

const modulo_cadastro = require('./Controles_DAO/CRUD_cadastro');
const modulo_login = require('./Controles_DAO/CRUD_login');
const modulo_arquivo = require('./Controles_DAO/CRUD_Arquivos');

const routes = Router();

routes.post('/Cadastro', modulo_cadastro.SQL_CadastrarAluno);
routes.get('/Login/:email?', modulo_login.SQL_Login);

routes.post('/arquivo', modulo_arquivo.SQL_InserirArquivos);
routes.delete('/arquivo/:IdArquivo?', modulo_arquivo.SQL_DeletarArquivo);
routes. get('/arquivo/:IdArquivo?', modulo_arquivo.SQL_BuscarArquivo);
routes. get('/arquivo', modulo_arquivo.SQL_BuscarTodosArquivos);
routes. get('/arquivoCategoria', modulo_arquivo.SQL_BuscarCategoria);

module.exports = routes;