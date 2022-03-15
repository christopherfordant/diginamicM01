(function () {

  //window.document.body.innerHTML = "<h1>test Yvan</h1>";
  const h1 = document.getElementById("title1");
  console.log(`h1 : `, h1);
  h1.innerText = "Test changement de texte avec js";
  //h1.remove();

  // querySelector
  const li_26 = document.querySelector(".li-26");
  li_26.innerText = "Test changement de texte avec js";

})();