(function () {
  window.onload = function () { // on attend que la page soit chargée

    // Récupération des références vers les éléments du dom
    const quote = document.querySelector("q");
    const author_p = document.getElementById("author");
    const button = document.querySelector("button");


    // Gestion du click sur le bouton
    button.onclick = function () {
      // appel de fetch qui utilise le mécanisme des promesses
      // C'est à dire que si la requête fonctionne bien,
      // le code interprêté sera celui situé dans le then suivant
      fetch("https://api.quotable.io/random")// point d'entrée d'une API (endpoint)
      // Par convention, le résulat de fetch (une instance de l'objet Response) est 
      // stocké dans le premier paramètre du callback  
      .then(function (response){
        // L'ojet response a la possibilité de vérifier si le contenu 
        // renvoyé par le serveur est au format json (text sinon)
        console.log(response);
          return response.json();// json() renvoie une promesse 
        })
        .then((data) => {
          // Si json() confirme que l'on a bien reçu une réponse au format
          // json, on se retrouve dans ce then et le json en question est
          // contenu dans le premier paramètre (ici data)
          console.log(data);
          quote.textContent = data.content;
          author_p.textContent = data.author;
        })
        .catch(error => { console.error("Erreur attrapée : ", error) });
    }

  }

})();




