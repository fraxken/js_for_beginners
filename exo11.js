/*
 * EXO11:
 * 
 * Introduction:
 * Faire en sorte que vôtre code lance (throw) une alerte si le type d'une variable ne correspond pas à l'attente de la consigne.
 * 
 * Documentation pour bien débuter/comprendre l'exercice:
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypeError
 * 
 * Objectif de l'exercice (Consignes à suivre):
 * 1. Si le type de la variable "randomVar" est un string, alors déclencher une erreur qui dira "randomVar doit être de type number!"
 * 2. Vôtre code doit s'arrêter avec une erreur quand la valeur de randomVar est "hello".
 */

const randomVar = Math.random() > 0.5 ? "hello": 5;
console.log(typeof randomVar);