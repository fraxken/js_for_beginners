// On récupère la function strictEqual du module "assert" de NodeJS.
const { strictEqual } = require("assert");

/**
 * @namespace EXO04
 * 
 * @desc
 * Modifier la valeur d'une variable à chaque itération d'une boucle.
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 * - http://exploringjs.com/impatient-js/ch_control-flow.html
 * 
 * @todo (Consignes de l'exercice)
 * 1. Ne modifiez aucun code en dehors de la ligne 19 (Vous pouvez donc travailler dans la boucle for uniquement).
 * 2. À chaque itération de la boucle, multiplie la valeur de la variable "valeur Initiale" par deux.
 * 3. Le programme ne doit pas déclencher d'erreur à l'exécution.
 * 
 * @example
 * let a = 1;
 * console.log(a * 2); // 2
 * 
 * @see
 * Il existe plusieurs types de boucle (While, do While, for..of etc..). Prenez donc le temps de faire un tour sur les documentations ci-dessous :
 * 
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/while
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/do...while
 */

let valeurInitiale = 1;
for (let i = 0; i<10; i++) {
    // --> Code ici en suivant les consignes de l'exercice ci-dessus !
}

/**
 * Le code ci-dessous permet d'afficher le résultat, puis de vérifier que le résultat est bien égal à la valeur 1024.
 * (NE PAS MODIFIER LE CODE CI-DESSUS)
 */
console.log(`valeurInitial est égal à => ${valeurInitiale}`);
strictEqual(valeurInitiale, 1024);
console.log("Bravo tu as réussi !");

