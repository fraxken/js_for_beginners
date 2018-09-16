const { strictEqual } = require("assert");

/*
 * EXO12:
 * 
 * Introduction:
 * Comprendre qu'il n'existe pas qu'une seul façon d'écrire une (des) fonction(s). Nous allons découvrir les fonctions fléchées ! 
 * 
 * Documentation pour bien débuter/comprendre l'exercice:
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
 * 
 * Objectif de l'exercice (Consignes à suivre):
 * 1. ré-écrivez une fonction fléchée pour dire bonjour (en vous basant sur le code de la function direBonjour). Appelez cet function "direBonjour2".
 * 
 * Exemple simple:
 * const add = (a, b) => a + b;
 * const sub = (a, b) => {
 *     return a - b;
 * }
 * console.log(add(5, 10)); // 15
 * console.log(sub(10, 5)); // 5
 */

function direBonjour(nom) {
    return `bonjour ${nom}`;
}
strictEqual(direBonjour("thomas"), "bonjour thomas");

// --> Code la fonction fléchée direBonjour2
let direBonjour2;

// --> Les tests suivants doivent fonctionner:
strictEqual(direBonjour2("alex"), "bonjour alex");
strictEqual(direBonjour2("irvin"), "bonjour irvin");