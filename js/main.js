function calcolaPrezzo() {
  // Prendo i valori dall'html
  const nome = document.getElementById("nomeCognome").value;
  const chilometri = parseFloat(document.getElementById("kmPercorsi").value);
  const eta = parseInt(document.getElementById("eta").value);

  // Controllo che i campi siano validi
  if (isNaN(chilometri) || chilometri <= 0 || eta === 0) {
    document.getElementById("risultato").innerHTML =
      "Per favore, inserisci tutti i campi correttamente.";
    return;
  }

  // Definisci il prezzo per chilometro
  const prezzoPerKm = 0.21;

  // Calcola il prezzo base
  let prezzoBase = chilometri * prezzoPerKm;

  // Applica gli sconti in base all'età
  let prezzoFinale;
  if (eta === 1) {
    // Sconto del 20% per i minorenni
    prezzoFinale = prezzoBase * 0.8;
  } else if (eta === 3) {
    // Sconto del 40% per gli over 65
    prezzoFinale = prezzoBase * 0.6;
  } else {
    // Nessuno sconto per i maggiorenni
    prezzoFinale = prezzoBase;
  }

  // Mostro il risultato
  document.getElementById("risultato").innerHTML =
    "Ciao " +
    nome +
    ", il prezzo del tuo biglietto è: " +
    prezzoFinale.toFixed(2) +
    " €";
}

function resetForm() {
  // Resetto i campi del form
  document.getElementById("nomeCognome").value = "";
  document.getElementById("kmPercorsi").value = "";
  document.getElementById("eta").value = "0";
  document.getElementById("risultato").innerHTML = "";
}
