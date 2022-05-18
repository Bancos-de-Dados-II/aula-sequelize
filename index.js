const express = require('express');

const app = express();
app.use(express.json());

const pessoaController = require('./controllers/PessoaController');

app.get('/pessoas/:id', pessoaController.getPessoa);

app.post('/pessoas', (req, res) => {
  res.send(req.body);
});

app.delete('/pessoas/:id', (req, res) => {
  res.send(req.params.id);
});

app.put('/pessoas', (req, res) => {
  res.send('hello world')
});

app.listen(3000);