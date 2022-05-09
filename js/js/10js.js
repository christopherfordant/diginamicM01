(function () {
  window.onload = function () {
    fetch("https://www.coopernet.fr/rest/session/token")
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((token) => {
        console.log("token : ", token);
        return getUser(token, "y", "sqdf");
      })
      .then(user => {
        console.log("User : ", user);
      })
      .catch(error => { console.error("Erreur attrapée : ", error) });

    /**
 * 
 * @param {string} token 
 * @param {string} login 
 * @param {string} pwd 
 * 
 * @returns promise
 */
    function getUser(token, login, pwd) {
      // création de la requête
      console.log("Dans getUser de FetchData");
      // Va chercher sur le point d'entrée :
      // https://www.coopernet.fr/user/login?_format=json 
      return fetch("https://www.coopernet.fr/user/login?_format=json", {// endpoint
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": token
        },
        body: JSON.stringify({
          name: login,
          pass: pwd
        })
      })
        .then(response => response.json())
        .then(data => {
          //console.log("success", data);
          if (data.current_user === undefined) {
            throw new Error("Erreur de login");
          } else {
            return data;
          }
        })
    };

  }

})();




