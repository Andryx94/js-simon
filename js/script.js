$(document).ready(
  function() {
    var numeri = 5;
    var arrayNumeri = [];
    var arrayNumeriUtente = [];
    var punteggio = [];

    //generazione 5 numeri casuali
    alert("Ricorda questi numeri: " + (arrayNumeri = generazioneNumeriCasuali(numeri)) + " tra 30 secondi dovrai reimetterli");

    //timer di 30 secondi, poi alert richiesta numeri
    var arrayNumeriUtente = setTimeout(
      function(){
        alert("Scrivi in sequenza i 5 numeri precedenti");
        arrayNumeriUtente = richiestaNumeri(numeri);
        punteggio = comparativaArray(arrayNumeri,arrayNumeriUtente);
        alert("Hai indovinato " + punteggio[0] + " numeri " + "(" + punteggio[1] + ")")
      }, 30000);
  }
);

//FUNZIONE generazione numeri casuali
function generazioneNumeriCasuali(numeri) {
  var arrayNumeri = [];

  while (arrayNumeri.length < numeri){
    var arrayNumeriTemp = Math.ceil(Math.random() * 100);
    if (!arrayNumeri.includes(arrayNumeriTemp)) {
      arrayNumeri.push(arrayNumeriTemp);
    }
  }
  return arrayNumeri;
};

//FUNZIONE richiesta numeri
function richiestaNumeri(numeri) {
  var arrayNumeriUtente = [];

  while (arrayNumeriUtente.length < numeri){
    var arrayNumeriUtenteTemp = (parseInt(prompt("Scrivi il " + (arrayNumeriUtente.length + 1) + "° numero")));
    if (!arrayNumeriUtente.includes(arrayNumeriUtenteTemp)) {
      arrayNumeriUtente.push(arrayNumeriUtenteTemp);
    }
  }
  return arrayNumeriUtente;
}

//FUNZIONE comparativa array
function comparativaArray(array1,array2) {
  var qualiIndovinati= [];
  var quantiIndovinati = 0;

  for (var i = 0; i < array2.length; i++){
    if (array1.includes(array2[i])){
      quantiIndovinati++;
      qualiIndovinati.push(array2[i]);
    }
  }
  return [quantiIndovinati, qualiIndovinati]
};
