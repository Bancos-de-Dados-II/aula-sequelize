const express = require('express');

const app = express();
app.use(express.json());

const pessoaController = require('./controllers/PessoaController');

app.get('/pessoas/:id', pessoaController.getPessoa);

app.post('/pessoas', pessoaController.addPessoa);

app.delete('/pessoas/:id', pessoaController.deletePessoa);

app.put('/pessoas', pessoaController.atualizarPessoa);

app.listen(3000);