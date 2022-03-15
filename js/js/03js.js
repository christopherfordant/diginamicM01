(function () {
  /**
   * Fonction constructeur de Pokemon
   * @param {string} name 
   * @param {string} type 
   * @param {string} nature 
   * @returns object
   */
  function Pokemon(name, type, nature) {
    this.name = name;
    this.type = type;
    this.nature = nature;
  }
  // Ajout d'une propriété (méthode) au prototype de la fonction constructeur Pokemon (factorisation)
  Pokemon.prototype.attack = function () {
    return Math.random() * 1000;
  }
  Pokemon.prototype.trademark = "Nintendo";
  // Instanciation
  const tadmorv = new Pokemon("Tadmorv", "Poison", "Jaloux");
  const pikachu = new Pokemon("Pikachu", "Electrique", "Discret");

  console.log(`tadmorv : `, tadmorv);
  console.log(`Marque de tadmorv : `, tadmorv.trademark);
  console.log(`pikachu : `, pikachu);

  if (tadmorv.attack() > pikachu.attack()) {
    console.log(`Tadmorv gagne `);
  } else {
    console.log(`Pikachu gagne `);
  }

  // objets littéraux qui utilisent la syntaxe json (javascript objet notation)
  const dracaufeu = {
    "name": "Dracaufeu",
    "type": "Feu",
    "nature": "Timide",
    "attack": function () {
      return Math.random() * 1000;
    }
  }
  console.log(dracaufeu);
  console.log(dracaufeu.attack());
  console.log(dracaufeu.hasOwnProperty("name"));
  console.log(dracaufeu.hasOwnProperty("qsdf"));

})();

