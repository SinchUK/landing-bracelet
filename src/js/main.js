let movie = document.getElementById("promo");
let play = document.getElementById("play");

function playVid() { 
  movie.play();
  play.style.display = "none";
} 

movie.onended = function(e) {
  play.style.display = "block";
}

let item = document.getElementsByClassName("section_4_item");

function showText(event) {
  target = event.target;
  console.log(this + "this");

}
