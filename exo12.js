// On récupère la function strictEqual du module "assert" de NodeJS.
const { strictEqual } = require("assert");

/**
 * @namespace EXO12
 * 
 * @desc
 * Comprendre qu'il n'existe pas qu'une seul façon d'écrire une (des) fonction(s). Nous allons découvrir les fonctions fléchées ! 
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
 * - http://exploringjs.com/impatient-js/ch_callables.html#arrow-functions
 * 
 * @todo (Consignes de l'exercice)
 * 1. Réécrivez une fonction fléchée pour dire bonjour (en vous basant sur le code de la fonction direBonjour). Appelez cette fonction "direBonjour2".
 * 2. Votre programme doit s'exécuter sans erreur.
 * 
 * @example
 * const add = (a, b) => a + b;
 * const sub = (a, b) => {
 *     return a - b;
 * }
 * console.log(add(5, 10)); // 15
 * console.log(sub(10, 5)); // 5
 */

// --> Function "normal" pour dire bonjour!
function direBonjour(nom) {
    return `bonjour ${nom}`;
}
strictEqual(direBonjour("thomas"), "bonjour thomas");

// --> Code la fonction fléchée direBonjour2 ici (comme indiquez dans la consigne!)
let direBonjour2;

// --> Les tests suivants doivent fonctionner:
strictEqual(direBonjour2("alex"), "bonjour alex");
strictEqual(direBonjour2("irvin"), "bonjour irvin");
console.log("Bravo tu as réussi !");
