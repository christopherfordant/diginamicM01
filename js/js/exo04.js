(function () {
  window.onload = function () {
    /**
       * Crée un élément du dom, lui ajoute du texte, le place comme dernier
       * enfant de parent et ajoute un attribut en utilisant le paramètre attribute
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
    const btn = createMarkup("button", "Ajouter un paragraphe", document.body, { name: "class", value: "btn" });

    // Ajout d'une fonction gestionnaire d'événement sur le bouton
    btn.onclick = function () {
      createMarkup("p", "Lorem Ipsum", document.body);
    }

  }
})();