(function () {

  //window.document.body.innerHTML = "<h1>test Yvan</h1>";
  const h1 = document.getElementById("title1");
  console.log(`h1 : `, h1);
  h1.innerText = "Test changement de texte avec js";
  //h1.remove();

  // querySelector
  const li_26 = document.querySelector(".li-26");
  li_26.innerText = "Test changement de texte avec js";

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
  createMarkup("p", "Texte de mon paragraphe", document.body, { name: "id", value: "testYvan" });

  /* Get *******************************************************************/
  class Exemple {
    get coucou() {
      return 'monde';
    }
  }

  const obj = new Exemple();
  console.log(obj);
  // "monde"
  /*  console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), 'coucou')); */
  // { configurable: true, enumerable: false, get: function get coucou() { return 'monde'; }, set: undefined }

})();