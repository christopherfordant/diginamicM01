(function () {
  // Les tableaux en javascript
  const fruits = ["Banane", "Cerise", "Pomme", "Kiwi"];

  //const fruits = new Array("Banane", "Cerise", "Pomme", "Kiwi");
  console.log(`fruits : `, fruits);

  // Parcours du tableau avec la méthode forEach
  // forEach est une "higher level function"
  // Elle attend en premier paramètre une fonction
  // La fonction donnée en argument d'une autre fonction s'appelle un "callback"
  // LE paramètre de la fonction de callback pointe vers les valeurs successive de l'instance   appelante du tableau
  fruits.forEach((elt, index, array) => {
    console.log("fruit : ", elt);
    console.log("index : ", index);
    console.log("array : ", array);
  });

  // ajout d'un élément à la fin du tableau
  fruits.push('Kiwi');

  // suppression d'un element a la fin du tableau. La méthode pop renvoie l'élément qu'elle vient de supprimer. Ici la chaîne de caractères "Orange"
  // Ici, on chaine pop avec la propriété length
  const elt = fruits.pop().length;
  console.log(`fruits : `, fruits); // Banane, Cerise, Pomme
  console.log(`elt :`, elt);

  // Méthode filter 
  const fr = fruits.filter(function (elt) {
    return elt.length > 5;
  });
  console.log(`fruits dont la taille est suppérieure à 5 : `, fr);

  const f = fruits.sort(function (a, b) {
    if (a.length < b.length)
      return -1;
    else return 1;
    // a doit être égal à b
    return 0;
  });
  console.log(`f : `, f);

  // Trier le tableau fruits en plaçant en première position les
  // fruits qui contiennent la lettre i
  const result = window.prompt("Vas tu voter pour les présidentielles ?", "chaipas");
  console.log(`result : `, result);


})();