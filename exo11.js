/**
 * @namespace EXO11
 * 
 * @desc
 * Faire en sorte que votre code lance (throw) une alerte si le type d'une variable ne correspond pas à l'attente de la consigne.
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypeError
 * 
 * @todo (Consignes de l'exercice)
 * 1. Si le type de la variable "randomVar" est un string, alors déclencher une erreur qui dira "randomVar doit être de type number!"
 * 2. Vôtre code doit s'arrêter avec une erreur quand la valeur de randomVar est "hello".
 * 
 * @example
 * throw new Error("Hello world!");
 */

 // --> Création d'une variable aléatoire!
const randomVar = Math.random() > 0.5 ? "hello": 5;
console.log(typeof randomVar);

// --> Code ici en suivant les consignes de l'exercice ci-dessus !