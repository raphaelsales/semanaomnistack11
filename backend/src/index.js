const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Get: BUSCAR/listar UMA INFORMAÇÃO DO BACK ENDnp
 * Post: CRIAR UMA INFORMAÇÃO NO BACK END
 * PUT: ALTERAR UMA INFORMAÇÃO NO BACK END
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACK END
 */
/**
 * Tipos de parametro:
 * Query: PARAMETROS NOMEADOS ENVIADOS NA ROTA APOS O SIMBOLO DE "?" (FILTROS,PAGINAÇÃO)
 * Route Params: INDETIFICAR RECURSOS
 * Request body: CORPO DA REQUISIÇÃO UTILIZADO PARA CRIAR OU ALTERAR RECURSOS 
 */

/**
 * Bancos de dados SQL: MySQL, SQLite,  PostgreSQL, Oracle, Microsoft SQL server
 * NoSQL: MongoDB, CouchDB etc etc etc
 * DRIVER: Select * From users
 * Query Builder: table('users).slect('*').where()
 */

   