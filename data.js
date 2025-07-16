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