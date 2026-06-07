const inputUtente = prompt("Inserisci una parola o una frase per verificare se è palindroma:");
if (inputUtente === null || inputUtente.trim() === "") {
  console.error("Operazione interrotta: non hai inserito alcun testo.");
} else {
  const risultato = verificaPalindroma(inputUtente);
  
  if (risultato) {
    console.log(`Vero: "${inputUtente}" è un palindromo!`);
  } else {
    console.log(`Falso: "${inputUtente}" non è un palindromo.`);
  }
}
function verificaPalindroma(testo) {
  // Verifichiamo che il dato in ingresso sia effettivamente una stringa
  if (typeof testo !== 'string') return false;
  const testoPulito = testo.replace(/\W/g, "").toLowerCase();
  if (testoPulito === "") return false;
  const testoInvertito = testoPulito.split('').reverse().join('');
  return testoPulito === testoInvertito;
}