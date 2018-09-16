/**
 * @namespace EXO19
 * 
 * @desc
 * Utiliser une structure "switch" pour détecter la couleur courante et l'afficher dans la console.
 * 
 * NOTE: Cet exercice à pour simple objectif de démontrer l'existence des switchs (il ne faut donc pas tenir rigueur de l'algorithme de l'exercice lui même).
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/switch
 * 
 * @todo (Consignes de l'exercice)
 * 1. Faire un switch qui affichera le message de "messageParCouleur" lié à la couleur
 * 
 * @see
 * Il est possible d'effectuer la même chose avec un Objet et des functions:
 * - https://toddmotto.com/deprecating-the-switch-statement-for-object-literals/
 */

// --> Nous récupérons une couleur au hasard (ne pas modifier le code ci-dessous).
const couleurs = ["rouge", "vert", "rose", "bleue", "jaune"];
const messageParCouleur = {
    "rouge": "une pomme rouge!",
    "vert": "un asticot vert!",
    "rose": "i'm a penguin!",
    "bleue": "mer il est fou!",
    "jaune": "??? NOOOOO!"
};
const couleurAuHasard = couleurs[Math.floor(Math.random() * couleurs.length)];

// --> Continuer le code ci-dessous en suivant les consignes de l'exercice ci-dessus !
switch (couleurAuHasard) {

}