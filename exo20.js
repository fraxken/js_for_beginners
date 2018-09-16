// Ont récupère la function strictEqual du module "assert" de NodeJS.
const { strictEqual } = require("assert");

/**
 * @namespace EXO20
 * 
 * @desc
 * Bien comprendre les opérateurs de comparaison. (Revoir la notion de Primitives et Objects)
 * 
 * @tutorial (documentation)
 * - http://exploringjs.com/impatient-js/ch_values.html
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_de_comparaison
 * - https://dorey.github.io/JavaScript-Equality-Table/
 * 
 * @todo (Consignes de l'exercice)
 * 1. Compléter les tests (assertions) en remplaçant "null" par la bonne valeur !
 * 2. Votre programme doit s'exécuter sans erreur.
 */

// --> Compléter les assertions suivantes en remplaçant les valeurs "null" par la bonne réponse.
strictEqual(5 == "5", null);
strictEqual(5 === 5, null);
strictEqual(10 > 20, null);
strictEqual(10 >= 10, null);
strictEqual({} == {}, null);
console.log("Bravo tu as réussi !");
