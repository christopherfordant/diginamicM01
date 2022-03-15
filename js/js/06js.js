(function () {

  // objet littéral
  const jc = {
    nom: "Dusse",
    prenom: "Jean-Claude",
    sePresenter: function () {
      console.log("Bonjour, je m'appelle " +
        this.prenom + " " + this.nom);
    }
  }
  for (let key in jc) {
    /* console.log(`clé : ${key}`);
    console.log(`valeur : `, jc[key]); */
  }
  console.log(jc.sePresenter());
  jc["test"] = function () {
    console.log(`test`);
  }
  console.log(jc.test());
  /* const nacs = ["cochon", "serpent", "tigre"];
  for (let i = 0; i < 10; i = i + 3) {
    console.log(`i : `, i);
    //console.log(nacs[i]);
  } */
  /* const bob = { name: "bob" };
  const boby = bob; // boby a la même référence que bob

  if (bob == boby) { // Comparaison des références
    console.log(`vrai`);
  } else {
    console.log(`faux`);
  } */

  /* let i = test;// Référence à une fonction
  if (i == 2) {// comparaison de la valeur  : i est-il égal à 2
    console.log(`i est bien égal à 2`);
  } else {
    console.log(`i n'est pas égal à 2`);
  }

  if (i === 2) {// comparaison de la valeur et du type : i est-il égal à 2
    console.log(`i est bien égal à 2`);
  } else {
    console.log(`i n'est pas égal à 2`);
  }

  if (i()) {
    console.log(`vrai`);
  } else {
    console.log(`faux`);
  }

  function test() {
    console.log(`test`);
    return "Hello world";
  } */



})();