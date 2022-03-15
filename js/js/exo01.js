/**
 * Fonction constructeur de cercles
 * @param {number} radius 
 * @param {string} name 
 * @returns instance d'objet
 */
function Circle(radius, name) {
  this.radius = radius;
  this.name = name;
}
// Ajout de la propriété area (de type fonction) au constructeur de Circle
Circle.prototype.area = function () {
  console.log(`Aire du cercle ${this.name} : ${this.pi * this.radius * this.radius}`);
}

// Ajout de la propriété pi (de type number) au constructeur de Circle
Circle.prototype.pi = 3.14;

// Instanciation
const small_circle = new Circle(2, "Petit cercle");
const big_circle = new Circle(4, "Grand cercle");

console.log(`small_circle`, small_circle);
console.log(`big_circle`, big_circle);

big_circle.area();


