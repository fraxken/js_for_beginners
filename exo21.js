// Ont récupère la function strictEqual du module "assert" de NodeJS.
const { strictEqual } = require("assert");

/**
 * @namespace EXO21
 * 
 * @desc
 * Comprendre le porté lexical des variables. Les variables sont restreintes à un "scope".
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let
 * - https://developer.mozilla.org/en-US/docs/Glossary/Scope
 * - http://exploringjs.com/impatient-js/ch_variables-assignment.html#variables-are-block-scoped
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block
 * 
 * @todo (Consignes de l'exercice)
 * 1. Compléter les tests (assertions) en remplaçant "null" par la bonne valeur !
 * 2. Votre programme doit s'exécuter sans erreur.
 */

// --> Compléter les assertions suivantes en remplaçant les valeurs "null" par la bonne réponse.
let a = 10
{
    let a = 20;
    let b = "hello";
    strictEqual(a, null);
    strictEqual(b, null);
}
strictEqual(a, null);
strictEqual(typeof b, null);

for (var i = 0; i<2; i++) {
}
strictEqual(i, null);
console.log("Bravo tu as réussi !");
