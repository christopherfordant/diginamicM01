(function () {
  window.onload = function () { // on attend que la page soit chargée
    const town = document.getElementById("town");
    const desc = document.getElementById("desc");
    const temp = document.getElementById("temp");
    const wind = document.getElementById("wind");
    const select = document.getElementById('select-town');
    select.onchange = function () {
      console.log("option changée");
      let value = select.options[select.selectedIndex].value;
      if(value) {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q={${value}},{},{fr}&limit=1&appid=8d1ea57f5c7bb682b127c50f23b95b2b`)// point d'entrée d'une API (endpoint)
      // Par convention, le résulat de fetch (une instance de l'objet Response) est 
      // stocké dans le premier paramètre du callback  
      .then(function (response) {
        // L'ojet response a la possibilité de vérifier si le contenu 
        // renvoyé par le serveur est au format json (text sinon)
        return response.json();// json() renvoie une promesse 
      })
      .then((data) => {
        // Si json() confirme que l'on a bien reçu une réponse au format
        // json, on se retrouve dans ce then et le json en question est
        // contenu dans le premier paramètre (ici data)
        console.log("name : ",data[0].name);
        town.textContent = data[0].name;
        console.log("Lattitude : ",data[0].lat);
        console.log("Longitude : ",data[0].lon);
        return fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lang=fr&lat=${data[0].lat}&lon=${data[0].lon}&appid=8d1ea57f5c7bb682b127c50f23b95b2b`);

      })
      .then(function (response) {
        return response.json();// json() renvoie une promesse 
      })
      .then((data) => {
        console.log(data);
        console.log(data.weather);
        desc.textContent = data.weather[0].description;
        temp.textContent = data.main.temp + " °C";
        wind.textContent = data.wind.speed + " Km/h " + direction(data.wind.deg);
      })
      .catch(error => { console.error("Erreur attrapée : ", error) });
      }
    }
    function direction(degre) {
      if (degre< 30 || degre > 350) return "Nord";
      else if(degre > 30 || degre < 55) return "Nord-Est";
      else if(degre > 55 || degre < 120) return "Est";
      else if(degre > 120 || degre < 150) return "Sud-Est";
      else if(degre > 150 || degre < 210) return "Sud";
      else if(degre > 210 || degre < 240) return "Sud-Ouest";
      else if(degre > 240 || degre < 300) return "Ouest";
      else if(degre > 300 || degre < 350) return "Nord-Ouest";
    }


    

  }

})();




