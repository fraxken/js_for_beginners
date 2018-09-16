const { strictEqual } = require("assert");

/*
 * EXO04:
 * 
 * Introduction:
 * Modifier une valeur à chaque itération d'une boucle
 * 
 * Documentation pour bien débuter/comprendre l'exercice:
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 * 
 * Objectif de l'exercice (Consignes à suivre):
 * 1. Ne modifie aucun code en dehors de la ligne 19 (Tu peu donc travailler dans la boucle for uniquement).
 * 2. A chaque itération de la boucle, multiplie la variable "valeurInitiale" par deux.
 */

let valeurInitiale = 1;
for (let i = 0; i<10; i++) {
    // --> Code ici!
}
console.log(valeurInitiale);
strictEqual(valeurInitiale, 1024);

