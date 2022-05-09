(function () {
  window.onload = function () {
    getToken = () => {
      return new Promise((resolve, reject) => { // resolve et reject sont des noms de param
        setTimeout(() => {
          if (Math.random() > 0.1) {
            const token = "qsdfEDLSoie5d8899;dEDd"
            console.log('Token ok');
            resolve(token);// renvoie le résultat à la méthode "then()"
          } else reject(new Error("Pas de chance, vous n'avez pas pu obtenir de token"));// renvoie le résultat à la méthode "catch"
        }, 2000)
      })
    }
    getUser = (token) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            const user = {"name": "Bob"};
            console.log('User ok');
            resolve(user);// renvoie le résultat à la méthode "then()"
          } else reject(new Error("Pb pour obtenir l'utilisateur"));// renvoie le résultat à la méthode "catch"
        }, 2000)
      })
    }
    // Je rentre dans une sécance d'appels aléatoires et asynchrones.
    // Le mécanisme des promesses me permet de mieux m'y retrouver
    // Pour savoir par quelles étapes je passe, il me suffit de regader dans les 
    // les appels de la méthode then()
    getToken()
      .then(token => {
        console.log(token);
        return getUser(token);
      })
      .then(user => {
        console.log("User : ", user);
      })
      .catch(error => {
        console.error("Erreur: ", error.message);
      });
    /*function getToken(success, fail) { // les paramètres sont de type fonction, on appelle cela des callback
      if (Math.random() > 0.5) {
        setTimeout(function () {
          console.log("Cas favorable");
          const token = "dpdoielkdsmp566dk;dee";
          success(token);
          return token;

        }, 1000);
      } else {
        setTimeout(function () {
          console.log("Cas défavorable");
          const token = "";
          fail();
          return token;
        }, 1000);
      }
    }
    console.log("avant l'appel de getToken");
    let token = getToken(manageToken,manageErrorToken);
    console.log("après l'appel de getToken");

    // Teste si le retour de getToken est favorable ?
    function manageToken(token) {
      console.log("Traitement du cas favorable");

    }
    function manageErrorToken() {
      console.log("Traitement du cas défavorable");
    }*/


  }

})();