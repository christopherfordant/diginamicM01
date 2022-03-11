(function () {

  /**
   * Fonction constructeur d'utilisateur
   * @param {String} firstname 
   * @param {String} name 
   * @param {Number} uid 
   * @returns {Object}
   */
  function User(firstname, name, uid) {
    // Propriété
    this.firstname = firstname;
    this.name = name;
    this.uid = uid;
  }
  // Création d'instance d'utilisateur avec new
  const bob = new User("bob", "Dylan", 1);
  console.log(`bob : `, bob);

})();

