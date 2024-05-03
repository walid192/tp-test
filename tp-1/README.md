# Plan du TP

## 1. Introduction aux tests unitaires
- Définition des tests unitaires.
- Avantages des tests unitaires dans le développement logiciel.

## 2. Présentation de Vitest
- Qu’est-ce que c’est et pourquoi l’utiliser ?
- Installation de Vitest dans un projet JavaScript.

## 3. Écriture de tests unitaires avec Vitest
- Structure des tests avec Vitest.
- Écriture de tests simples pour les fonctions JavaScript.
- Utilisation des assertions pour vérifier les résultats attendus.
- Gestion des fonctions asynchrones.

## 4. Techniques avancées d’écriture de tests avec Vitest
- Utilisation des mocks.

## Exercice 1: Fonction de transformation
- Objectif : Écrire des tests pour une fonction de transformation qui convertit une chaîne de caractères en majuscules.
- Tests effectués :
  - Cas de test avec une chaîne vide : Vérification que la fonction retourne une chaîne vide.
  - Cas de test avec une chaîne de caractères mixtes : Vérification que la fonction convertit correctement la chaîne en majuscules.
  - Cas de test avec une chaîne déjà en majuscules : Vérification que la fonction ne modifie pas la chaîne.
  - Cas de test avec une chaîne contenant des caractères spéciaux : Vérification que la fonction gère correctement ces caractères.

## Exercice 2: Fonction de tri rapide (Quick Sort)
- Objectif : Écrire des tests pour une fonction de tri rapide qui trie un tableau d'entiers.
- Tests effectués :
  - Cas de test avec un tableau non trié : Vérification que la fonction trie correctement le tableau.
  - Cas de test avec un tableau déjà trié : Vérification que la fonction ne modifie pas le tableau.
  - Cas de test avec un tableau vide : Vérification que la fonction renvoie un tableau vide.
  - Cas de test avec un tableau contenant des éléments non numériques : Vérification que la fonction lève une exception de type `TypeError`.


## Exercice 3: Fonction de vérification de prix dans une plage
- Objectif : Écrire des tests pour une fonction qui vérifie si un prix est dans une plage donnée.
- Tests effectués :
  - Cas de test avec un prix à l'intérieur de la plage : Vérification que la fonction renvoie vrai.
  - Cas de test avec un prix égal à la limite inférieure de la plage : Vérification que la fonction renvoie vrai.
  - Cas de test avec un prix égal à la limite supérieure de la plage : Vérification que la fonction renvoie vrai.
  - Cas de test avec un prix en dehors de la plage : Vérification que la fonction renvoie faux.

## Exercice 4: Fonction de récupération de données utilisateur aléatoire
- Objectif : Écrire des tests pour une fonction asynchrone qui récupère des données utilisateur aléatoires depuis une API.
- Tests effectués :
  - Test de succès : Vérification que la fonction retourne des données utilisateur définies.
  - Test de type d'objet : Vérification que la fonction retourne un objet.
  - Test de propriétés de l'objet : Vérification que l'objet retourné possède les propriétés attendues.