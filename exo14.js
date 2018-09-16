/**
 * @namespace EXO14
 * 
 * @desc
 * Filter les données d'un tableau d'Objets et additionner toutes les propriétés "value".
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
 * 
 * @todo (Consignes de l'exercice)
 * 1. Filtrer le tableau "payload" par la propriété "active" égal à true à l'aide de la méthode filter
 * 2. Additionner la propriété "value" du résultat précédemment filtré.
 * 3. Afficher la valeur total des "value" dans la console.
 */

const payload = [
    { active: true, value: 10 },
    { active: true, value: 20 },
    { active: false, value: 15 },
    { active: true, value: 5 },
    { active: false, value: null },
    { active: true, value: 6.5 }
];

// --> Continuer le code ci-dessous en suivant les consignes de l'exercice ci-dessus !