const Pessoa = require('./models/Pessoa');

async function sincronizar(){
  Pessoa.sync();
}

sincronizar();