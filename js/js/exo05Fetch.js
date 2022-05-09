(function () {
    window.onload = function () {
        let token = "";
        // gestion de la validation du formulaire
        const form = document.querySelector("form");
        form.onsubmit = function (event) {
            event.preventDefault();
            console.log('lien form annulé');
            const login = document.getElementById('login').value;
            console.log(login);
            const pwd = document.getElementById("pwd").value;
            console.log(pwd);
            if (token) {
                getUser(token, login, pwd)
                    .then(user => {
                        console.log("user :", user);
                        document.getElementById("msg-form").textContent = "Vous êtes connectés";
                        user = {
                            uid: user.current_user.uid,
                            name: user.current_user.name,
                            pwd: pwd
                        }
                        return getTerms(user, token);
                    })
                    .then(terms => {

                        // On affiche les terms dans le body
                        for (let term of terms) {
                            console.log(term);
                            createMarkup("button", term.name, document.body);
                        }
                    })
                    .catch(error => {
                        document.getElementById("msg-form").textContent = "Problème d'identification";
                        console.error("erreur attrapée à la soumission du formulaire", error)
                    });
            };
        }


        fetch("https://www.coopernet.fr/rest/session/token")
            .then((response) => {
                console.log(response);
                return response.text();
            })
            .then((t) => {
                console.log("token : ", t);
                token = t;
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

            console.log("Dans getUser de FetchData", token, login, pwd);
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
                    console.log("success", data);
                    if (data.current_user === undefined) {
                        throw new Error("Erreur de login");
                    } else {
                        return data;
                    }
                })
        }


        /** 
        * Récupère les termes (rubriques) d'un utilisateur donné
        * @param {object} user 
        * @param {string} token 
        * 
        * @returns promise
        */
        function getTerms(user, token) {
            // création de la requête
            console.log("Dans getTerms -  User = ", user);
            return fetch("https://www.coopernet.fr/memo/themes/" + user.uid, {
                credentials: "same-origin",
                method: "GET",
                headers: {
                    "Content-Type": "application/hal+json",
                    "X-CSRF-Token": token,
                    Authorization: "Basic " + btoa(user.name + ":" + user.pwd), // btoa = encodage en base 64
                },
            })
                .then((response) => {
                    console.log("data reçues dans getTerms avant json() :", response);
                    if (response.status === 200) return response.json();
                    else throw new Error("Problème de réponse ", response);
                })
                .then((data) => {
                    console.log("data reçues dans getTerms :", data);
                    if (data) {
                        console.log("termes : ", data);
                        return data;
                    } else {
                        throw new Error("Problème de data " + data.message);
                    }
                });
        }

        /**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajout un attribut en utilisant le paramètre attribute
   * @param {String} markup_name 
   * @param {String} text 
   * @param {domElement} parent 
   * @param {Object} attribute  (doit comprendre les propriétés name et value)
   * @returns domElement
   */
        function createMarkup(markup_name, text, parent, attribute) {
            const markup = document.createElement(markup_name);
            markup.textContent = text;
            parent.appendChild(markup);
            if (attribute && attribute.hasOwnProperty("name")) {
                markup.setAttribute(attribute.name, attribute.value);
            }
            return markup;
        }



    }
})();




