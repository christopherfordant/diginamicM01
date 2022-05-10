export default class FetchCoopernet {
  constructor() {
    this.target_url = "https://www.coopernet.fr";
    this.token = "";
    this.user = {};
    this.getToken();

  }

  handleFormSubmit(success, fail) {
    const form = document.querySelector("form");
    form.onsubmit = (e) => {
      e.preventDefault();

      this.getUser(document.querySelector("#login").value, document.querySelector("#pwd").value)
        .then(user => {

          this.user = {
            uid: user.current_user.uid,
            name: user.current_user.name,
            pwd: document.querySelector("#pwd").value
          };
          console.log("this.user : ", this.user);
          form.remove();
          success();
        })
        .catch(error => {
          console.error("Erreur attrapée : ", error);
          fail();
        });
    }
  }
  /**
  * 
  * @param {string} token 
  * @param {string} login 
  * @param {string} pwd 
  * 
  */
  getToken() {
    fetch(`${this.target_url}/rest/session/token`)
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((token) => {
        this.token = token;
      })
      .catch(error => { console.error("Erreur attrapée : ", error) });
  }

  getUser(login, pwd) {
    return fetch(`${this.target_url}/user/login?_format=json`, {// endpoint
      credentials: "same-origin",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": this.token
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
      });
  }
  /** 
     * Récupère les termes (rubriques) d'un utilisateur donné
     * 
     * @returns promise
     */
  getTerms() {
    // création de la requête
    console.log("Dans getTerms -  User = ", this.user);
    return fetch(`${this.target_url}/memo/themes/${this.user.uid}`, {
      credentials: "same-origin",
      method: "GET",
      headers: {
        "Content-Type": "application/hal+json",
        "X-CSRF-Token": this.token,
        Authorization: "Basic " + btoa(this.user.name + ":" + this.user.pwd), // btoa = encodage en base 64
      },
    })
      .then((response) => {
        console.log("data reçues dans getTerms avant json() :", response);
        if (response.status === 200) return response.json();
        else throw new Error("Problème de réponse ", response);
      })
      .then((data) => {
        if (data) {
          console.log("termes : ", data);
          return data;
        } else {
          throw new Error("Problème de data " + data.message);
        }
      });
  }
  /**
   * Va chercher les colonnes (à apprendre, ...) sous forme de tableau et les cartes correspondantes également sous forme de tableau
   * @param {object} user 
   * @param {string} token 
   * @param {number} term_number 
   * @returns promise - dans le cas favorable, retourne les données 
   */
   getCards(user, token, term_number) {
    return fetch("https://www.coopernet.fr" +
      "/memo/list_cartes_term/" +
      user.uid +
      "/" +
      term_number +
      "&_format=json&time=" +
      Math.floor(Math.random() * 10000), {
      credentials: "same-origin",
      method: "GET",
      headers: {
        "Content-Type": "application/hal+json",
        "X-CSRF-Token": token,
        "Authorization": "Basic " + btoa(user.uid + ":" + user.pwd) // btoa = encodage en base 64
      }
    })
    .then(response => {
      if (response.status === 200) return response.json(); // vérifie que le format json est respecté
      else throw new Error("Problème de réponse ", response);
    })
    .then(data => {
      console.log("data reçues dans getCards :", data);
      if (data) {
        return data;
      } else {
        throw new Error("Problème de data ", data);
      }
    });
  }

}