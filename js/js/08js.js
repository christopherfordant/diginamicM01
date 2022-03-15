(function () {
  window.onload = function () {
    const h1 = document.querySelector("#title1");

    // asynchrone : la fonction gestionnaire d'événement 
    // ne sera exécutée qu'au moment du click et 
    // l'interpreteur js n'est pas bloqué, il passe à la ligne suivante
    // pour exécuter l'instruction suivante
    h1.onclick = function () {
      console.log(`Click sur h1`);
    }
    console.log(`Hello World`);

    const a = document.querySelector("a");
    a.onclick = function (event) {
      // Supprimer  la propagation par défaut de l'événement click
      event.preventDefault();
      console.log(`Click sur a`);
    }
    // Gestion de l'événement submit du formulaire
    document.querySelector("form").onsubmit = function (event) {
      // Supprimer la propagation par défaut de l'événement submit
      event.preventDefault();
      console.log(`Formulaire soumis`);
    }
  }


})();