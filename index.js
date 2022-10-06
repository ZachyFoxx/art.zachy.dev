const mdlcontainer = document.getElementById("modal-container");

var modal = document.getElementById("info-modal");
var modalClose = document.getElementById("info-button");
var spanClose = document.getElementsByClassName("close")[0];

window.onclick = function(event) {
  if (event.target == mdlcontainer) {
    mdlcontainer.style.display = "none";
    modal.style.display = "none";
  }
}

modalClose.onclick = function() {
  modal.style.display = "flex";
  mdlcontainer.style.display = "block";
}


const age = document.getElementById("age");
age.textContent = `${
  new Date(Date.now()).getFullYear() - new Date(1064120400000).getFullYear()
}`; // calculate age
