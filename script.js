                //Partie 1

// Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
var tab1 = [];
var tab2 = [];

for (let i = 0; i < 5; i++ ) {
    tab1.push(prompt("velleilez saisir un element pour tab1"));
}
for (let i = 0; i < 5; i++) {
    tab2.push(prompt("velleilez saisir un element pour tab2"));
}

// Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
var tab3 = tab1.filter(function(fa) {
    return !tab2.includes(fa);
})
// Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2
var tab4 = tab1.filter(function(fa) {
    return tab2.includes(fa);
})
// afficher les resultats
document.getElementById("tab1").innerHTML = `Les elements de tab1 : [${tab1}]`
document.getElementById("tab2").innerHTML = `Les elements de tab2 : [${tab2}]`
document.getElementById("tab3").innerHTML = `Les elements de tab3 : [${tab3}]`
document.getElementById("tab4").innerHTML = `Les elements de tab4 : [${tab4}]` 

               //Partie 2
// Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier
var tableau = [5, 3, 87, 1, -4, -99, 0];
tableau.sort();

document.getElementById('tri').innerHTML = `Voici le tableau Javascript [ ${tableau} ].`;
document.getElementById('max').innerHTML = `Voici le nombre maximal du tableau ( ${Math.max(...tableau)} ).`; 
document.getElementById('min').innerHTML = `Voici le nombre maximal du tableau ( ${Math.min(...tableau)} ).`;
