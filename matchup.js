class MatchUpBox {
  constructor() {
    this.boxesArray = boxes;
  }
}

function flipBox() {
  //console.log(this)
  if (this.classList.contains("default")) {
    this.classList.remove("default");
    this.innerText = this.innerHTML;
    return;
  }
  this.classList.add("default");
}

function createDiv() {
  var boxContainer = document.querySelector("boxContainer");
  for (let i = 0; i < 8; i++) {
    var boxId = 1 + i;
    let divBox = document.createElement("div");
    divBox.innerHTML = boxId;
    divBox.id = boxId;
    divBox.classList.add("boxclass");
    divBox.classList.add(getNewRandomClass(i % 4));
    divBox.classList.add("default");
    divBox.addEventListener('click', flipBox);
    divBox.addEventListener('click', checkForBoxMatch);
    document.body.appendChild(divBox);
  }

  function getNewRandomClass(index) {
    var myArray = ['redClass', 'blueClass', 'greenClass', 'yellowClass'];
    //var randClass = myArray[Math.floor(Math.random() * myArray.length)];
    var randClass = myArray[index];
    //document.getElementById("myDiv").style.backgroundColor = rand;
    return randClass;
  }
}

function checkForBoxMatch() {
  let selectedClassList = this.classList;
  let selectedId = this.id;
  let selectedBox = this;
  var boxes = Array.from(document.getElementsByClassName("boxclass"));
  var matched = false;
  var openBox;
  boxes.forEach(function (box) {
    if (!box.classList.contains("default") && box.id != selectedId) {
      openBox = box;
      matched = (Array.from(selectedClassList).every(e => box.classList.contains(e)));
      if (matched) {
        boxMatch(selectedBox, openBox);
      } else {
        boxMismatch(selectedBox, openBox);
      }
    }
  });
}

function boxMatch(selectedBox, openBox) {
  if (selectedBox.id !== openBox.id) {
    selectedBox.classList.add("matchedBox");
    openBox.classList.add("matchedBox");
  }
}
function boxMismatch(selectedBox, openBox) {
  if ((selectedBox.id !== openBox.id)
    && (!(selectedBox.classList.contains("matchedBox") || openBox.classList.contains("matchedBox")))
  ) {
    selectedBox.classList.add("default");
    openBox.classList.add("default");
  }
}