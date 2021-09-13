//console.log('Pagina funzionante!');

// //localStorage.setItem() setta chiave valore 
// localStorage.setItem('nome', 'Elena');
// //getItem() va a leggere il valore della chiave nome
// const nome = localStorage.getItem('nome');
// console.log(nome);

let listaUtenti = [];

let Utente = {
    'nome' : 'Elena',
    'cognome' : 'Dias'
}
let Utente1 = {
    'nome' : 'Michele',
    'cognome' : 'Rossi'
}
let Utente2 = {
    'nome' : 'Paola',
    'cognome' : 'Bianchi'
}
let Utente3 = {
    'nome' : 'Marco',
    'cognome' : 'Verdi'
}
let Utente4 = {
    'nome' : 'Lucio',
    'cognome' : 'Neri'
}

listaUtenti.push(Utente.nome);
listaUtenti.push(Utente1.nome);
listaUtenti.push(Utente2.nome);
listaUtenti.push(Utente3.nome);
listaUtenti.push(Utente4.nome);
console.log(listaUtenti);

//localStorage.setItem('user', Utente); ERRORE! dentro le tonde posso usare solo stringhe, non posso stampare direttamente oggetti o array
//bisogna convertire l'oggetto in stringa con il metodo JSON.stringify:
localStorage.setItem('user', JSON.stringify(listaUtenti));

let usersOk = localStorage.getItem('user');
//però poi se volessi accedere al nome o al cognome dell'oggetto non posso farlo con dot notation, perciò devo riconvertire la stringa in oggetto, con metodo JSON.parse()
usersOk = JSON.parse(usersOk) //converto stringa in oggetto
console.log(usersOk);
console.log(JSON.stringify(usersOk));
//per avere accesso ai dati di un array di oggetti come listaUtent, bisogno accedervi prima tramite indice e poi .nome o .cognome
// console.log(usersOk[0].nome);
// console.log(usersOk[3].cognome);

/* ************************************

setItem('....', ' ... ') accetta come parametri - chiave valore - solo STRINGHE

mentre con getItem() usato in lettura, usiamo JSON.parse() per avere l'oggetto originario e vederlo in console trattato come tale (riga 37) - nella console del browser riconosciamo i colori e la freccina che cliccata mostra tutto ciò che contengono le graffe - e avere accesso alle proprietà tramite dot notation ( righe 49 e 50). Si può anche aver accesso alle informazioni tramite un ciclo for each che va iterare tutti gli elementi anzichè solo alcuni esempio:

************************************ */
usersOk.forEach( (user) => {
    // console.log(user);
    console.log(user);
});

/* Se volessi scoprire se nel mio array c'è anche Giorgio,
abbiamo a disposizine indexOf ritorna la posizione della stringa, se viene ritrovata nell'array  se esce elemento 0 o maggiore è presente altrimenti -1 negativo significa che non c'è */

let test = usersOk.indexOf('Giorgio'); 
console.log(test); // risultato in console -1, quindi 'Giorgio' non c'è nel mio array
let testDue = usersOk.indexOf('Marco');
console.log(testDue); // risultato 3, nell'array Marco ha indice 3 
//ATTENZIONE: JS è case sensitive se nella stringa scrivo Marco o marco per il linguaggio sono due cose diverse