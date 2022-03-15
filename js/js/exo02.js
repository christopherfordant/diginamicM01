/**
 * Class qui construit des cercles
 */
class Circle {
  /**
   * Fonction constructeur de cercles
   * @param {number} radius 
   * @param {string} name 
   * @returns instance d'objet
   */
  constructor(radius, name) {
    this.radius = radius;
    this.name = name;
  }
  // Propriétés de classe
  static pi = 3.14;

  // Méthodes
  area() {
    console.log(`Aire du cercle ${this.name} : ${Circle.pi * this.radius * this.radius}`);
  }
}


// Instanciation
const small_circle = new Circle(2, "Petit cercle");
const big_circle = new Circle(4, "Grand cercle");

console.log(`small_circle`, small_circle);
console.log(`big_circle`, big_circle);

big_circle.area();




