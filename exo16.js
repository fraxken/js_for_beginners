/**
 * @namespace EXO16
 * 
 * @desc
 * Imaginez que vous codiez un Bot ou un CLI (command line interface). L'utilisateur vous passe une commande et vous devez lire et comprendre cet
 * commande pour exécuter une action.
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/charAt
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/slice
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
 * 
 * @todo (Consignes de l'exercice)
 * 1. Une commande doit forcément commencer par un point d'exclamation (dans le cas contraire déclencher une Erreur).
 * 2. Récupérer la commande et son argument sous forme d'un Objet, par exemple:
 * 
 * La commande suivante:
 * > !cmd test
 * 
 * Donnera le résultat (objet) suivant:
 * {
 *     commande: "cmd",
 *     argument: "test"
 * }
 */

// --> La fameuse commande
const commandeUtilisateur = "!say hello";

// --> Continuer le code ci-dessous en suivant les consignes de l'exercice ci-dessus !