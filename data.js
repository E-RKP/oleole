let numerino = document.getElementById('numerino')
let numerone = document.getElementById('numerone')
let diminuire = document.getElementById('sx')
let aggiungere = document.getElementById('dx')
let numpic = 0
let numbig = 0

function agg (){
  numbig++;
  numpic++;

  return{
    numbig,
    numpic
  };
}

aggiungere.addEventListener('click', ()=>{
  agg();
  numerino.textContent = numpic
  numerone.textContent = numbig
})

diminuire.onclick = function () {
  numbig--;
  numpic++;
  if (numbig <0){
    numbig = 0
  }

  numerino.textContent = numpic
  numerone.textContent = numbig;
}

let azzera = document.getElementById('azzera')

function azera (){
  numbig = 0
  numpic = 0
}

azzera.addEventListener('click',()=>{
  azera();
  numerino.textContent = numpic
  numerone.textContent = numbig
})

let lista = [

  
  {
    name: 'Paolo',
    età: 22,
    nickname: 'Gigi',
    pa: '2u2943u9'
  },

  {
    name: 'Mr mario',
    età: 28,
    nickname: 'loki',
    pa: 'vevev'
  },

  {
    name: 'maria',
    età: 19,
    nickname: 'Gig',
    pa: 'ncwi/8j'
  },

  {
    name: 'lucia',
    età: 22,
    nickname: 'wolf',
    pa: '0987h'
  },

  {
    name: 'Davide',
    età: 33,
    nickname: 'dedo',
    pa: '2u2943umcwo,,9'
  },


  signIn = function(okk){
    for (i=0; i<okk.length;i++){
      console.log(okk[i].name)
    }
  }
]

signIn(lista);

