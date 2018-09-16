// Ont récupère la function strictEqual du module "assert" de NodeJS.
const { strictEqual } = require("assert");

/**
 * @namespace EXO10
 * 
 * @desc
 * Découverte des functions.
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/function
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/return
 * 
 * @todo (Consignes de l'exercice)
 * 1. Compléter les tests (assertions) en remplaçant "null" par la bonne valeur !
 * 2. Votre programme doit s'exécuter sans erreur.
 */

// Une fonction simple qui additionne a + b et retourne le résultat.
function add(a, b) {
    return a + b;
}

// Une fonction un peu plus bizarre qui fait un calcul plus complexe (à vous de comprendre le résultat selon les paramètres d'entrée).
function functionByzarre(a, b) {
    return (a + 5) - (b * 2);
}

// --> Compléter les assertions suivantes en remplaçant les valeurs "null" par la bonne réponse.
strictEqual(add(10, 10), null);
strictEqual(add(5, -5), null);
strictEqual(add(-10, -5), null);
strictEqual(functionByzarre(10, 5), null);
