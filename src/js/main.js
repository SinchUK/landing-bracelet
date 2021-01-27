let movie = document.getElementById("promo");
let play = document.getElementById("play");

function playVid() { 
  movie.play();
  play.style.display = "none";
} 

movie.onended = function(e) {
  play.style.display = "block";
}

// function openForm() {
//   let form = document.getElementById("send_form");
//   form.classList.toggle("show_form");

// }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
let buy_button = document.getElementById("buy_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
buy_button.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Form validations
// function validateForm() {
//   var x = document.forms["order_form"]["name"].value;
//   console.log(x + " x");
//   if (x.length < 3) {
//     alert("Name must be filled out");
//     return false;
//   }
// }

// function validateForm(event) {
//   var x, text;
//   // Get the value of the input field with id="numb"
//   x = document.getElementById("order_form").value;
//   console.log(x + " _-_");
//   // If x is Not a Number or less than one or greater than 10
//   if (isNaN(x) || x < 1 || x > 10) {
//     text = "Input not valid";
//   } else {
//     text = "Input OK";
//   }
//   document.getElementById("footer_modal").innerHTML = text;
//   // event.preventDefault()
// }

let form = document.getElementById("form"),
    name = document.getElementById("name"),
    phone_number = document.getElementById("phone_number");
    


form.onsubmit = function(event) {
  // Проверяем введённое значение на соответствие
  if (isNaN(phone_number.value) && phone_number.value.length < 1 || x > 12) {
    let text;

    text = "Ім'я має бути більше трьох літер";
    event.preventDefault();
  } else {
    text = "Input OK";
  }
  document.getElementById("footer_modal").innerHTML = text;


  // if (name.value.length < 3 && phone_number.value !== 0) {
  //   // Если значение не подходит, отменяем автоматическую отправку формы
  //   evt.preventDefault();
  //   // И выводим предупреждение в консоль
  //   console.log('Вы не Кекс!');
  //   document.getElementById("footer_modal").innerHTML = "Ім'я має бути більше трьох літер";
  // }

  
};