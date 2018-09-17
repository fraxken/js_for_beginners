// On récupère la function strictEqual du module "assert" de NodeJS.
const { strictEqual } = require("assert");

/**
 * @namespace EXO22
 * 
 * @desc
 * Expérimenter l'utilisation de la variable "this".
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/name#Notation_raccourcie_pour_les_m%C3%A9thodes
 * 
 * @todo (Consignes de l'exercice)
 * 1. Compléter la function "addOne" pour que l'assertion de fin soi vraie.
 * 2. Votre programme doit s'exécuter sans erreur.
 */

const objetIncrementable = {
    count: 0,
    addOne() {
        // --> Coder ici!
    }
}

// --> Ne toucher pas le code ci-dessous!
for (let i = 0; i< 10; i++) {
    objetIncrementable.addOne();
}
strictEqual(objetIncrementable.count, 10);
console.log("Bravo tu as réussi !");
