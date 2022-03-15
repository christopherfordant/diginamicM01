(function () {
  class Person {
    /**
         * Fonction constructeur de présentation
         * @param{​​​string}​​​first_name
         * @param{​​​string}​​​last_name
         * @return instance d'objet
         */
    constructor(first_name, last_name) {
      this.first_name = first_name;
      this.last_name = last_name;
    }
    //syntaxe qui ajoute la méthode  dans le proto dans la fonction contruct personne
    introduceMySelf() {
      console.log(`Hello my name is ${this.first_name}​​​ ` + `${this.last_name}​​​.`);
    }
  }
  const p1 = new Person(`Jean`, `Dujardin`);
  const p2 = new Person(`Pierre`, `Niney`);
  console.log(`p1`, p1);
  console.log(`p2`, p2);
  p1.introduceMySelf();
  p2.introduceMySelf();
})();