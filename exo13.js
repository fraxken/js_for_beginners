// Ont récupère la function strictEqual du module "assert" de NodeJS.
const { strictEqual } = require("assert");

/**
 * @namespace EXO13
 * 
 * @desc
 * Apprendre à créer un objet (prototype) avec une fonction et l'opérateur "new".
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 * 
 * @todo (Consignes de l'exercice)
 * 1. Compléter la fonction "Utilisateur" pour créer un Objet comforme aux tests.
 * 1bis. Un utilisateur doit avoir un "nom" et un "age".
 * 2. Votre programme doit s'exécuter sans erreur.
 * 
 * @see
 * Il est courant en JavaScript moderne de passer par une "Classe" pour répondre à ce même besoin:
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
 * 
 * Essayez de remplacer la function "Utilisateur" par une Classe Utilisateur !
 */

// --> Complète la fonction
function Utilisateur() {
    // --> CODE ICI
}

// --> Les tests suivants doivent fonctionner:
const thomas = new Utilisateur("thomas", 23);
const alex = new Utilisateur("alex", 24);

strictEqual(thomas.nom, "thomas");
strictEqual(thomas.age, 23);
strictEqual(alex.nom, "alex");
strictEqual(alex.age, 24);