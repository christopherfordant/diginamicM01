export default class FetchCoopernet {
    constructor() {
        this.target_url = "https://www.coopernet.fr";
        this.token = "";
        this.getToken();
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

    getUser() {
        return fetch(`${this.target_url}/user/login?_format=json`, {// endpoint
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
            });
    }
}