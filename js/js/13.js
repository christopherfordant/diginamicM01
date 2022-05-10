import Person, {pi} from "./classes/Person.js";
import Student from "./classes/Student.js";

(function () {
  window.onload = function () { // on attend que la page soit chargée
   const bob = new Person("Bob", "Dylan");
   console.log(bob);
   console.log(pi);
   const jose = new Student("jose", "Dylan");
   console.log(jose);
  }

})();




