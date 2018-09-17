/**
 * @namespace EXO05
 * 
 * @desc
 * Afficher tous les prénoms d'un tableau un à un en utilisant une boucle for comme précédemment vu dans l'exercice 04.
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
 * 
 * @todo (Consignes de l'exercice)
 * 1. Création d'une boucle for pour itérer sur toutes les valeurs du tableau "prenoms".
 * 2. Afficher dans le terminal le prénom de l'itération courante.
 * 
 * @see
 * Il est possible de réaliser cet exercice avec une itération "for..of". Essayez-donc pour vous entrainer :)
 */

// Un tableau contenant plusieurs chaines de caractères (string)
const prenoms = ["Thomas", "Alexandre", "Irvin", "Jonathan"];
console.log(`Taille du tableau prenoms: ${prenoms.length}`);

// --> Affichez les prénoms du tableau "prenoms" un à un en utilisant une boucle ci-dessous