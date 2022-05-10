const form = document.querySelector("form");
    form.onsubmit = function(e) {
      e.preventDefault();
      const login = document.querySelector("#login").value;
      const pwd = document.querySelector("#pwd").value;
      console.log(login);
      console.log(pwd);
    }