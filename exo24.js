// On récupère la function strictEqual du module "assert" de NodeJS.
const { strictEqual } = require("assert");

/**
 * @namespace EXO24
 * 
 * @desc
 * Développer une fonction capable de répondre si un nombre est positif ou négatif.
 * 
 * La fonction retournera :
 * - "N" pour négatif.
 * - "P" pour positif.
 * - null pour neutre (zero) ou une valeur NaN (Not a Number).
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/isNaN
 * 
 * @todo (Consignes de l'exercice)
 * 1. Compléter la fonction "isPositive" pour qu'elle retourne "N" ou "P" ou null.
 * 2. Votre programme doit s'exécuter sans erreur.
 */

// --> Compléter la fonction ci-dessous
function isPositive() {

}

// --> Les tests suivants doivent fonctionner:
strictEqual(isPositive(-5), "N");
strictEqual(isPositive(5), "P");
strictEqual(isPositive(20), "P");
strictEqual(isPositive(0), null);
strictEqual(isPositive("hello"), null);
console.log("Bravo tu as réussi !");
