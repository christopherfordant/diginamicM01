const link = document.getElementById("link");
link.onclick = function(e) {
    console.log("Click sur le lien");
    e.preventDefault();
}