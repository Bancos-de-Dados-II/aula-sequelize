const Pessoa = require('./models/Pessoa');

(async () => {
  // const pessoa = Pessoa.build({nome:"João da Silva"});
  // await pessoa.save()
  //   .then(console.log('Salvo com suceso'))
  //   .catch(error =>{
  //     console.log(error);
  //   });

  Pessoa.findAll().then(p=>{
    console.log(p);
  });

})();