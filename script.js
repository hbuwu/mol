
// oef 4: grid met 9 divs
// class met background mol
// functie: willekeurig getal tussen 0 en 8
// Bij zoveelste div classname molletje toevoegen
// Bij vorige moet het verdwijnen: voor bovenstaande gebeurd moet je de vorige verwijderen (class="") -> dit dus eerst in functie molletjebeweegt
// Molletjebeweegt heeft ook counter voor aantal gevangen mollen
// Als iemand erop klikt: if this.Classname === "molletje" -> counter++

let counter = 0;

function randomNumber(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clickOn() {
  if (this.getAttribute("class") === "mol") {
    counter++;
  }
}

let divs = document.querySelectorAll("div");

function molChange() {

  for (let i = 0; i < divs.length; i++) {
    divs[i].className = "";
  }


  let number = randomNumber(0,8);
  divs[number].className = "mol";

  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", clickOn);
  }

  let text = document.querySelector("#text");
  text.innerHTML = "Gevangen molletjes: " + counter;

}

setInterval(molChange,1000);
