(function () {

  /**
   * Fonction constructeur d'utilisateur
   * @param {String} firstname 
   * @param {String} name 
   * @param {Number} uid 
   * @returns {Object}
   */
  function User(firstname, lastname, uid) {
    // Propriétés
    this.firstname = firstname;
    this.lastname = lastname;
    this.uid = uid;

    // Une propriété de type fonction s'appelle une méthode
    this.sePresenter = function () {
      console.log(`Bonjour, je m'appelle ${this.firstname} ${this.lastname}`);
    }
  }
  // Création d'instance d'utilisateur avec new
  const bob = new User("Bob", "Dylan", 1);
  const simon = new User("Simon", "Molo", 2);
  console.log(`bob : `, bob);
  // Afficher dans la console le uid
  console.log(`uid de bob : `, bob.uid);

  // Simon se présente
  simon.sePresenter();

})();

