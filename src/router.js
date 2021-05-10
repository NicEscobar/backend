const { Router } = require('express');

const modulo_cadastro = require('./Controles_DAO/CRUD_cadastro');
const modulo_login = require('./Controles_DAO/CRUD_login');
const modulo_arquivo = require('./Controles_DAO/CRUD_Arquivos');

const routes = Router();

routes.post('/Cadastro', modulo_cadastro.SQL_CadastrarAluno);
routes.post('/Login', modulo_login.SQL_Login);

routes.post('/arquivoInserir', modulo_arquivo.SQL_InserirArquivos);
//routesl.delete('/arquivoDeletar', modulo_arquivo.SQL_DeletarArquivo);
routes.post('/arquivoDeletar', modulo_arquivo.SQL_DeletarArquivo);
routes.post('/arquivoBuscar', modulo_arquivo.SQL_BuscarArquivo);

module.exports = routes;