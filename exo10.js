const { strictEqual } = require("assert");

/*
 * EXO10:
 * 
 * Introduction:
 * Découverte des functions.
 * 
 * Documentation pour bien débuter/comprendre l'exercice:
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/function
 * 
 * Objectif de l'exercice (Consignes à suivre):
 * 1. Compléter les tests (assertions).
 * 2. Vôtre programme doit s'exécuter sans erreurs.
 */

function add(a, b) {
    return a + b;
}

function functionByzarre(a, b) {
    return (a + 5) - (b * 2);
}

// --> Compléter les assertions suivante.
// --> Remplacer /* ? */ par la bonne réponse.
strictEqual(add(10, 10), /* ? */);
strictEqual(add(5, -5), /* ? */);
strictEqual(add(-10, -5), /* ? */);
strictEqual(functionByzarre(10, 5), /* ? */);