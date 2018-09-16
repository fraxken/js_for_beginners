// Ont récupère la function strictEqual du module "assert" de NodeJS.
const { strictEqual } = require("assert");

/** 
 * @namespace EXO09
 * 
 * @desc
 * Connaître le type des valeurs primitives JavaScript et être en capacité d'identifier l'instance d'un Objet.
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_typeof
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/instanceof
 * - http://exploringjs.com/impatient-js/ch_values.html#whats-a-type
 * 
 * @todo (Consignes de l'exercice)
 * 1. Compléter les tests (assertions) en remplaçant "null" par la bonne valeur !
 * 2. Votre programme doit s'exécuter sans erreur.
 */

// --> Compléter les assertions suivantes en remplaçant les valeurs "null" par la bonne réponse.
strictEqual(typeof "hello", null);
strictEqual(typeof 10, null);
strictEqual(typeof true, null);
strictEqual(typeof undefined, null);
strictEqual(typeof null, null);

// Etape 2 (avec instanceof)
strictEqual({} instanceof Object, null);
strictEqual([] instanceof Array, null);
console.log("Bravo tu as réussi !");
