(function () {
  // Class Animal
  class Animal {
    /**
     * Constructeur de la classe Person
     * @param {string} name 
     * @param {number} weight https://codeshare.io/register?saveCodeshare=xvZyMP
     * @param {number} size 
     * @returns {Person}
     */
    constructor(name, weight, size) {
      // Propriété
      this.name = name;
      this.weight = weight;
      this.size = size;
    }
    eat() {
      console.log(`Je mange`);
    }
  }
  // Class Bird qui étend de Animal
  class Bird extends Animal {
    constructor(name, weight, size, migratory) {
      super(name, weight, size);
      this.migratory = migratory;
    }

    // surcharge de la méthode eat
    eat() {
      // appel à la méthode de la classe parente
      super.eat();
      console.log(`... souvent des graines`);
    }

    fly() {
      if (this.migratory) {
        console.log("Je vole sur de longues distances");
      }
      else {
        console.log("Je vole dans le quartier");
      }
    }
  }

  const a1 = new Animal("Chien", 25, 50);
  console.log(a1);
  a1.eat();

  const b1 = new Bird("Grive", 30, 45, true);
  console.log(b1);
  b1.eat();
  b1.fly();

  const b2 = new Bird("Rouge-gorge", 10, 25, false);
  console.log(b2);
  b2.eat();
  b2.fly();
})();