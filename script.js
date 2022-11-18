

// Complexe à retenir [for] et [let], en plus d'être peu efficace au niveau de l'effet.

const gauche = document.querySelector('.gauche');
const droite = document.querySelector('.droite');
const eye = document.querySelector(".oeil");

function onMouseMovement(e) {

  let mouvementX = e.clientX * 100 / eye.offsetWidth / 10 + "%"; // Division par 420
  let mouvementY = e.clientY * 100 / eye.offsetHeight / 10 + "%"; // Division par 116

  console.log(mouvementX, ": X", mouvementY, ": Y");

  gauche.style.left = mouvementX;
  gauche.style.top = mouvementY;
  gauche.style.transform =
  "translate(" + mouvementX + ", " + mouvementY + ")";

  droite.style.left = mouvementX;
  droite.style.top = mouvementY;
  droite.style.transform =
  "translate(" + mouvementX + ", " + mouvementY + ")";
};


document.addEventListener("mousemove", onMouseMovement);
