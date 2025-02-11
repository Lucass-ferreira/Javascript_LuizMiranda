function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(typeof msg !== 'string') { 
            reject('ERROR, promise invalida');
            return;
        }
        resolve(msg);
      }, tempo);
    });
  }

  // promise.all  promise.race  promise.resolve  promise.reject

  const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // esperaAi(1000, rand(1, 5)),
    // 'Outro valor'
  ];


// all
//   Promise.all(promises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     });


// race
// Promise.race(promises)
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro)
//     })

//resolve e reject
function baixarPagina(){
    const emCache = true
    if(emCache){
        return Promise.resolve('Pagina em Cache') 
        // return Promise.reject('Pagina em Cache')
    } else {
        return esperaAi('Pagina Baixada', 3000)
    }
}

baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERROR', e))