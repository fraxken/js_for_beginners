/*
 * EXO14:
 * 
 * Introduction:
 * Filter les données d'un tableau d'Objets et additionner les valeurs.
 * 
 * Documentation pour bien débuter/comprendre l'exercice:
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
 * 
 * Objectif de l'exercice (Consignes à suivre):
 * 1. Filtrer le tableau "payload" par la propriété "active" true à l'aide d'Array.filter
 * 2. Additionner la propriété "value" du résultat précédemment filtré.
 * 3. Afficher la valeur total dans la console.
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