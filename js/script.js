$(document).ready(
  function() {
    var numeri = 5;
    var arrayNumeri = [];
    var arrayNumeriUtente = [];
    var punteggio = [];

    //generazione 5 numeri casuali
    alert("Ricorda questi numeri: " + (arrayNumeri = generazioneNumeriCasuali(numeri)));

    //timer di 30 secondi, poi alert richiesta numeri
    var arrayNumeriUtente = setTimeout(
      function(){
        alert("Dimmi in sequenza i 5 numeri precedenti");
        arrayNumeriUtente = richiestaNumeri(numeri);
        punteggio = comparativaArray(arrayNumeri,arrayNumeriUtente);
        alert("Hai indovinato " + punteggio[0] + " numeri " + "(" + punteggio[1] + ")")
      }, 30000);
  }
);

//FUNZIONE generazione numeri casuali
function generazioneNumeriCasuali(numeri) {
  var arrayNumeri = [];
  var i = 0;

  while (i != numeri){
    var arrayNumeriTemp = Math.ceil(Math.random() * 100);
    if (!arrayNumeri.includes(arrayNumeriTemp)) {
      arrayNumeri[i] = arrayNumeriTemp;
      i++;
    }
  }
  return arrayNumeri;
};

//FUNZIONE richiesta numeri
function richiestaNumeri(numeri) {
  var arrayNumeriUtente = [];
  var i = 0;

  while (i != numeri){
    var arrayNumeriUtenteTemp = parseInt(prompt("Dimmi il " + (i + 1) + "° numero"));
    if (!arrayNumeriUtente.includes(arrayNumeriUtenteTemp)) {
      arrayNumeriUtente[i] = arrayNumeriUtenteTemp;
      i++;
    }
  }
  return arrayNumeriUtente;
}

//FUNZIONE comparativa array
function comparativaArray(array1,array2) {
  var qualiIndovinati= [];
  var quantiIndovinati = 0;

  for (var i = 0; i < array1.length; i++){
    if (array1.includes(array2[i])){
      quantiIndovinati++;
      qualiIndovinati[i] = array2[i];
    }
  }
  return [quantiIndovinati, qualiIndovinati]
};
