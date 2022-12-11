// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

 var buttonInnerHTML = this.innerHTML;

 makeSound(buttonInnerHTML);

 buttonAnimation(buttonInnerHTML);

});

}

// Detecting Keyboard press

document.addEventListener("keypress", function() {

  makeSound(event.key);

  buttonAnimation(event.key);
})

function makeSound(key) {
  switch(key) {
    case "Kyiv":
       var kyiv = new Audio('sounds/sound1.mp3');
       kyiv.play();
    break;

    case "Kharkiv":
        var kharkiv = new Audio('sounds/sound2.mp3');
        kharkiv.play();
   break;

     case "Chernihiv":
         var chernihiv = new Audio('sounds/sound3.mp3');
         chernihiv.play();
   break;

   case "Zaporizhzhia":
       var zaporizhzhia = new Audio('sounds/sound4.mp3');
       zaporizhzhia.play();
   break;

   case "Mykolaiv":
       var mykolaiv = new Audio('sounds/sound5.mp3');
       mykolaiv.play();
   break;

   case "Dnipro":
       var dnipro = new Audio('sounds/sound6.mp3');
       dnipro.play();
   break;

   case "Odesa":
       var odesa = new Audio('sounds/sound7.mp3');
       odesa.play();
   break;

   default:
       console.log(buttonInnerHTML);

}
}


function buttonAnimation(currentKey) {

 var activeButton =  document.querySelector("." + currentKey);

 activeButton.classList.add("pressed");

 setTimeout(function() {
   activeButton.classList.remove("pressed");
 },100);
}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
