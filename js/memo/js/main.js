import FetchCoopernet from "./services/FetchCoopernet.js";
import createMarkup from "./utils/dom.js";
(function () {
  // instanciation de FetchCoopernet
  const fc = new FetchCoopernet();

  // gestion du login avec utilisation de callback
  fc.handleFormSubmit(handleSuccessLogin, handleFailLogin);

  function handleSuccessLogin() {
    console.log("Dans handleSuccessLogin");
    // Récupération des termes (rubriques) de l'utilisateur via getTerms
    fc.getTerms()
      .then(data => {
        console.log("retour de getTerms : ", data);
        data.forEach(element => {
          createMarkup("li", element.name, document.querySelector("#terms"), {
            "name": "class",
            "value": "m-2 btn btn-warning"
          });
        });
      })
      .catch(error => {
        console.error("erreur attrapée " + error);
      })

  }

  function handleFailLogin() {
    console.log("Dans handleFailLogin");
    // Message pour indiquer que le login et/ou le mot de passe sont erronés
    // Reproposer le formulaire
  }

})();




