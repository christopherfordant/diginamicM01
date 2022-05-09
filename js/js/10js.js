(function () {
  window.onload = function () {
    fetch("https://www.coopernet.fr/rest/session/token")
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((token) => {
        console.log("token : ", token);
      })
      .catch(error => { console.error("Erreur attrapée : ", error) });

      

  }

})();

