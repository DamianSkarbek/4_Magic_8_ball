const $ballBtn = document.querySelector(".ball-img img");
const $input = document.querySelector(".input");
const $answer = document.querySelector(".answer");
const $error = document.querySelector(".error");

const $staticAnswer = ["Tak", "Nie", "Możliwe", "Raczej nie"];

function addAnimation() {
  $ballBtn.classList.add("shake-animation");
  $ballBtn.onanimationend = () => {
    $ballBtn.classList.remove("shake-animation");
    checkInput();
  };
}

function checkInput() {
  const input = $input.value;
  $error.innerText = "";
  $answer.innerText = "";

  if (input !== "" && input.slice(-1) == "?") {
    let answer = $staticAnswer[Math.floor(Math.random() * $staticAnswer.length)];
    $answer.innerHTML = `<span>Odpowiedz: </span>${answer}`;
  } else if (input !== "") {
    $error.innerText = 'Pytanie musi kończyć się znakiem "?"';
  } else {
    $error.innerText = "Musisz zadać pytanie!";
  }
}

$ballBtn.addEventListener("click", addAnimation);
 