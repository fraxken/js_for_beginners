const { strictEqual } = require("assert");

/*
 * EXO13:
 * 
 * Introduction:
 * Apprendre à créer un Objet avec une Fonction et l'opérateur "new"
 * 
 * Documentation pour bien débuter/comprendre l'exercice:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 * 
 * Objectif de l'exercice (Consignes à suivre):
 * - Compléter la fonction "Utilisateur" pour créer un Objet comforme aux tests.
 * - Un utilisateur peut avoir un "nom" et un "age".
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