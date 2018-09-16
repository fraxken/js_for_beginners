/*
 * EXO08:
 * 
 * Introduction:
 * Afficher un message en fonction de la valeur d'une variable!
 * 
 * Documentation pour bien débuter/comprendre l'exercice:
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean
 * 
 * Objectif de l'exercice (Consignes à suivre):
 * A. Afficher le message "wahouuuu!" si la valeur de "valeurRandom" est vraie (true).
 * B. Afficher le message "mer il est fou!" si la valeur de "valeurRandom" est fausse (false).
 * 
 * Objectif bonus:
 * Utiliser un ternaire plutôt qu'une condition if/else
 * - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_conditionnel
 */

// --> valeurRandom sera aléatoirement "vrai" ou "faux"
const valeurRandom = Math.random() > 0.5;

// --> Code à partir d'ici!