// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :linguaccia: (modificato)\

//funzione per generare numeri random
function getrandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione riempio l'arrey con 16 numeri random
function pcBombs(boxBombs, bomb) {
  var pcNum = boxBombs;
  var num = bomb;

  var pcNum = []
  for (var i = 0; i < 16; i++) {

    var num = getRandom(1, 100);
    if (!pcNum.includes(num)) {

      pcNum.push(num);

    } else {
      i--;
    }
  }
  
  console.log(pcNum);
  return pcNum;
  
}

function userPlay(boxUser, numUser) {

  var pcNum = pcBombs();
  
  var boxUser = [];
  for (var i = 0; i < 5; i++) {
    var numUser = parseInt(prompt('prova con un numero'));

    if (pcNum.includes(numUser)) {
      alert('vai a fare 5 minuti di vergogna');
      break;

    } else if (!boxUser.includes(numUser)) {
      alert('stai andando bene');
      boxUser.push(numUser);

    } else if (boxUser.includes(numUser)) {
      alert('vuoi rubare a un ladro ?');
      i--;
    }




  }

  
  

};
var winner = document.getElementById('winner');

var play = document.getElementById('start-app');
play.addEventListener('click', function () {

  pcBombs();
  userPlay();

});