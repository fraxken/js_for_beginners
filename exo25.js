/**
 * @namespace EXO25
 * 
 * @desc
 * Comprendre ce qu'est un Callback (Fonction de rappel)
 * 
 * @tutorial (documentation)
 * - https://developer.mozilla.org/fr/docs/Glossaire/Fonction_de_rappel
 * 
 * @todo (Consignes de l'exercice)
 * 1. Compléter la function "handleCallback" pour pouvoir renvoyer la réponse avec un callback.
 * 2. Afficher la valeur de "response" au sein de vôtre callback.
 */

// Compléter la méthode handleCallback
function handleCallback(n) {
    let response = [5, 10, 20].map((nb) => nb * n);
}

// Compléter l'appelle à function ci-dessous avec un callback.
handleCallback(5);
