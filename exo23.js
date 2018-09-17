// Ont récupère la function strictEqual du module "assert" de NodeJS.
const { strictEqual } = require("assert");

/**
 * @namespace EXO23
 * 
 * @desc
 * Apprendre à utiliser les Objects Date.
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 * 
 * @todo (Consignes de l'exercice)
 * 1. Afficher dans le terminal l'heure courante d'éxécution (now).
 * 2. Afficher dans le terminal l'heure courante d'exécution moins 1an, 2mois et 10jours.
 * 3. Trier (sort) le tableau "dates" de la plus vieille à la plus récente.
 */

// --> Continuez le code ci-dessous en suivant les consignes de l'exercice ci-dessus !
let dateNow;

let dates = [
    new Date("1995-12-05T03:11:00"),
    new Date("1994-12-12T03:12:00"),
    new Date("2004-10-17T03:22:00"),
    new Date("1992-06-22T03:24:00"),
    new Date("2017-12-17T03:14:00")
]