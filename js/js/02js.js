(function () {
  console.log(`dans 02.js`);

  /**
   * Fonction qui a pour nom "addition" et qui affiche dans la console la somme des paramètres a + b 
   * @param {number} a 
   * @param {number} b 
   * @return a + b
   */
  function addition(a, b) {
    //console.log(`a + b = `, a + b);
    return a + b;
  }

  // appel de la fonction avec des arguments
  let result = addition(12, 52);
  console.log(`result = `, result);

  // Créer une fonction qui s'appelle sePresenter et qui a deux paramètres nom et prenom et qui retourne la chaîne de caractere "Bonjour, je m'appelle prenom et nom "
  // Stocker le résultat dans une variable result et l'afficher dans la console.
  // Ps : pour "concaténer", il faudra utiliser l'opérateur +
  // "Bonjour, je m'appelle " + prenom + " " + nom;

  /**
   * Fonction qui renvoie la concatétnation des paramètres nom et prénom
   * @param {string} nom 
   * @param {string} prenom 
   * @returns string
   */
  function sePresenter(nom, prenom) {
    return "Bonjour, je m'appelle " + prenom + " " + nom;
  }

  let result2 = sePresenter("Dylan", "Bob");
  console.log(`result : `, result2);

  // Fonction anonyme immédiate (IIFES)

  var i = 1;
  console.log(`dans la fonction anonyme immédiate`);

  // Fonction fléchée
  /* Fonction qui renvoie la concatétnation des paramètres nom et prénom
   * @param {string} prenom 
   * @returns string
   */
  let sePresenterBis = prenom => "Bonjour, je m'appelle " + prenom;

  let result3 = sePresenterBis("John");
  console.log(`result3 : `, result3);
  console.log(`type de sePresenterBis : `, typeof (sePresenterBis));
  console.log(`sePresenterBis : `, sePresenterBis);
  console.log(`sePresenterBis : `, sePresenterBis("titi"));
  console.log(`sePresenter : `, sePresenter);
  console.log(`sePresenter : `, sePresenter("Grominet", "titi"));
})();

