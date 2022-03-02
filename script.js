// document.querySelector("button").addEventListener("click",clickfun)

// function clickfun(){
//     alert("i got clicked");
// }

// can be written as 👇
for (var i = 1; i < document.querySelectorAll(".key").length; i++) {
  document.querySelectorAll(".key")[i].addEventListener('click', function () {
     var buttonvar = this.innerHTML;
     makesound(keyvar);
  });
}

document.addEventListener("keypress", function (event) {
  makesound(event.key);
});

function makesound(key) {
  switch (key) {
    case "a":
      var audio = new Audio("sounds/key02.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/key04.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/key06.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("sounds/key07.mp3");
      audio.play();
      break;
    case "g":
      var audio = new Audio("sounds/key09.mp3");
      audio.play();
      break;
    case "h":
      var audio = new Audio("sounds/key11.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/key13.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/key14.mp3");
      audio.play();
      break;
    default:
      console.log(key);
      break;
  }
}



(function init() {
  document.querySelector('.piano').addEventListener('mousedown', playAudio);
})();
function playAudio(evt) {
  let audio = evt.target.children[0];
  audio.currentTime = 0
  audio.play();
}
