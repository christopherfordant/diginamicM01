import FetchCoopernet from "./services/FetchCoopernet.js";
(function () {
  // instanciation de FetchCoopernet
  const fc = new FetchCoopernet();

  // gestion du login avec utilisation de callback
  fc.handleFormSubmit(handleSuccessLogin, handleFailLogin);

  function handleSuccessLogin() {
    console.log("Dans handleSuccessLogin");
    // Récupération des termes (rubriques) de l'utilisateur via getTerms
  }

  function handleFailLogin() {
    console.log("Dans handleFailLogin");
    // Message pour indiquer que le login et/ou le mot de passe sont erronés
    // Reproposer le formulaire
  }

})();




