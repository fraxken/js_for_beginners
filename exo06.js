/**
 * @namespace EXO06
 * 
 * @desc
 * Multiplier toutes les valeurs d'un tableau par 2 et filtrer pour ne récupérer que les valeurs supérieures à vingt. (valeur > 20);
 * 
 * Il existe plusieurs façons d'aboutir au résultat attendu (Néanmoins nous vous conseillons d'utiliser les méthodes map et filter).
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
 * 
 * Les méthodes "map" et "filter" prenne une fonction en argument. Les documentations utilisent souvent une annotation comme ci-dessous:
 * (x) => x.length
 * 
 * Ce n'est rien de plus qu'une fonction qui peut être retraduit en:
 * function(x) {
 *     return x.length;
 * }
 * 
 * @todo (Consignes de l'exercice)
 * 1. Multiplier toutes les valeurs du tableau "valeurs" par deux.
 * 2. Filtrer le tableau pour ne récupérer que les valeurs supérieur à vingt.
 * 3. Afficher dans le terminal le résultat!
 * 
 * @see
 * N'hésitez pas à refaire l'exercice avec une boucle "for" classique pour vous entrainer.
 * 
 * @example
 * const valeurs = [10, 20].map(function diviserParDeux(entier) {
 *     return entier / 2;
 * });
 * console.log(valeurs); // [5, 10];
 */

// Un tableau contenant des entiers (nombre).
const valeurs = [2, 5, 10, 15, 20, 40];

// --> Code ici en suivant les consignes de l'exercice ci-dessus !